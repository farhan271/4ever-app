import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const packages = [
  {
    title: 'SILVER',
    price: '3000',
    benefits: [
      'Get a referral link',
      'Make your team and earn more',
      '25% commission from your first direct',
      '10% commission from your second direct',
    ],
  },
  {
    title: 'GOLD',
    price: '6000',
    benefits: [
      'Get a referral link',
      'Make your team and earn more',
      '35% commission from your first direct',
      '15% commission from your second direct',
    ],
  },
  {
    title: 'PLATINUM',
    price: '10000',
    benefits: [
      'Get a referral link',
      'Make your team and earn more',
      '45% commission from your first direct',
      '20% commission from your second direct',
    ],
  },
];

const Packages = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>CHECK OUR PRICING</Text>
      <View style={styles.packageContainer}>
        {packages.map((pkg, index) => (
          <View key={index} style={styles.card}>
            <LinearGradient
              colors={['#FF8B00', '#FFD1A1']}
              style={styles.cardHeader}
            >
              <Text style={styles.cardTitle}>{pkg.title}</Text>
            </LinearGradient>
            <View style={styles.cardBody}>
              <Text style={styles.price}>Rs {pkg.price}</Text>
              {pkg.benefits.map((benefit, idx) => (
                <Text key={idx} style={styles.benefit}>
                  {benefit}
                </Text>
              ))}
            </View>
            <TouchableOpacity 
  style={styles.button} 
  onPress={() => navigation.navigate('Payment')}
>
  <Text style={styles.buttonText}>Pay Now</Text>
</TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF3E0', // Light orange background color
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8B00',
    marginBottom: 20,
  },
  packageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: width * 0.9, // Set card width to 90% of screen width for eye-catching size
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardHeader: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardBody: {
    padding: 20,
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8B00',
    marginBottom: 15,
  },
  benefit: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#FF8B00',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Packages;
