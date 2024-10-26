// DashboardScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeTab from './HomeTab';
import ActivityTab from './ActivityTab';


const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeTab} options={{ title: 'Home' }} />
      <Tab.Screen name="ActivityTab" component={ActivityTab} options={{ title: 'Activity' }} />
    </Tab.Navigator>
  );
}
