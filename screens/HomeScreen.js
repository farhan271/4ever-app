import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/images/love.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Obaid ullah</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Directs</Text>
          <View style={styles.valueRow}>
            <Ionicons name="arrow-up" size={24} color="green" />
            <Text style={styles.statValue}>1</Text>
          </View>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Indirects</Text>
          <View style={styles.valueRow}>
            <Ionicons name="arrow-up" size={24} color="#F5A623" />
            <Text style={styles.statValue}>0</Text>
          </View>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Users</Text>
          <View style={styles.valueRow}>
            <Ionicons name="arrow-up" size={24} color="#4A90E2" />
            <Text style={styles.statValue}>696</Text>
          </View>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Active Income</Text>
          <View style={styles.valueRow}>
            <Ionicons name="arrow-up" size={24} color="blue" />
            <Text style={styles.statValue}>0 Rs</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF3E0', // Lightest shade of #FF8B00 for background
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#FF8B00', // Profile image border color
    marginBottom: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: '10%',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFE0B2', // Light version of #FF8B00 for card background
    padding: 15,
    borderRadius: 10,
    width: '48%',
    height: 120,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4,
    borderColor: '#FFFFFF', // Card border color
    borderWidth: 2,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8B00', // Stat value color
    marginLeft: 8,
  },
});
