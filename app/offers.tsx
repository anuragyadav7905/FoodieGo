import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

const OFFERS = [
  {
    code: 'WELCOME50',
    description: '50% off up to $10 on your first order',
    validTill: 'June 30, 2024',
  },
  {
    code: 'WEEKEND30',
    description: '30% off up to $8 on orders above $20',
    validTill: 'June 23, 2024',
  },
];

const RESTAURANT_DEALS = [
  {
    id: '1',
    name: 'Italian Delight',
    discount: '30% OFF',
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
  },
  {
    id: '2',
    name: 'Sushi Master',
    discount: '25% OFF',
    image: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg',
  },
];

const PAYMENT_OFFERS = [
  {
    id: '1',
    provider: 'Visa Cards',
    logo: 'visa',
    offer: 'Get 10% cashback',
  },
  {
    id: '2',
    provider: 'Wallet Pay',
    logo: 'wallet',
    offer: 'Get 5% instant discount',
  },
];

export default function OffersScreen() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Offers & Deals</Text>
      </View>

      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>50% OFF</Text>
          <Text style={styles.bannerSubtitle}>On your first order</Text>
          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
            All Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'restaurant' && styles.activeTab]}
          onPress={() => setActiveTab('restaurant')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'restaurant' && styles.activeTabText,
            ]}
          >
            Restaurant Deals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'payment' && styles.activeTab]}
          onPress={() => setActiveTab('payment')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'payment' && styles.activeTabText,
            ]}
          >
            Payment Offers
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {OFFERS.map((offer, index) => (
          <View key={index} style={styles.offerCard}>
            <View style={styles.offerContent}>
              <Text style={styles.offerCode}>{offer.code}</Text>
              <Text style={styles.offerDescription}>{offer.description}</Text>
              <Text style={styles.validTill}>Valid till {offer.validTill}</Text>
            </View>
            <TouchableOpacity style={styles.copyButton}>
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Restaurant Deals</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.restaurantDealsContainer}
        >
          {RESTAURANT_DEALS.map((deal) => (
            <View key={deal.id} style={styles.dealCard}>
              <Image source={{ uri: deal.image }} style={styles.dealImage} />
              <View style={styles.dealBadge}>
                <Text style={styles.dealBadgeText}>{deal.discount}</Text>
              </View>
              <Text style={styles.dealName}>{deal.name}</Text>
              <TouchableOpacity style={styles.orderNowButton}>
                <Text style={styles.orderNowText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Payment Partner Offers</Text>
        {PAYMENT_OFFERS.map((offer) => (
          <View key={offer.id} style={styles.paymentOfferCard}>
            <View style={styles.paymentOfferContent}>
              <Text style={styles.paymentProvider}>{offer.provider}</Text>
              <Text style={styles.paymentOffer}>{offer.offer}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 5,
    paddingBottom: SIZES.padding,
  },
  headerTitle: {
    ...FONTS.h1,
  },
  banner: {
    margin: SIZES.padding,
    height: 150,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    overflow: 'hidden',
  },
  bannerContent: {
    padding: SIZES.padding,
    justifyContent: 'center',
    height: '100%',
  },
  bannerTitle: {
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: 4,
  },
  bannerSubtitle: {
    ...FONTS.body2,
    color: COLORS.white,
    marginBottom: SIZES.padding,
  },
  claimButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: SIZES.radius,
    alignSelf: 'flex-start',
  },
  claimButtonText: {
    ...FONTS.body3,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: SIZES.radius,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.body3,
    color: COLORS.text,
  },
  activeTabText: {
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  offerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SIZES.padding,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  offerContent: {
    flex: 1,
  },
  offerCode: {
    ...FONTS.h3,
    marginBottom: 4,
  },
  offerDescription: {
    ...FONTS.body3,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  validTill: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  copyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
  },
  copyButtonText: {
    ...FONTS.body4,
    fontFamily: 'Poppins-SemiBold',
  },
  sectionTitle: {
    ...FONTS.h2,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding,
  },
  restaurantDealsContainer: {
    paddingHorizontal: SIZES.padding,
  },
  dealCard: {
    width: 250,
    marginRight: SIZES.padding,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  dealImage: {
    width: '100%',
    height: 150,
  },
  dealBadge: {
    position: 'absolute',
    top: SIZES.padding,
    right: SIZES.padding,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: SIZES.radius,
  },
  dealBadgeText: {
    ...FONTS.body4,
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  dealName: {
    ...FONTS.h3,
    margin: SIZES.padding,
  },
  orderNowButton: {
    margin: SIZES.padding,
    padding: SIZES.padding,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  orderNowText: {
    ...FONTS.body3,
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
  },
  paymentOfferCard: {
    margin: SIZES.padding,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  paymentOfferContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentProvider: {
    ...FONTS.h3,
  },
  paymentOffer: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
});