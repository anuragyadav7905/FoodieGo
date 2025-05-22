import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, CreditCard, Wallet } from 'lucide-react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import Button from '@/components/Button';

export default function CheckoutScreen() {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [paymentMethod, setPaymentMethod] = useState('google-pay');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [selectedTip, setSelectedTip] = useState(3);

  const addresses = {
    home: {
      type: 'Home',
      address: '123 Park Avenue, Apt 4B',
      city: 'New York, NY 10016',
      deliveryTime: '25-30 mins'
    },
    office: {
      type: 'Office',
      address: '456 Madison Avenue',
      city: 'New York, NY 10022',
      deliveryTime: '35-40 mins'
    }
  };

  const handlePlaceOrder = () => {
    router.push('/order-tracking');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.addressContainer}>
            {Object.entries(addresses).map(([key, value]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.addressCard,
                  selectedAddress === key && styles.selectedAddressCard
                ]}
                onPress={() => setSelectedAddress(key)}
              >
                <View style={styles.addressHeader}>
                  <Text style={styles.addressType}>{value.type}</Text>
                  {selectedAddress === key && (
                    <View style={styles.selectedIndicator} />
                  )}
                </View>
                <Text style={styles.addressText}>{value.address}</Text>
                <Text style={styles.addressCity}>{value.city}</Text>
                <Text style={styles.deliveryTime}>
                  Estimated delivery: {value.deliveryTime}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentContainer}>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'google-pay' && styles.selectedPayment
              ]}
              onPress={() => setPaymentMethod('google-pay')}
            >
              <Wallet size={24} color={COLORS.text} />
              <Text style={styles.paymentText}>Google Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'card' && styles.selectedPayment
              ]}
              onPress={() => setPaymentMethod('card')}
            >
              <CreditCard size={24} color={COLORS.text} />
              <Text style={styles.paymentText}>Credit/Debit Card</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.orderSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryValue}>$36.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$3.99</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Tax</Text>
              <Text style={styles.summaryValue}>$3.20</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalValue}>$43.19</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Instructions</Text>
          <TextInput
            style={styles.instructionsInput}
            placeholder="Any special instructions for delivery?"
            value={deliveryInstructions}
            onChangeText={setDeliveryInstructions}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tip for Delivery Partner</Text>
          <View style={styles.tipContainer}>
            {[2, 3, 5].map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.tipButton,
                  selectedTip === amount && styles.selectedTipButton
                ]}
                onPress={() => setSelectedTip(amount)}
              >
                <Text
                  style={[
                    styles.tipButtonText,
                    selectedTip === amount && styles.selectedTipText
                  ]}
                >
                  ${amount}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[
                styles.tipButton,
                selectedTip === 'custom' && styles.selectedTipButton
              ]}
              onPress={() => setSelectedTip('custom')}
            >
              <Text
                style={[
                  styles.tipButtonText,
                  selectedTip === 'custom' && styles.selectedTipText
                ]}
              >
                Custom
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={`Place Order • $43.19`}
          onPress={handlePlaceOrder}
          style={styles.placeOrderButton}
        />
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
  section: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  sectionTitle: {
    ...FONTS.h3,
    marginBottom: SIZES.padding,
  },
  addressContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SIZES.padding,
  },
  addressCard: {
    flex: 1,
    minWidth: '45%',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  selectedAddressCard: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressType: {
    ...FONTS.h4,
  },
  selectedIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  addressText: {
    ...FONTS.body3,
    marginBottom: 4,
  },
  addressCity: {
    ...FONTS.body4,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  deliveryTime: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  paymentContainer: {
    gap: SIZES.padding,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  selectedPayment: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  paymentText: {
    ...FONTS.body3,
    marginLeft: SIZES.padding,
  },
  orderSummary: {
    backgroundColor: COLORS.lightGray,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  summaryValue: {
    ...FONTS.body3,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
  totalText: {
    ...FONTS.h3,
  },
  totalValue: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  instructionsInput: {
    ...FONTS.body3,
    height: 80,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    textAlignVertical: 'top',
  },
  tipContainer: {
    flexDirection: 'row',
    gap: SIZES.padding,
  },
  tipButton: {
    flex: 1,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    alignItems: 'center',
  },
  selectedTipButton: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  tipButtonText: {
    ...FONTS.body3,
  },
  selectedTipText: {
    color: COLORS.white,
  },
  footer: {
    padding: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  placeOrderButton: {
    marginTop: SIZES.padding,
  },
});