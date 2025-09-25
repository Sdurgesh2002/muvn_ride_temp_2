import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/splashScreen/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen1';
import LoginScreen from '../screens/OnboardingScreen/LoginScreen';
import RegisterScreen from '../screens/OnboardingScreen/RegisterScreen';
import BottomTabNavigator from '../components/BottomTabNavigator'; // Your new tab navigator
import PickupDropScreen from '../screens/PickupDropScreen/PickupDropScreen';
import HistoryScreenDetails from '../screens/HistoryScreen/HistoryScreenDeatils';
import PickupDropScreenOtr from '../screens/PickupDropScreen/PickupDropScreenOtr';
import RideStateScreen from '../screens/ChooseRideScreen/ChooseRideScreen';
import EditProfile from '../screens/ProfileScreen/EditProfile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* Authentication Screens */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {/* Main App with Bottom Tabs */}
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        
        {/* Modal/Detail Screens that cover the bottom tabs */}
        <Stack.Screen name="PickupDrop" component={PickupDropScreen} />
        <Stack.Screen name="PickupDropOtr" component={PickupDropScreenOtr} />
        <Stack.Screen name="ChooseRide" component={RideStateScreen} />
        <Stack.Screen name="HistoryDeatils" component={HistoryScreenDetails} />


        <Stack.Screen name="Editphoto" component={EditProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
