import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Star, Clock } from 'lucide-react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Restaurant } from '@/types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress: () => void;
}

const RestaurantCard = ({ restaurant, onPress }: RestaurantCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      
      {restaurant.isOpen ? (
        <View style={[styles.statusBadge, styles.openBadge]}>
          <Text style={styles.statusText}>Open Now</Text>
        </View>
      ) : (
        <View style={[styles.statusBadge, styles.closedBadge]}>
          <Text style={styles.statusText}>Closed</Text>
        </View>
      )}
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        <View style={styles.cuisineContainer}>
          {restaurant.cuisine.map((cuisine, index) => (
            <Text key={index} style={styles.cuisine}>
              {cuisine}{index < restaurant.cuisine.length - 1 ? ' • ' : ''}
            </Text>
          ))}
        </View>
        
        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" />
            <Text style={styles.rating}>
              {restaurant.rating} ({restaurant.reviewCount})
            </Text>
          </View>
          
          <View style={styles.deliveryContainer}>
            <Clock size={16} color={COLORS.text} />
            <Text style={styles.deliveryTime}>
              {restaurant.deliveryTime} min
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  statusBadge: {
    position: 'absolute',
    top: SIZES.padding,
    right: SIZES.padding,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: SIZES.radius,
  },
  openBadge: {
    backgroundColor: COLORS.success,
  },
  closedBadge: {
    backgroundColor: COLORS.error,
  },
  statusText: {
    ...FONTS.body4,
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  infoContainer: {
    padding: SIZES.padding,
  },
  name: {
    ...FONTS.h2,
    marginBottom: 4,
  },
  cuisineContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  cuisine: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    ...FONTS.body4,
    marginLeft: 4,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTime: {
    ...FONTS.body4,
    marginLeft: 4,
  },
});

export default RestaurantCard;