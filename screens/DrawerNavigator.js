import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TabNavigator from './TabNavigator';
import Courses from './Courses';
import LeaderBoard from './LeaderBoard';
import MyAccount from './MyAccount';
import MyReferrals from './MyReferrals';
import AffiliateTraining from './AffiliateTraining';
import Community from './Community';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import Packages from './Packages'; // Import the Packages component

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    {/* Logo Section */}
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>

    {/* Drawer Items */}
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={({ navigation }) => ({
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      drawerActiveTintColor: '#5C5C5C',
      drawerInactiveTintColor: '#5C5C5C',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu-outline" size={24} color="#5C5C5C" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
      headerBackground: () => (
        <LinearGradient
          colors={['#FF8B00', '#FFD1A1']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    })}
  >
    <Drawer.Screen 
      name="Dashboard" 
      component={TabNavigator} 
      options={{
        drawerIcon: () => <Ionicons name="time-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        drawerIcon: () => <Ionicons name="person-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Courses" 
      component={Courses} 
      options={{
        drawerIcon: () => <Ionicons name="menu-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Leader Board" 
      component={LeaderBoard} 
      options={{
        drawerIcon: () => <FontAwesome5 name="trophy" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="My Account" 
      component={MyAccount} 
      options={{
        drawerIcon: () => <MaterialIcons name="account-circle" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="My Referrals" 
      component={MyReferrals} 
      options={{
        drawerIcon: () => <Ionicons name="paper-plane-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Affiliate Training" 
      component={AffiliateTraining} 
      options={{
        drawerIcon: () => <Ionicons name="school-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="GSP Community" 
      component={Community} 
      options={{
        drawerIcon: () => <Entypo name="users" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Logout" 
      component={LoginScreen} 
      options={{
        headerShown: false,
        drawerIcon: () => <Ionicons name="lock-closed-outline" size={22} color="#FF8B00" />,
      }}
    />
    <Drawer.Screen 
      name="Packages" 
      component={Packages} 
      options={{
        drawerIcon: () => <Ionicons name="pricetags-outline" size={22} color="#FF8B00" />,
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFF5E5',
  },
  logo: {
    width: 200,
    height: 130,
  },
});

export default DrawerNavigator;
