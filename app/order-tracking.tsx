import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import Button from '@/components/Button';

const ORDER_STEPS = [
  { id: 'confirmed', label: 'Order Confirmed', time: '5:42 PM', completed: true },
  { id: 'preparing', label: 'Preparing Your Order', time: '5:45 PM', completed: true },
  { id: 'delivery', label: 'On the Way', time: 'Expected 6:05 PM', completed: true },
  { id: 'delivered', label: 'Delivered', time: '-', completed: false },
];

export default function OrderTrackingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track Order #2847</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estimated Delivery</Text>
            <Text style={styles.infoValue}>20-25 mins</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Order Total</Text>
            <Text style={styles.infoValue}>$42.80</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg' }}
            style={styles.map}
          />
          <View style={styles.distanceBadge}>
            <Text style={styles.distanceText}>1.2 miles away</Text>
          </View>
        </View>

        <View style={styles.driverInfo}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.driverImage}
          />
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>Michael Rodriguez</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ 4.9</Text>
              <Text style={styles.deliveryCount}>(2.4k deliveries)</Text>
            </View>
          </View>
          <View style={styles.driverActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Phone size={20} color={COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.timeline}>
          {ORDER_STEPS.map((step, index) => (
            <View key={step.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View
                  style={[
                    styles.timelineDot,
                    step.completed && styles.completedDot
                  ]}
                />
                {index < ORDER_STEPS.length - 1 && (
                  <View
                    style={[
                      styles.timelineLine,
                      step.completed && styles.completedLine
                    ]}
                  />
                )}
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabel}>{step.label}</Text>
                <Text style={styles.timelineTime}>{step.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.orderDetails}>
          <Text style={styles.orderDetailsTitle}>Order Details</Text>
          <View style={styles.orderItem}>
            <Text style={styles.itemQuantity}>2x</Text>
            <Text style={styles.itemName}>Grilled Salmon Bowl</Text>
            <Text style={styles.itemPrice}>$25.90</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.itemQuantity}>1x</Text>
            <Text style={styles.itemName}>Caesar Salad</Text>
            <Text style={styles.itemPrice}>$12.90</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.itemQuantity}>1x</Text>
            <Text style={styles.itemName}>Fresh Lemonade</Text>
            <Text style={styles.itemPrice}>$4.00</Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentMethod}>Paid via Apple Pay</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Need Help?" onPress={() => {}} variant="outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 5,
    paddingBottom: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  headerTitle: {
    ...FONTS.h2,
  },
  content: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  infoRow: {
    flex: 1,
  },
  infoLabel: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  infoValue: {
    ...FONTS.h3,
  },
  mapContainer: {
    height: 200,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  distanceBadge: {
    position: 'absolute',
    right: SIZES.padding,
    bottom: SIZES.padding,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: SIZES.radius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  distanceText: {
    ...FONTS.body4,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  driverDetails: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  driverName: {
    ...FONTS.h3,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.body3,
    color: COLORS.primary,
    marginRight: 4,
  },
  deliveryCount: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  driverActions: {
    flexDirection: 'row',
    gap: SIZES.padding,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeline: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: SIZES.padding,
  },
  timelineLeft: {
    width: 24,
    alignItems: 'center',
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
  },
  completedDot: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.gray,
    marginVertical: 4,
  },
  completedLine: {
    backgroundColor: COLORS.primary,
  },
  timelineContent: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  timelineLabel: {
    ...FONTS.body3,
  },
  timelineTime: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  orderDetails: {
    padding: SIZES.padding,
  },
  orderDetailsTitle: {
    ...FONTS.h3,
    marginBottom: SIZES.padding,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemQuantity: {
    ...FONTS.body3,
    width: 30,
  },
  itemName: {
    ...FONTS.body3,
    flex: 1,
  },
  itemPrice: {
    ...FONTS.body3,
  },
  paymentInfo: {
    marginTop: SIZES.padding,
    paddingTop: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  paymentMethod: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  footer: {
    padding: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
});