// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

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

  const handleForgotPassword = () => {
    if (email) {
      Alert.alert('Verification link sent to your email!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Please enter your email address');
    }
  };

  return (
    <LinearGradient
      colors={['#FF8B00', '#5C5C5C']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
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
        <Text style={styles.title}>Forgot Password</Text>
        
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#FF8B00" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ddd"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <LinearGradient
            colors={['#FF8B00', '#FFAE42']}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Verify Email</Text>
          </LinearGradient>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    borderColor: '#FF8B00',
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
    marginTop: 20,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    borderRadius: 8,
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
    color: '#FF8B00',
  },
});
