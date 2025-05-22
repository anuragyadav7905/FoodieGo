import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { MapPin, Bell, Search, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import RestaurantCard from '@/components/RestaurantCard';
import CategoryButton from '@/components/CategoryButton';
import PromotionCard from '@/components/PromotionCard';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { restaurants, categories, promotions } from '@/data/mockData';

export default function HomeScreen() {
  const router = useRouter();
  const [address, setAddress] = useState('123 Main Street, New York');

  const handleRestaurantPress = (id: string) => {
    router.push(`/restaurant/${id}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.addressContainer}>
          <MapPin size={18} color={COLORS.primary} />
          <Text style={styles.address} numberOfLines={1}>{address}</Text>
          <ChevronDown size={16} color={COLORS.text} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <TouchableOpacity 
        style={styles.searchBar}
        onPress={() => router.push('/search')}
      >
        <Search size={18} color={COLORS.textLight} />
        <Text style={styles.searchText}>Search restaurants or dishes...</Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Featured Promotion */}
        <View style={styles.featuredContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' }} 
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredTitle}>30% OFF</Text>
            <Text style={styles.featuredSubtitle}>On your first order</Text>
            <TouchableOpacity style={styles.orderNowButton}>
              <Text style={styles.orderNowText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <CategoryButton 
                key={category.id}
                icon={category.icon}
                title={category.name}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>

        {/* Promotions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promotionsContainer}
          >
            {promotions.map((promo) => (
              <PromotionCard 
                key={promo.id}
                title={promo.title}
                discount={promo.discount}
                imageUrl={promo.imageUrl}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </View>

        {/* Popular Restaurants */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id}
              restaurant={restaurant}
              onPress={() => handleRestaurantPress(restaurant.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 5,
    paddingBottom: SIZES.padding,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  address: {
    ...FONTS.body3,
    marginLeft: 4,
    marginRight: 4,
    color: COLORS.text,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    height: 46,
    borderRadius: SIZES.radius,
  },
  searchText: {
    ...FONTS.body3,
    color: COLORS.textLight,
    marginLeft: 8,
  },
  scrollContent: {
    paddingBottom: SIZES.padding * 2,
  },
  featuredContainer: {
    margin: SIZES.padding,
    height: 180,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: SIZES.padding,
    justifyContent: 'center',
  },
  featuredTitle: {
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: 8,
  },
  featuredSubtitle: {
    ...FONTS.body3,
    color: COLORS.white,
    marginBottom: 16,
  },
  orderNowButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: SIZES.radius,
    alignSelf: 'flex-start',
  },
  orderNowText: {
    ...FONTS.body3,
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  sectionContainer: {
    marginTop: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h2,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  categoriesContainer: {
    paddingHorizontal: SIZES.padding,
  },
  promotionsContainer: {
    paddingHorizontal: SIZES.padding,
  },
});