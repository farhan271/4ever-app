import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Sample Data
const courses = [
  {
    id: '1',
    name: 'The YouTube Business Blueprint By Magnates Media',
    videoLink: 'https://youtu.be/example1', // Example link
    addedOn: '2024-10-10 11:08',
  },
  {
    id: '2',
    name: 'Digital Marketing - Beginner to Advanced',
    videoLink: 'https://youtu.be/example2', // Example link
    addedOn: '2024-09-15 09:30',
  },
  {
    id: '3',
    name: 'Marketing full course',
    videoLink: 'https://youtu.be/example3', // Example link
    addedOn: '2024-08-12 15:45',
  },
];

// Render Each Row as a Card
const CourseItem = ({ course }) => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <Ionicons name="book-outline" size={20} color="#0085C1" style={styles.icon} />
      <Text style={styles.courseName}>{course.name}</Text>
    </View>

    <View style={styles.cardRow}>
      <Ionicons name="time-outline" size={20} color="#777" style={styles.icon} />
      <Text style={styles.text}>{course.addedOn}</Text>
    </View>

    <TouchableOpacity
      style={styles.watchButton}
      onPress={() => Linking.openURL(course.videoLink)}
    >
      <Text style={styles.watchButtonText}>Watch Video</Text>
    </TouchableOpacity>
  </View>
);

const Courses = () => (
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
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: width - 40,
    alignSelf: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  icon: {
    marginRight: 8,
  },
  watchButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#0085C1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Courses;
