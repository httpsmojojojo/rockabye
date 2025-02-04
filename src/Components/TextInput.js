import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {black, light_black, primary, tertiary, white} from '../Stylings/Colors';
import {Regular, SemiBold} from '../Stylings/Font.Family';
import Icon from 'react-native-vector-icons/Ionicons';
import EyeIcon from '../../assets/SvgIcons/EyeIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Text_Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  icon,
  error,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <View
      style={[styles.InputContainer, {borderColor: error ? 'red' : '#D9D6D6'}]}>
      {/* Icon at Start */}
      <View style={styles.iconContainer}>{icon}</View>

      {/* Input Field */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={tertiary}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={showPassword}
        autoCapitalize='none'
        style={styles.textInput}
      />

      {/* Eye Icon for Password */}
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={togglePasswordVisibility}>
          {showPassword ? (
            <EyeIcon />
          ) : (
            <Icon name={'eye-off'} size={30} color={tertiary} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Text_Input;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light_black,
    borderRadius: 10,
    width: '90%',
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    top:hp('0.3%'),
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: white,
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
});
