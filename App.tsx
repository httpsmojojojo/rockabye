import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {StatusBar, View} from 'react-native';
import {Alert} from 'react-native';
import MainNavigation from './src/AppNavigation/MainNavigation';
// import { Provider } from 'react-native-paper';
import {secondary} from './src/Stylings/Colors';
import ClientScreen from './src/Screens/ExploreScreen';
import NotificationScreen from './src/Screens/NotificationScreen';
import ExploreCardScreen from './src/Screens/ExploreCardScreen';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: secondary}}>
            <MainNavigation />
            {/* <HomeScreen/> */}
    </View>
  );
};
export default App;
