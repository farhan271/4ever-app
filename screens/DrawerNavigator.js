import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import TabNavigator from './TabNavigator'; // Dashboard screen
import Courses from './Courses'; // Courses screen
import LeaderBoard from './LeaderBoard'; // New screens
import MyAccount from './MyAccount';
import MyReferrals from './MyReferrals';
import AffiliateTraining from './AffiliateTraining';
import Community from './Community';
import Logout from './Logout'; // If logout is just a button, remove it as a screen
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

// Custom Drawer Content with Logo
const CustomDrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    {/* Logo Section */}
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/images/icon.png')} // Ensure correct path
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
      headerTintColor: 'white',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={24} color="white" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
      headerBackground: () => (
        <LinearGradient
          colors={['#0085C1', '#00BDDA']}
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
        drawerIcon: () => <Ionicons name="time-outline" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        drawerIcon: () => <Ionicons name="person-outline" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="Courses" 
      component={Courses} 
      options={{
        drawerIcon: () => <Ionicons name="menu" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="Leader Board" 
      component={LeaderBoard} 
      options={{
        drawerIcon: () => <FontAwesome5 name="trophy" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="My Account" 
      component={MyAccount} 
      options={{
        drawerIcon: () => <MaterialIcons name="account-circle" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="My Referrals" 
      component={MyReferrals} 
      options={{
        drawerIcon: () => <Ionicons name="paper-plane-outline" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="Affiliate Training" 
      component={AffiliateTraining} 
      options={{
        drawerIcon: () => <Ionicons name="school-outline" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="4ever Community" 
      component={Community} 
      options={{
        drawerIcon: () => <Entypo name="users" size={22} />,
      }}
    />
    <Drawer.Screen 
      name="Logout" 
      component={Logout} 
      options={{
        drawerIcon: () => <Ionicons name="lock-closed-outline" size={22} />,
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 200,
    height: 130,
  },
});

export default DrawerNavigator;
