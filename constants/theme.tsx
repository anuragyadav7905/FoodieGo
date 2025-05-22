export const COLORS = {
  // Primary
  primary: '#FF6B00',
  secondary: '#00BFA6',
  
  // Accent
  accent: '#FFC043',
  
  // Status
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  
  // Neutrals
  text: '#333333',
  textLight: '#6B7280',
  lightGray: '#F3F4F6',
  gray: '#D1D5DB',
  darkGray: '#4B5563',
  white: '#FFFFFF',
  black: '#000000',
  
  // Transparency
  transparentBlack: 'rgba(0, 0, 0, 0.5)',
  transparentWhite: 'rgba(255, 255, 255, 0.8)',
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 8,
  padding: 16,
  
  // Font sizes
  largeTitle: 32,
  h1: 24,
  h2: 20,
  h3: 18,
  h4: 16,
  body1: 16,
  body2: 14,
  body3: 12,
  body4: 10,
  
  // App dimensions
  width: null,
  height: null,
};

export const FONTS = {
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.largeTitle,
  },
  largeTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 38,
  },
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
    lineHeight: 32,
  },
  h2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h2,
    lineHeight: 28,
  },
  h3: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h3,
    lineHeight: 24,
  },
  h4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 24,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 22,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 18,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 14,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;