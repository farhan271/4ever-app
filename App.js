// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigator from './screens/DrawerNavigator';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import PaymentScreen from './screens/PaymentScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen} 
          options={{
            title: 'Payment',
            headerTitleAlign: 'center',
            headerTintColor: '#FFFFFF', // Sets arrow color to white
            headerTitleStyle: {
              color: '#FFFFFF', // Sets title color to white
            },
            headerBackground: () => (
              <LinearGradient
                colors={['#FF8B00', '#FFD1A1']} // Gradient background
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
