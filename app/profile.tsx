import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { User, Settings, CreditCard, MapPin, Heart, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

export default function ProfileScreen() {
  const router = useRouter();
  
  const profileSections = [
    {
      title: 'Account Settings',
      items: [
        { icon: <User size={22} color={COLORS.text} />, label: 'Personal Information', action: () => {} },
        { icon: <MapPin size={22} color={COLORS.text} />, label: 'Saved Addresses', action: () => {} },
        { icon: <CreditCard size={22} color={COLORS.text} />, label: 'Payment Methods', action: () => {} }
      ]
    },
    {
      title: 'Food Preferences',
      items: [
        { icon: <Heart size={22} color={COLORS.text} />, label: 'Favorite Restaurants', action: () => {} },
        { icon: <Settings size={22} color={COLORS.text} />, label: 'Dietary Preferences', action: () => {} }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: <HelpCircle size={22} color={COLORS.text} />, label: 'Help Center', action: () => {} },
        { icon: <LogOut size={22} color={COLORS.error} />, label: 'Sign Out', action: () => router.push('/auth'), textColor: COLORS.error }
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      
      <View style={styles.profileCard}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} 
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {profileSections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity 
              key={itemIndex} 
              style={styles.menuItem}
              onPress={item.action}
            >
              <View style={styles.menuItemLeft}>
                {item.icon}
                <Text style={[styles.menuItemText, item.textColor && { color: item.textColor }]}>
                  {item.label}
                </Text>
              </View>
              <ChevronRight size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
      
      <View style={styles.appInfo}>
        <Text style={styles.versionText}>Version 2.1.0</Text>
        <Text style={styles.copyrightText}>© 2025 FoodieGo. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: SIZES.padding * 5,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  title: {
    ...FONTS.h1,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding * 2,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: SIZES.padding,
    flex: 1,
  },
  profileName: {
    ...FONTS.h2,
  },
  profileEmail: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    ...FONTS.body4,
    fontFamily: 'Poppins-Medium',
    color: COLORS.text,
  },
  section: {
    marginBottom: SIZES.padding * 2,
  },
  sectionTitle: {
    ...FONTS.h3,
    marginLeft: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    ...FONTS.body2,
    marginLeft: SIZES.padding,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: SIZES.padding * 2,
  },
  versionText: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  copyrightText: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginTop: 4,
  },
});