import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import SitterScreen from '../Screens/ForSitterScreen';
import Tab_Navigation from './BotttomNavigation';
import SignupScreen from '../Screens/SignupScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import BookSitterScreen from '../Screens/BookSitterScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={SplashScreen} name="SplashScreen" />
        <Stack.Screen component={SitterScreen} name="SitterScreen" />
        <Stack.Screen component={Tab_Navigation} name="Tab_Navigation" />
        <Stack.Screen component={SignupScreen} name="SignupScreen" />
        <Stack.Screen component={NotificationScreen} name="NotificationScreen" />
        <Stack.Screen component={BookSitterScreen} name="BookSitterScreen" />




      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
