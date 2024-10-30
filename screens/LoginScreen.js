import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Pulse animation for neon ring
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
      colors={['#FF8B00', '#5C5C5C']}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        {/* Outer White Circle */}
        <View style={styles.outerCircle}>
          {/* Inner Gradient Circle */}
          <Animated.View style={[styles.innerCircle, { transform: [{ scale: pulse }] }]}>
            <LinearGradient
              colors={['#FFF5E5', '#FFE4C4']}
              style={styles.logoBackground}
            >
              <Image source={require('../assets/images/icon.png')} style={styles.logo} />
            </LinearGradient>
          </Animated.View>
        </View>

        <View style={styles.spacing} />

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#FF8B00" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#5C5C5C"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#FF8B00" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#5C5C5C"
            secureTextEntry={!showPassword}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#FF8B00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={['#FF8B00', '#FFAE42']}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        

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
  spacing: {
    height: '5%',
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
  eyeIcon: {
    padding: 10,
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
    color: '#FFFFFF',
  },
  link: {
    color: '#FF8B00',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
