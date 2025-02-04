import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { primary, white } from '../Stylings/Colors';
import { Medium, Regular, SemiBold } from '../Stylings/Font.Family';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MainLogoIcon from '../../assets/SvgIcons/MainLogoIcon';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("SitterScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../Theme/Assests/backimg.png')} // Replace with your image path
      style={styles.Main_Container}
      resizeMode="cover"
    >
      <FocusAwareStatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.contentContainer}>
        <MainLogoIcon/>
        <Text style={styles.logoText}>Find trusted sitters near you!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor:"rgba(0, 0, 0, 0.7)"
  },
  Title: {
    fontSize: wp('8%'),
    fontFamily: SemiBold,
    color: primary,
  },
  SubTitle: {
    fontSize: wp('5%'),
    fontFamily: Medium,
    color: primary,
    marginTop: hp('1%'),
  },
  logoText:{
    fontSize:wp('4%'),
    color:white,
    fontFamily:Regular
  }
});

export default SplashScreen;
