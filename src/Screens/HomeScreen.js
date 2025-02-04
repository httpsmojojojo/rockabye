// HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {black, dark_grey, primary, white} from '../Stylings/Colors';
import {Medium, Regular, SemiBold} from '../Stylings/Font.Family';
import BackgroundImageComponent from '../Components/ImageBackgroundComponent';
import MapIcon from '../../assets/SvgIcons/MapIcon';
import TimeIcon from '../../assets/SvgIcons/TimeIcon';
import DateIcon from '../../assets/SvgIcons/DateIcon';
import WalletIcon from '../../assets/SvgIcons/WalletIcon';
import KeyIcon from '../../assets/SvgIcons/KeyIcon';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <ImageBackground
          source={require('../Theme/Assests/BG.png')}
          style={{width: wp('100%'), height: hp('30%')}} // Ensure it takes full width and set a specific height.
          resizeMode="cover" // Change to "cover" to make the image cover the entire container
        >
          <View style={styles.imageContentRow}>
            <Image
              source={require('../Theme/Assests/profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.name}>Erin Dowart</Text>
            </View>
            <View style={styles.roundButtonsRow}>
              <TouchableOpacity style={styles.roundButton}>
                <WalletIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundButton}>
                <KeyIcon />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Good Morning Card */}
        <View style={styles.goodMorningCard}>
          <Text style={styles.activityTitle}>Good Morning!</Text>
          <Text style={styles.activitySubtitle}>
            Congrats! @Eliana has accepted your Request on 21.11.25
          </Text>
        </View>

        {/* Your Activity Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Your Activity</Text>

          {/* Activity Cards */}
          <View style={styles.activityCard}>
            <TimeIcon />
            <View style={styles.activityTextContainer}>
              <Text style={styles.activityTitleUnderline}>
                Upcoming bb-sitting
              </Text>
              <Text style={styles.activitySubtitleUnderline}>This month</Text>
            </View>
            <Text style={styles.activityCount}>0</Text>
          </View>

          <View style={styles.activityCard}>
            <DateIcon />
            <View style={styles.activityTextContainer}>
              <Text style={styles.activityTitleUnderline}>
                Completed bb-sitting Appts.
              </Text>
              <Text style={styles.activitySubtitleUnderline}>
                Until the end of this month
              </Text>
            </View>
            <Text style={styles.activityCount}>0</Text>
          </View>
          <View style={styles.activityCard}>
            <DateIcon />
            <View style={styles.activityTextContainer}>
              <Text style={styles.activityTitleUnderline}>
                Completed bb-sitting Appts.
              </Text>
              <Text style={styles.activitySubtitleUnderline}>
                Until the end of this month
              </Text>
            </View>
            <Text style={styles.activityCount}>0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  imageContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('5%'),
  },
  profileImage: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
  },
  profileDetails: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  greeting: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
  },
  name: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
  },
  roundButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundButton: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: wp('10%'),
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('1%'),
  },
  goodMorningCard: {
    backgroundColor: '#6488EA33',
    padding: wp('4%'),
    paddingVertical: hp('10%'),
    margin: wp('5%'),
    borderRadius: 10,
    shadowColor: black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  contentContainer: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
    elevation: 5,
    shadowColor: black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    backgroundColor: white,
    marginHorizontal: wp('5%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
    marginBottom: hp('2%'),
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: white,
    padding: wp('4%'),

    marginBottom: hp('2%'),
  },
  activityTextContainer: {
    flex: 1,
    marginLeft: wp('3%'),
    borderBottomWidth: 1,
    borderBottomColor: '#CEEEE4',
  },
  activityTitle: {
    fontSize: wp('4%'),
    fontFamily: Medium,
    color: black,
  },
  activitySubtitle: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
    textAlign: 'center',
  },
  activityTitleUnderline: {
    fontSize: wp('4%'),
    fontFamily: Medium,
    color: '#898A8D',
    opacity: 0.5,
  },
  activitySubtitleUnderline: {
    fontSize: wp('3.5%'),
    fontFamily: Regular,
    color: '898A8D',
    opacity: 0.5,
  },
  activityCount: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: primary,
    textAlign: 'center',
  },
});

export default HomeScreen;
