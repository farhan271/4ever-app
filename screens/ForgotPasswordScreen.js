// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (email) {
      // Simulate sending a password reset request
      Alert.alert('Password reset link sent to your email!');
      navigation.navigate('Login'); // Navigate back to Login screen after sending email
    } else {
      Alert.alert('Please enter your email address');
    }
  };

  return (
    <LinearGradient
      colors={['#00BCD9', '#0185C1']}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkContainer}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
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
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#ADD8E6',
  },
});
