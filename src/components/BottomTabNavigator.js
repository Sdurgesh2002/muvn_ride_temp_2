import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'; // You'll need to create this

import BottomNavigation from '../components/BottomNavigation'; // Your custom component

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: { display: 'none' } // Hide default tab bar since you're using custom
      }}
      tabBar={(props) => (
        <BottomNavigation
          {...props}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
