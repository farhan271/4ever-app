// HomeTab.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons for arrows

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
    padding: 15, // Reduced padding for compact design
    backgroundColor: '#F2F7F8', // Light background color
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20, // Slightly smaller margin
  },
  profileImage: {
    width: 150,  // Increased width
    height: 150, // Increased height
    borderRadius: 75, // Half of width/height for a perfect circle
    borderWidth: 5,   // Thicker border for emphasis
    borderColor: '#0185C1',
    marginBottom: 5, // Slightly increased bottom margin for spacing
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
    backgroundColor: '#fff',
    padding: 15, // Compact card padding
    borderRadius: 10,
    width: '48%', // Compact width for smaller cards
    height: 120, // Fixed height for uniform cards
    marginVertical: 10, // Reduced margin
    alignItems: 'center', // Align content to center horizontally
    justifyContent: 'center', // Align content to center vertically
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4, // Subtle shadow for Android
    borderColor: '#0185C1', // Border color
    borderWidth: 2, // Border width for visibility
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    // Center-align the label text
  },
  valueRow: {
    flexDirection: 'row', // Row layout for icon and value
    alignItems: 'center', // Align icon and value vertically centered
    justifyContent: 'center', // Center-align the entire row horizontally
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0185C1',
    marginLeft: 8, // Space between arrow and value
  },
});
