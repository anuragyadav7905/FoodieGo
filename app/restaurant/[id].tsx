import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Heart, Star, Clock, Plus, Minus, ShoppingCart } from 'lucide-react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { restaurants } from '@/data/mockData';
import Button from '@/components/Button';
import MenuItem from '@/components/MenuItem';

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const restaurant = restaurants.find(r => r.id === id) || restaurants[0];
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItemCount, setCartItemCount] = useState(0);
  
  // Group menu items by category
  const menuByCategory = restaurant.menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof restaurant.menu>);
  
  const categories = ['All', ...Object.keys(menuByCategory)];
  
  const filteredMenu = activeCategory === 'All' 
    ? restaurant.menu 
    : menuByCategory[activeCategory] || [];

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: restaurant.coverImage }} 
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <View style={styles.headerActions}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <Heart size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Restaurant Info */}
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.cuisineTags}>
          {restaurant.cuisine.map((cuisine, index) => (
            <Text key={index} style={styles.cuisineTag}>
              {cuisine}{index < restaurant.cuisine.length - 1 ? ' • ' : ''}
            </Text>
          ))}
        </View>
        
        <View style={styles.restaurantMeta}>
          <View style={styles.metaItem}>
            <Star size={16} color={COLORS.primary} />
            <Text style={styles.metaText}>
              {restaurant.rating} ({restaurant.reviewCount})
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Clock size={16} color={COLORS.text} />
            <Text style={styles.metaText}>
              {restaurant.deliveryTime} min
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.deliveryFee}>
              {restaurant.deliveryFee === 0 
                ? 'Free Delivery' 
                : `$${restaurant.deliveryFee.toFixed(2)} Delivery`}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Categories Tabs */}
      <View style={styles.categoriesContainer}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryTab,
                activeCategory === category && styles.activeCategoryTab
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category && styles.activeCategoryText
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      {/* Menu Items */}
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem 
            item={item}
            onAddToCart={() => setCartItemCount(prev => prev + 1)}
          />
        )}
        contentContainerStyle={styles.menuList}
      />
      
      {/* Cart Button */}
      {cartItemCount > 0 && (
        <View style={styles.cartButtonContainer}>
          <Button
            title={`View Cart (${cartItemCount} items)`}
            onPress={() => router.push('/cart')}
            icon={<ShoppingCart color={COLORS.white} size={20} />}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding,
    paddingTop: SIZES.padding * 3,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantInfo: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    marginTop: -20,
  },
  restaurantName: {
    ...FONTS.h1,
    marginBottom: 4,
  },
  cuisineTags: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  cuisineTag: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    ...FONTS.body4,
    marginLeft: 4,
  },
  deliveryFee: {
    ...FONTS.body4,
    color: COLORS.success,
  },
  categoriesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  categoriesScroll: {
    paddingHorizontal: SIZES.padding,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: SIZES.radius,
  },
  activeCategoryTab: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    ...FONTS.body3,
    color: COLORS.text,
  },
  activeCategoryText: {
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  menuList: {
    padding: SIZES.padding,
    paddingBottom: 100, // Extra space for cart button
  },
  cartButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
});