import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {primary, black, white, secondary, tertiary} from '../Stylings/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import GradientText from '../Components/GradiantText';
import {Medium, SemiBold} from '../Stylings/Font.Family';
import MainLogoIcon from '../../assets/SvgIcons/MainLogoIcon';
import Emailicon from '../../assets/SvgIcons/EmailIcon';
import KeyIcon from '../../assets/SvgIcons/KeyIcon';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <View style={styles.container}>
      {/* Title */}
      <StatusBar backgroundColor={secondary} barStyle={'light-content'} translucent={false} />
      <View style={{justifyContent: 'center', alignItems: 'center',marginBottom:hp('5%')}}>
        <MainLogoIcon width={wp('50%')} height={hp('20%')} />
      </View>
      <Text style={styles.title}>Welcome Back !</Text>

      {/* Description */}
      <Text style={styles.description}>
        Charge ahead with seamless access to your EV charging network
      </Text>

      {/* Inputs */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text_Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          icon={<Emailicon />}
        />

        <Text_Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          icon={<KeyIcon />}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          style={{alignSelf: 'flex-end', marginHorizontal: wp('5%')}}>
          <GradientText
            text="Forgot Password ?"
            fontSize={wp('4.5%')}
            fontFamily={Medium}
          />
        </TouchableOpacity>

        {/* Signup Button */}
        <Primary_Button
          Button_Title="Log in"
          onPress={() => navigation.navigate('HomeScreen')}
        />

        {/* Already have an account */}
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <GradientText text="Sign up" fontSize={wp('4.5%')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondary,
    paddingVertical: hp('2%'),
  },
  title: {
    fontSize: wp('8%'),
    color: white,
    fontFamily: SemiBold,
    marginHorizontal: wp('5%'),
  },
  description: {
    fontSize: wp('3.5%'),
    color: white,
    fontFamily: Medium,
    marginHorizontal: wp('6%'),
    marginBottom: hp('4%'),
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  accountText: {
    fontSize: wp('4%'),
    color: tertiary,
    fontFamily: Medium,
  },
});
