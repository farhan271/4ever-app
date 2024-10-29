import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

// Get device width for responsive card design
const { width } = Dimensions.get('window');

// Updated Data for Top Users
const topUsers = [
  { id: '1', name: 'Arfa Irfan', rank: 1 },
  { id: '2', name: 'Kainat Abbas', rank: 2 },
  { id: '3', name: 'Ayiza Waqar', rank: 3 },
  { id: '4', name: 'Alia Waheed', rank: 4 },
  { id: '5', name: 'Zahida Parveen', rank: 5 },
  { id: '6', name: 'SYED FADIL AHMED SUBZWARI', rank: 6 },
  { id: '7', name: 'Jamil Razak', rank: 7 },
  { id: '8', name: 'Muhammad Asim', rank: 8 },
  { id: '9', name: 'Muhammad Tahir', rank: 9 },
  { id: '10', name: 'Rabia Laeeq', rank: 10 },
];

// Render each user row
const UserItem = ({ user }) => (
    <View style={styles.userCard}>
      <View style={styles.userInfo}>
        <Image source={require('../assets/images/love.jpg')} style={styles.avatar} />
        <Text style={styles.userName}>
          {user.name.length > 14 
            ? `${user.name.slice(0, 14)}\n${user.name.slice(14)}` 
            : user.name}
        </Text>
      </View>
      <View style={styles.rankBadge}>
        <Text style={styles.rankText}>Top {user.rank}</Text>
      </View>
    </View>
  );
  

const LeaderBoard = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🏆 Top 10 Users (All Time Earning)</Text>
    <FlatList
      data={topUsers}
      renderItem={({ item }) => <UserItem user={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: width - 40,
    alignSelf: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  rankBadge: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: '#FF6347',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  rankText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default LeaderBoard;
