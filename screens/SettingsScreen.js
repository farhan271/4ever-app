import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* General Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>

        <View style={styles.row}>
          <Ionicons name="moon" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={(value) => setDarkModeEnabled(value)}
            thumbColor={isDarkModeEnabled ? '#FF8B00' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#FFCC99' }}
          />
        </View>

        <TouchableOpacity style={styles.row}>
          <MaterialIcons name="language" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Language</Text>
          <Text style={styles.rowTextSecondary}>English</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>

        <View style={styles.row}>
          <Ionicons name="notifications" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Enable Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={(value) => setNotificationsEnabled(value)}
            thumbColor={isNotificationsEnabled ? '#FF8B00' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#FFCC99' }}
          />
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="person" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Account Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="lock-closed" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Privacy Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="log-out" size={24} color="#FF8B00" />
          <Text style={styles.rowText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0', // Lightest shade of #FF8B00 for background
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8B00', // Orange color for header text
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#FFE0B2', // Light version of #FF8B00 for card background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF8B00', // Orange color for section titles
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD1A1', // Lighter border color within sections
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  rowTextSecondary: {
    fontSize: 16,
    color: '#666',
  },
});

export default SettingsScreen;
