import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Modal, TextInput, Clipboard, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const referrals = [
  {
    id: '1',
    firstName: 'Sehrish Khalil',
    contact: '03278591874',
    email: 'sehrishkhalil083@gmail.com',
    gender: 'Male',
    package: 'Platinum',
    amount: '0',
  },
  // Additional referrals can be added here
];

const MyReferrals = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [referralLink, setReferralLink] = useState('');

  const openModal = (id) => {
    setReferralLink(`http://www.globalskillspro.com/register.php?id=${id}`);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    Alert.alert('Copied', 'Referral link has been copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>

      {/* Get Referral Link Button at Top Right */}
      <TouchableOpacity style={styles.referralButton} onPress={() => openModal('j4ever2x287')}>
        <Ionicons name="link" size={16} color="#fff" />
        <Text style={styles.referralButtonText}>Get Referral Link</Text>
      </TouchableOpacity>

      <FlatList
        data={referrals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <FontAwesome name="user" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>First Name:</Text>
              <Text style={styles.value}>{item.firstName}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="call" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>Contact:</Text>
              <Text style={styles.value}>{item.contact}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="mail" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{item.email}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="male-female" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>Gender:</Text>
              <Text style={styles.value}>{item.gender}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="medal" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>Package:</Text>
              <Text style={styles.value}>{item.package}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="cash" size={16} color="#FF8B00" style={styles.icon} />
              <Text style={styles.label}>Amount:</Text>
              <Text style={styles.value}>{item.amount}</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Ionicons name="eye" size={20} color="#fff" />
              <Text style={styles.viewText}>View Chain</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>GET REFERRAL LINK</Text>
            <TextInput style={styles.linkInput} value={referralLink} editable={false} />
            <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF3E0', // Lightest shade of orange
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8B00', // Orange color for title
    marginBottom: 15,
    textAlign: 'center',
  },
  referralButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8B00', // Orange color for button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  referralButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontWeight: 'bold',
    color: '#555', // Darker gray for labels
    fontSize: 14,
    width: width * 0.25,
  },
  value: {
    fontSize: 14,
    color: '#666', // Gray for values
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8B00', // Orange color for view button
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 15,
  },
  viewText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF8B00', // Orange color for modal title
  },
  linkInput: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#FF8B00', // Orange color for copy button
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  copyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyReferrals;
