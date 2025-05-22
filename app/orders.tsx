import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ClipboardList, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { orders } from '@/data/mockData';

export default function OrdersScreen() {
  const router = useRouter();

  const renderOrderStatus = (status: string) => {
    let statusColor;
    switch (status) {
      case 'delivered':
        statusColor = COLORS.success;
        break;
      case 'in-progress':
        statusColor = COLORS.primary;
        break;
      case 'cancelled':
        statusColor = COLORS.error;
        break;
      default:
        statusColor = COLORS.textLight;
    }

    return (
      <View style={[styles.statusBadge, { backgroundColor: `${statusColor}20` }]}>
        <Text style={[styles.statusText, { color: statusColor }]}>
          {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
        </Text>
      </View>
    );
  };

  if (orders.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <ClipboardList size={80} color={COLORS.textLight} />
        <Text style={styles.emptyTitle}>No orders yet</Text>
        <Text style={styles.emptySubtitle}>Your order history will appear here</Text>
        <TouchableOpacity
          style={styles.orderNowButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.orderNowText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Image source={{ uri: item.restaurantImage }} style={styles.restaurantImage} />
              <View style={styles.orderInfo}>
                <Text style={styles.restaurantName}>{item.restaurantName}</Text>
                <Text style={styles.orderDate}>{item.date}</Text>
                <View style={styles.orderItemsPreview}>
                  <Text style={styles.orderItemsText} numberOfLines={1}>
                    {item.items.map(i => i.name).join(', ')}
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.orderFooter}>
              {renderOrderStatus(item.status)}
              <View style={styles.orderDetails}>
                <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
                <ChevronRight size={20} color={COLORS.textLight} />
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.ordersList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.padding * 5,
  },
  title: {
    ...FONTS.h1,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  ordersList: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  orderCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
    padding: SIZES.padding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: SIZES.radius,
  },
  orderInfo: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  restaurantName: {
    ...FONTS.h3,
  },
  orderDate: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  orderItemsPreview: {
    flex: 1,
  },
  orderItemsText: {
    ...FONTS.body4,
    color: COLORS.text,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.padding,
    paddingTop: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: SIZES.radius,
  },
  statusText: {
    ...FONTS.body4,
    fontFamily: 'Poppins-Medium',
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTotal: {
    ...FONTS.h3,
    marginRight: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  emptyTitle: {
    ...FONTS.h2,
    marginTop: SIZES.padding,
  },
  emptySubtitle: {
    ...FONTS.body3,
    color: COLORS.textLight,
    marginBottom: SIZES.padding * 2,
    textAlign: 'center',
  },
  orderNowButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  orderNowText: {
    ...FONTS.body3,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.white,
  },
});