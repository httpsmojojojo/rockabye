// BookSitterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
import { Medium, Regular, SemiBold } from '../Stylings/Font.Family';
import BackgroundImageComponent from '../Components/ImageBackgroundComponent';
import DropdownIcon from '../../assets/SvgIcons/DropDownIcon';
import BackIcon from '../../assets/SvgIcons/BackIcon';

const BookSitterScreen = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHours, setSelectedHours] = useState(null);
  const [selectedChildren, setSelectedChildren] = useState(null);

  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <BackgroundImageComponent>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.imageContentContainer}>
          <Text style={styles.title}>Book a Sitter</Text>
        </View>
      </BackgroundImageComponent>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* Time and Date Section */}
        <Text style={styles.subtitle}>What time do you need a sitter for?</Text>
        <View style={styles.dropdownRow}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedTime || 'Time'}</Text>
            <DropdownIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedDate || 'Date'}</Text>
            <DropdownIcon />
          </TouchableOpacity>
        </View>

        {/* Hours Section */}
        <Text style={styles.subtitle}>For how many hours?</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedHours || 'Select Hours'}</Text>
          <DropdownIcon />
        </TouchableOpacity>

        {/* Children Section */}
        <Text style={styles.subtitle}>For how many children?</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedChildren || 'Select Number'}</Text>
          <DropdownIcon />
        </TouchableOpacity>

        {/* Book Sitter Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Add booking logic here
            navigation.navigate('Tab_Navigation');
          }}
        >
          <Text style={styles.buttonText}>BOOK SITTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white
  },
  backButton: {
    padding: wp('5%'),
  },
  imageContentContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'),
  },
  title: {
    fontSize: wp('6%'),
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
    bottom: hp('4%'),
  },
  contentContainer: {
    flex: 2,
    width: '100%',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
  },
  subtitle: {
    fontSize: wp('4.5%'),
    fontFamily: Regular,
    color: black,
    marginBottom: hp('2%'),
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
    width: wp('40%'),
    padding: wp('2%'),
    borderWidth: 1,
    borderColor: black,
    borderRadius: 8,
    backgroundColor: dark_grey,
    marginBottom: hp('2%'),
  },
  dropdownText: {
    fontSize: wp('3.5%'),
    fontFamily: Regular,
    color: light_black,
  },
  button: {
    width: '100%',
    paddingVertical: hp('1.5%'),
    backgroundColor: '#D2BAA380',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  buttonText: {
    fontSize: wp('4%'),
    fontFamily: SemiBold,
    color: black,
  },
});

export default BookSitterScreen;
