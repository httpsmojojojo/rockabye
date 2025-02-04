import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { white } from '../Stylings/Colors';
import { Medium } from '../Stylings/Font.Family';

const Primary_Button = ({
  Button_Title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <LinearGradient
        colors={['#204D65', '#79C7BA']}
        start={{ x: 0, y: 1 }} // Start at the bottom-left
        end={{ x: 1, y: 0 }}   // End at the top-right
        style={styles.gradient}>
        <Text style={styles.Button_Title}>
          {Button_Title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Primary_Button;

const styles = StyleSheet.create({
  touchable: {
    marginVertical: hp('3%'),
    width: wp('90%'),
  },
  gradient: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button_Title: {
    fontFamily: Medium,
    fontSize: wp('4.5%'),
    color: white,
    textAlign: 'center',
  },
});
