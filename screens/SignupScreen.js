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

export default function SignupScreen({ navigation }) { // Accept navigation prop
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        Alert.alert('Signup Successful', 'You can now log in.', [
          { text: 'OK', onPress: () => navigation.navigate('Login') } // Navigate to Login screen
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
      colors={['#00BCD9', '#0185C1']}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Password Input */}
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

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#0185C1" style={styles.inputIcon} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#ddd"
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
            <Icon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={20} color="#0185C1" />
          </TouchableOpacity>
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Footer Links */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
    paddingTop: '25%',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
