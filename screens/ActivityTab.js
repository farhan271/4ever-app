// ActivityTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity Tab Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#0185C1',
  },
});
