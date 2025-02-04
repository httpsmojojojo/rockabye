import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select'; // Import Picker Select
import { RadioButton } from 'react-native-paper'; // Radio button component for I agree checkbox
import { black, white, primary, grey } from '../Stylings/Colors';
import { SemiBold, Regular } from '../Stylings/Font.Family';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SignupScreen = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [checked, setChecked] = useState(false); // Radio button state

  // Experience and Location Dropdown data
  const experienceOptions = [
    { label: '0-1 Year', value: '0-1' },
    { label: '2-3 Years', value: '2-3' },
    { label: '4+ Years', value: '4+' },
  ];

  const locationOptions = [
    { label: 'New York', value: 'new-york' },
    { label: 'Los Angeles', value: 'los-angeles' },
    { label: 'Chicago', value: 'chicago' },
  ];

  // Availability dropdown data
  const monthOptions = [
    { label: 'January', value: 'january' },
    { label: 'February', value: 'february' },
    { label: 'March', value: 'march' },
  ];

  const timeOptions = [
    { label: '9 AM - 12 PM', value: '9-12' },
    { label: '1 PM - 5 PM', value: '1-5' },
  ];

  const dateOptions = [
    { label: '1st', value: '1st' },
    { label: '2nd', value: '2nd' },
    { label: '3rd', value: '3rd' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon}>
          <Icon name="arrow-back" size={wp('6%')} color={black} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../Theme/Assests/profile.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      {/* Personal Information */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor={grey}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor={grey}
        />

        {/* Password Section */}
        <Text style={styles.sectionTitle}>Password</Text>

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor={grey}
          secureTextEntry
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={grey}
          secureTextEntry
        />

        {/* Experience Dropdown */}
        <Text style={styles.sectionTitle}>Experience</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedExperience(value)}
          items={experienceOptions}
          placeholder={{
            label: 'Select Experience',
            value: null,
          }}
          style={pickerSelectStyles}
        />

        {/* Availability Section */}
        <Text style={styles.sectionTitle}>Availability</Text>
        <View style={styles.availabilityContainer}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)} // Handle month selection
            items={monthOptions}
            placeholder={{ label: 'Month', value: null }}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)} // Handle time selection
            items={timeOptions}
            placeholder={{ label: 'Time', value: null }}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)} // Handle date selection
            items={dateOptions}
            placeholder={{ label: 'Date', value: null }}
            style={pickerSelectStyles}
          />
        </View>

        {/* Location Dropdown */}
        <Text style={styles.sectionTitle}>Location</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedLocation(value)}
          items={locationOptions}
          placeholder={{
            label: 'Select Location',
            value: null,
          }}
          style={pickerSelectStyles}
        />

        {/* Address */}
        <Text style={styles.sectionTitle}>Your Address</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)} // Handle address selection
          items={locationOptions} // Reusing location options as a placeholder for address
          placeholder={{ label: 'Select Address', value: null }}
          style={pickerSelectStyles}
        />

        {/* Terms and Conditions */}
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="checked"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.radioButtonText}>I agree to accept the terms and conditions</Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Picker styles
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: white,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: grey,
  },
  inputAndroid: {
    backgroundColor: white,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: grey,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  backIcon: {
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: hp('4%'),
  },
  profileImage: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('15%'),
    marginBottom: hp('2%'),
  },
  uploadButton: {
    backgroundColor: primary,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('5%'),
  },
  uploadText: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: white,
  },
  formContainer: {
    marginBottom: hp('5%'),
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontFamily: SemiBold,
    color: black,
    marginBottom: hp('1%'),
  },
  input: {
    backgroundColor: white,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: grey,
  },
  availabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  radioButtonText: {
    fontSize: wp('3.5%'),
    fontFamily: Regular,
    color: black,
    marginLeft: wp('2%'),
  },
  signUpButton: {
    backgroundColor: '#6488EA',
    paddingVertical: hp('1%'),
    borderRadius: wp('5%'),
    alignItems: 'center',
  },
  signUpText: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: white,
  },
});

export default SignupScreen;
