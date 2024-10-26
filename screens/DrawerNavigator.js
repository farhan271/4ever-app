// navigators/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Main" component={TabNavigator} />
      {/* Add more screens to the drawer as needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
