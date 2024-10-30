import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function SignupScreen({ navigation }) {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Pulse animation for logo
  const pulse = new Animated.Value(1);
  Animated.loop(
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.2,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic(result.uri);
    }
  };

  const handleSignup = () => {
    if (fullName && cnic && phone && gender && address && email && password && confirmPassword) {
      if (password === confirmPassword) {
        Alert.alert('Signup Successful', 'You can now log in.', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
      } else {
        Alert.alert('Passwords do not match');
      }
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <LinearGradient
      colors={['#FF8B00', '#5C5C5C']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          {/* Animated Logo */}
          <View style={styles.outerCircle}>
            <Animated.View style={[styles.innerCircle, { transform: [{ scale: pulse }] }]}>
              <LinearGradient
                colors={['#FFF5E5', '#FFE4C4']}
                style={styles.logoBackground}
              >
                <Image source={require('../assets/images/icon.png')} style={styles.logo} />
              </LinearGradient>
            </Animated.View>
          </View>
        </View>

        <View style={styles.formContainer}>
          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#5C5C5C"
              style={styles.input}
              onChangeText={(text) => setFullName(text)}
            />
          </View>

          {/* CNIC Input */}
          <View style={styles.inputContainer}>
            <Icon name="id-card" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="CNIC"
              placeholderTextColor="#5C5C5C"
              style={styles.input}
              onChangeText={(text) => setCnic(text)}
              keyboardType="numeric"
            />
          </View>

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Icon name="phone" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#5C5C5C"
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
            />
          </View>

          {/* Gender Input as Dropdown */}
          <View style={styles.inputContainer}>
            <Icon name="venus-mars" size={20} color="#FF8B00" style={styles.inputIcon} />
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
              prompt="Select Gender"
            >
              <Picker.Item label="Select Gender" value="" color="#5C5C5C" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Prefer not to say" value="prefer_not_to_say" />
            </Picker>
          </View>

          {/* Address Input */}
          <View style={styles.inputContainer}>
            <Icon name="map-marker" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Address"
              placeholderTextColor="#5C5C5C"
              style={styles.input}
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#5C5C5C"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#5C5C5C"
              secureTextEntry={!showPassword}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#FF8B00" />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#FF8B00" style={styles.inputIcon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#5C5C5C"
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIcon}
            >
              <Icon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={20} color="#FF8B00" />
            </TouchableOpacity>
          </View>

          {/* Profile Picture Preview and Selection */}
          {profilePic && (
            <Image source={{ uri: profilePic }} style={styles.profileImagePreview} />
          )}
          <TouchableOpacity onPress={pickImage} style={styles.chooseButton}>
            <LinearGradient
              colors={['#FF8B00', '#FFAE42']}
              style={styles.chooseButtonGradient}
            >
              <Text style={styles.chooseButtonText}>
                {profilePic ? "Change Profile Picture" : "Choose Profile Picture"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Signup Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <LinearGradient
              colors={['#FF8B00', '#FFAE42']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Footer Links */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '15%',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  outerCircle: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderColor: '#FF8B00',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBackground: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FF8B00',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#5C5C5C',
  },
  picker: {
    flex: 1,
    padding: 10,
    color: '#5C5C5C',
  },
  eyeIcon: {
    padding: 10,
  },
  profileImagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  chooseButton: {
    marginBottom: 10,
  },
  chooseButtonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  chooseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 12,
  },
  buttonGradient: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
  },
  link: {
    color: '#FF8B00',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
