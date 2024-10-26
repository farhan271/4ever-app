import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Successful');
      navigation.navigate('Main'); 
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <LinearGradient
      colors={['#00BCD9', '#0185C1']}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <View style={styles.spacing} />

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry={!showPassword}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#0185C1" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Social Media Icons */}
        <View style={styles.socialIconsContainer}>
          <Icon name="facebook-square" size={30} color="#fff" style={styles.socialIcon} />
          <Icon name="google" size={30} color="#fff" style={styles.socialIcon} />
          <Icon name="twitter-square" size={30} color="#fff" style={styles.socialIcon} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '20%',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 30,
    marginBottom: '5%',
  },
  spacing: {
    height: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0185C1',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#333',
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#0185C1',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
  link: {
    color: '#ADD8E6',
    marginTop: 5,
  },
});
