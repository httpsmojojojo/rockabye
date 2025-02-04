import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { black, light_black, primary, white } from '../Stylings/Colors';
import { SemiBold } from '../Stylings/Font.Family';
import HomeIcon from '../../assets/SvgIcons/HomeIcon';
import HistoryICon from '../../assets/SvgIcons/HistoryIcon';
import ExploreIcon from '../../assets/SvgIcons/ExploreIcon';
import ProfileIcon from '../../assets/SvgIcons/ProfileIcon';
import HomeScreen from '../Screens/HomeScreen';
import ScheduleScreen from '../Screens/ScheduleScreen';
import ClientScreen from '../Screens/ExploreScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import CalenderIcon from '../../assets/SvgIcons/CalenderIcon';


const Tab = createBottomTabNavigator();

// Inline Components for Tab Screens

const HistoryScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>History Screen</Text>
  </View>
);







const Tab_Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PaymentScreen" component={PaymentScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="ClientScreen" component={ClientScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={{ backgroundColor: white }}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { name } = route;

          return (
            <TouchableOpacity
              key={name}
              style={[styles.tabButton, isFocused && styles.activeTab]}
              onPress={() => navigation.navigate(name)}
            >
              <View style={styles.tabContent}>
  <TabIcon name={name} focused={isFocused} />
  <Text style={[
    styles.tabText,
    isFocused ? styles.activeTabText : styles.inactiveTabText
  ]}>
    {name === 'ClientScreen' ? 'Explore' 
      : name === 'ProfileScreen' ? 'Profile'
      : name === 'PaymentScreen' ? 'History'
      : name}
  </Text>
</View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const TabIcon = ({ name, focused }) => {
  switch (name) {
    case 'Home':
      return <HomeIcon color={focused ? primary : black} />;
    case 'PaymentScreen':
      return <HistoryICon color={focused ? primary : white} />;
    case 'Schedule':
      return <CalenderIcon  />;
    case 'ClientScreen':
      return <ExploreIcon color={focused ? primary : white} />;
    case 'ProfileScreen':
      return <ProfileIcon color={focused ? primary : white} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  screenText: {
    color: white,
    fontSize: wp('5%'),
    fontFamily: SemiBold,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('9%'),
    width: wp('100%'),
    paddingHorizontal: wp('2%'),
    alignSelf: 'center',
    backgroundColor: white,
    elevation: 18,
    borderColor: light_black,
    position: 'absolute',
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    elevation: 5,
   
  },
  inactiveTabText: {
    color: '#9E9E9E',  
    fontSize: wp('3.5%'),
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabText: {
    color: black,
    fontSize: wp('4%'),
    fontFamily: SemiBold,
  },
});

export default Tab_Navigation;
