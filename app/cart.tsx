import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { cartItems } from '@/data/mockData';
import Button from '@/components/Button';

export default function CartScreen() {
  const router = useRouter();
  const [items, setItems] = useState(cartItems);

  const updateItemQuantity = (id: string, change: number) => {
    setItems(currentItems => 
      currentItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const deliveryFee = 2.99;
  const tax = calculateSubtotal() * 0.08;
  const total = calculateSubtotal() + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <ShoppingBag size={80} color={COLORS.textLight} />
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySubtitle}>Add items to get started</Text>
        <Button 
          title="Browse Restaurants" 
          onPress={() => router.push('/')} 
          style={styles.browseButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <X size={18} color={COLORS.textLight} />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemRestaurant}>{item.restaurantName}</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateItemQuantity(item.id, -1)}
                  >
                    <Minus size={16} color={COLORS.text} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateItemQuantity(item.id, 1)}
                  >
                    <Plus size={16} color={COLORS.text} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.cartList}
      />
      
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryValue}>${calculateSubtotal().toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Tax</Text>
          <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
        
        <Button 
          title="Proceed to Checkout" 
          onPress={() => {}} 
          style={styles.checkoutButton}
        />
      </View>
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
  cartList: {
    paddingHorizontal: SIZES.padding,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: SIZES.padding,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: SIZES.radius,
  },
  itemDetails: {
    flex: 1,
    marginLeft: SIZES.padding,
    justifyContent: 'space-between',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    ...FONTS.h3,
    flex: 1,
    marginRight: SIZES.padding,
  },
  itemRestaurant: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  itemPrice: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    ...FONTS.body3,
    marginHorizontal: 8,
  },
  summary: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    padding: SIZES.padding,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    marginBottom: SIZES.padding,
  },
  summaryText: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  summaryValue: {
    ...FONTS.body3,
  },
  totalText: {
    ...FONTS.h3,
  },
  totalValue: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  checkoutButton: {
    marginTop: SIZES.padding,
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
  },
  browseButton: {
    width: '70%',
  },
});