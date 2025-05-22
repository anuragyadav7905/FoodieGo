import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, ImageSourcePropType } from 'react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface CategoryButtonProps {
  icon: string;
  title: string;
  onPress: () => void;
}

const CategoryButton = ({ icon, title, onPress }: CategoryButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },
  icon: {
    width: 70,
    height: 70,
  },
  title: {
    ...FONTS.body4,
    fontFamily: 'Poppins-Medium',
  },
});

export default CategoryButton;