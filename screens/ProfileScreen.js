import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [username, setUsername] = useState('Obaid ullah');
  const [cnic, setCnic] = useState('0');
  const [email, setEmail] = useState('uobaid772@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('03495303460');
  const [address, setAddress] = useState('Dak Hana pallandri numb payprian tehsil pallandri zila sudnuti');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(require('../assets/images/love.jpg'));
  const [imageName, setImageName] = useState('');

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
      const uriParts = result.assets[0].uri ? result.assets[0].uri.split('/') : [];
      setImageName(uriParts[uriParts.length - 1] || '');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.profileImageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.userName}>{username || 'N/A'}</Text>
          <Text style={styles.userEmail}>{email || 'N/A'}</Text>
          <Text style={styles.userLevel}>Platinum</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Sponsor ID</Text>
          <Text style={styles.value}>9746326</Text>
          <Text style={styles.label}>Sponsored By</Text>
          <Text style={styles.value}>ArslanFraz</Text>
          <Text style={styles.label}>Sponsor Contact</Text>
          <Text style={styles.value}>03407376441</Text>
          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>9739093</Text>
        </View>
      </View>

      <View style={styles.editSection}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>CNIC</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter CNIC"
          value={cnic}
          onChangeText={setCnic}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Profile Picture</Text>
        <TouchableOpacity style={styles.chooseFileButton} onPress={pickImage}>
          <Text style={styles.chooseFileText}>Choose File</Text>
        </TouchableOpacity>
        {imageName ? <Text style={styles.imageName}>{imageName}</Text> : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF3E0', // Lightest shade of #FF8B00 for background
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF8B00', // Orange border for profile image
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FF8B00', // Orange text for username
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  userLevel: {
    fontSize: 16,
    color: '#4CAF50', // Green color for user level
  },
  detailsContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#FF8B00', // Orange color for labels
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  editSection: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF8B00', // Orange border color for input fields
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  chooseFileButton: {
    padding: 10,
    backgroundColor: '#FF8B00', // Orange button background
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  chooseFileText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageName: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  updateButton: {
    backgroundColor: '#FF8B00', // Orange background for update button
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF8B00', // Orange border for password input container
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
});

