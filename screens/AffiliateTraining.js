import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

// Sample Data
const courses = [
  {
    id: '1',
    name: 'The YouTube Business Blueprint By Magnates Media',
    videoLink: 'https://www.youtube.com/embed/QusJ4fpWQwA', // Embed URL format
    addedOn: '2024-10-10 11:08',
  },
  {
    id: '2',
    name: 'Digital Marketing - Beginner to Advanced',
    videoLink: 'https://www.youtube.com/embed/QusJ4fpWQwA', // Embed URL format
    addedOn: '2024-09-15 09:30',
  },
  {
    id: '3',
    name: 'Marketing full course',
    videoLink: 'https://www.youtube.com/embed/QusJ4fpWQwA', // Embed URL format
    addedOn: '2024-08-12 15:45',
  },
];

// Render Each Row as a Card
const CourseItem = ({ course }) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <Ionicons name="book-outline" size={20} color="#FF8B00" style={styles.icon} />
      <Text style={styles.courseName}>{course.name}</Text>
    </View>

    <View style={styles.cardRow}>
      <Ionicons name="time-outline" size={20} color="#777" style={styles.icon} />
      <Text style={styles.text}>{course.addedOn}</Text>
    </View>

    {/* Embedded YouTube Video */}
    <View style={styles.videoContainer}>
      <WebView
        style={styles.video}
        source={{ uri: course.videoLink }}
        allowsFullscreenVideo
      />
    </View>
  </View>
);

const AffiliateTraining = () => (
  <FlatList
    data={courses}
    renderItem={({ item }) => <CourseItem course={item} />}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  />
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF3E0', // Lightest shade of #FF8B00 for background
  },
  card: {
    backgroundColor: '#FFE0B2', // Light version of #FF8B00 for card background
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    width: width - 40,
    alignSelf: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF8B00',
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  icon: {
    marginRight: 8,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FF8B00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  video: {
    flex: 1,
    borderRadius: 10,
  },
});

export default AffiliateTraining;
