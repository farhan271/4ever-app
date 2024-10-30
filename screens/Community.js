import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Community = () => {
  const handlePressIn = (scaleAnim) => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleAnim) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GSP Community</Text>
      <View style={styles.grid}>
        {socialMediaData.map(({ name, icon, gradient, description }, index) => {
          const scaleAnim = new Animated.Value(1);

          return (
            <Animated.View
              key={index}
              style={[styles.cardContainer, { transform: [{ scale: scaleAnim }] }]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPressIn={() => handlePressIn(scaleAnim)}
                onPressOut={() => handlePressOut(scaleAnim)}
              >
                <LinearGradient colors={gradient} style={styles.card}>
                  <FontAwesome name={icon} size={40} color="#fff" />
                  <Text style={styles.platform}>{name}</Text>
                  <Text style={styles.description}>{description}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const socialMediaData = [
  {
    name: 'Facebook',
    icon: 'facebook',
    gradient: ['#3b5998', '#4c669f'],
    description: 'Join our Facebook community',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    gradient: ['#bc2a8d', '#e95950', '#fccc63'],
    description: 'Follow us on Instagram',
  },
  {
    name: 'YouTube',
    icon: 'youtube-play',
    gradient: ['#FF0000', '#d50000'],
    description: 'Subscribe to our YouTube channel',
  },
  {
    name: 'Telegram',
    icon: 'telegram',
    gradient: ['#0088cc', '#007bb5'],
    description: 'Join us on Telegram',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    gradient: ['#25D366', '#075E54'],
    description: 'Connect with us on WhatsApp',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0', // Lightest shade of orange
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8B00', // Orange color for header
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardContainer: {
    width: '45%',
    marginVertical: 10,
  },
  card: {
    height: 150,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  platform: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Community;
