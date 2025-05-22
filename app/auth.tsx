import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import Button from '@/components/Button';

export default function AuthScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleContinue = () => {
    if (otpCode.length >= 4) {
      router.push('/');
    }
  };

  const handleSignUpLink = () => {
    setActiveTab('signup');
    setOtpSent(false);
    setPhoneNumber('');
    setOtpCode('');
  };

  const handleLoginLink = () => {
    setActiveTab('login');
    setOtpSent(false);
    setPhoneNumber('');
    setOtpCode('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>FoodieGo</Text>
      </View>
      
      <Text style={styles.welcomeText}>
        {activeTab === 'login' ? 'Welcome back!' : 'Create an account'}
      </Text>
      <Text style={styles.subtitle}>
        {activeTab === 'login' 
          ? 'Please enter your phone number' 
          : 'Enter your details to get started'
        }
      </Text>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'login' && styles.activeTabButton
          ]}
          onPress={handleLoginLink}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'login' && styles.activeTabText
          ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'signup' && styles.activeTabButton
          ]}
          onPress={handleSignUpLink}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'signup' && styles.activeTabText
          ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        
        {otpSent && (
          <View style={styles.inputContainer}>
            <View style={styles.otpHeader}>
              <Text style={styles.inputLabel}>OTP Code</Text>
              <TouchableOpacity onPress={handleSendOTP}>
                <Text style={styles.resendText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP code"
              value={otpCode}
              onChangeText={setOtpCode}
              keyboardType="numeric"
            />
          </View>
        )}
        
        {otpSent ? (
          <Button 
            title="Continue" 
            onPress={handleContinue} 
          />
        ) : (
          <Button 
            title="Send OTP" 
            onPress={handleSendOTP} 
          />
        )}
      </View>
      
      {activeTab === 'login' ? (
        <Text style={styles.switchText}>
          Don't have an account?{' '}
          <Text style={styles.switchLink} onPress={handleSignUpLink}>
            Sign up here
          </Text>
        </Text>
      ) : (
        <Text style={styles.switchText}>
          Already have an account?{' '}
          <Text style={styles.switchLink} onPress={handleLoginLink}>
            Login
          </Text>
        </Text>
      )}
      
      <Text style={styles.termsText}>
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: SIZES.padding * 5,
    marginBottom: SIZES.padding * 3,
  },
  logo: {
    ...FONTS.logo,
    color: COLORS.primary,
    fontSize: 32,
  },
  welcomeText: {
    ...FONTS.h1,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...FONTS.body3,
    textAlign: 'center',
    color: COLORS.textLight,
    marginBottom: SIZES.padding * 2,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.padding * 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: SIZES.padding,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGray,
  },
  activeTabButton: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.h3,
    color: COLORS.textLight,
  },
  activeTabText: {
    color: COLORS.primary,
  },
  formContainer: {
    marginBottom: SIZES.padding * 2,
  },
  inputContainer: {
    marginBottom: SIZES.padding,
  },
  inputLabel: {
    ...FONTS.body3,
    marginBottom: 8,
  },
  input: {
    ...FONTS.body2,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
  },
  otpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resendText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  switchText: {
    ...FONTS.body3,
    textAlign: 'center',
    marginBottom: SIZES.padding * 2,
  },
  switchLink: {
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  termsText: {
    ...FONTS.body4,
    textAlign: 'center',
    color: COLORS.textLight,
  },
});