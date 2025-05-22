import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Menu } from 'lucide-react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { MenuItem as MenuItemType } from '@/types';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: () => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = () => {
    setQuantity(prev => prev + 1);
    onAddToCart();
  };

  const handleRemoveItem = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.customizeButton}>
          <Menu size={16} color={COLORS.text} />
          <Text style={styles.customizeText}>Customize</Text>
        </TouchableOpacity>
        
        <View style={styles.quantityControls}>
          {quantity > 0 && (
            <>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={handleRemoveItem}
              >
                <Minus size={16} color={COLORS.text} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
            </>
          )}
          <TouchableOpacity 
            style={[styles.quantityButton, styles.addButton]}
            onPress={handleAddItem}
          >
            <Plus size={16} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  content: {
    flexDirection: 'row',
  },
  details: {
    flex: 1,
    marginRight: SIZES.padding,
  },
  name: {
    ...FONTS.h3,
    marginBottom: 4,
  },
  description: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  price: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.radius,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  customizeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customizeText: {
    ...FONTS.body4,
    marginLeft: 4,
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
  addButton: {
    backgroundColor: COLORS.primary,
  },
  quantity: {
    ...FONTS.body3,
    marginHorizontal: 8,
  },
});

export default MenuItem;