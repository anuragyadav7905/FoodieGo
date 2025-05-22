import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface PromotionCardProps {
  title: string;
  discount: string;
  imageUrl: string;
  onPress: () => void;
}

const PromotionCard = ({ title, discount, imageUrl, onPress }: PromotionCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.container}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 150,
    marginRight: 16,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  image: {
    borderRadius: SIZES.radius,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  discount: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: 4,
  },
  title: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});

export default PromotionCard;