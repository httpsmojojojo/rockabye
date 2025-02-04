// SitterScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  black,
  dark_grey,
  light_black,
  primary,
  white,
} from '../Stylings/Colors';
import {Medium, Regular, SemiBold} from '../Stylings/Font.Family';
import CheckBox from '@react-native-community/checkbox';
import BackgroundImageComponent from '../Components/ImageBackgroundComponent';
import DropdownIcon from '../../assets/SvgIcons/DropDownIcon';
import BackIcon from '../../assets/SvgIcons/BackIcon';

const SitterScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <ImageBackground
        source={require('../Theme/Assests/BG.png')}
        style={{width: wp('100%'), height: hp('40%')}} // Ensure it takes full width and set a specific height.
        resizeMode="cover" // Change to "cover" to make the image cover the entire container
      >
        <TouchableOpacity style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>


        <View style={styles.imageContentContainer}>
          <Text style={styles.title}>Plan an introductory meeting</Text>
        </View>
      </ImageBackground>

      {/* Content Outside the Image */}
      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>When should the meeting start?</Text>

        {/* Dropdown row */}
        <Text style={[styles.subtitle,{fontFamily:SemiBold}]}>Set Availability</Text>

        <View style={styles.dropdownRow}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Time</Text>
            <DropdownIcon />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Date</Text>
            <DropdownIcon />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Month</Text>
            <DropdownIcon />
          </TouchableOpacity>
        </View>

        {/* Video call options */}
        <Text style={styles.subtitle}>Want to meet via video call?</Text>

        <View style={[styles.checkboxRow, styles.checkboxShadow]}>
      <CheckBox
        status={isChecked ? 'checked' : 'unchecked'}
        onPress={() => setIsChecked(!isChecked)}
        color="#007AFF"
      />
      <Text style={styles.checkboxLabel}>Meet via video call</Text>
    </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tab_Navigation')}>
          <Text style={styles.buttonText}>SEND REQUEST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: wp('5%'),
  },
  imageContentContainer: {
    flex: 5, // Increased flex to take more vertical space
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'),
  },
  title: {
    fontSize: wp('7%'),
    fontFamily: 'Medium',
    color: black,
    width: wp('70%'),
    textAlign: 'center',
    bottom: hp('3%'),
  },

  contentContainer: {
    flex: 2, // Reduced flex to adjust content below the image
    width: '100%',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('7%'),
  },
  subtitle: {
    fontSize: wp('4.5%'),
    fontFamily: Regular,
    color: black,
    marginBottom: hp('3%'),
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('28%'),
    padding: wp('3%'),
    // borderWidth: 1,
    // borderColor: black,
    borderRadius: 8,
    backgroundColor: '#dae1f2',
  },
  dropdownText: {
    fontSize: wp('3.5%'),
    fontFamily: Regular,
    color: light_black,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('4%'),
    alignSelf: 'center',
  },
  checkboxLabel: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
    marginLeft: wp('2%'),
  },
  button: {
    width: '100%',
    paddingVertical: hp('0.3%'),
    backgroundColor: '#D2BAA380',
    borderRadius: 30,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: wp('3.5%'),
    fontFamily: SemiBold,
    color: black,
    textAlign:'center',
    
    textAlignVertical: 'center',
   
  },
});

export default SitterScreen;
