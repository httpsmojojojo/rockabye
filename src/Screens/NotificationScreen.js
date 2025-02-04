// NotificationScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {black, dark_grey, primary, white} from '../Stylings/Colors';
import {Medium, Regular, SemiBold} from '../Stylings/Font.Family';
import BackgroundImageComponent from '../Components/ImageBackgroundComponent';
import StarIcon from '../../assets/SvgIcons/StarIcon';
import MapIcon from '../../assets/SvgIcons/MapIcon';
import BackIcon from '../../assets/SvgIcons/BackIcon';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <BackIcon/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Content Section */}
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.contentContainer}>
            {/* First Card */}
            <View style={styles.card}>
              <View>
                <View style={styles.cardRow}>
                  <Image
                    source={require('../Theme/Assests/profile.png')}
                    style={styles.cardProfileImage}
                  />
                  <View style={styles.cardDetails}>
                    <Text style={styles.cardName}>Erin Dowart</Text>
                    <Text style={styles.cardAge}>Age: 25 Years</Text>
                    <View style={styles.cardRatingRow}>
                      <StarIcon />
                      <Text style={styles.cardRating}>5.00 (150 reviews)</Text>
                    </View>
                    <View style={styles.cardLocationRow}>
                      <MapIcon />
                      <Text style={styles.cardLocation}>California, USA</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>

            {/* Second Card */}
            <View
              style={[
                styles.card,
                {
                  backgroundColor: '#D2BAA399',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={styles.sectionTitle}>Good Evening!</Text>
              <Text
                style={[
                  styles.description,
                  {
                    color: black,
                  },
                ]}>
                Your recent payment attempt for the babysitting service has
                failed. Please update your payment information or try another
                method to complete the transaction.
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 20,
            }}>
            <Image source={require('../Theme/Assests/BG.png')} />
          </View>
        </ScrollView>
      </View>

      {/* Bottom Background Image */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('5%'),
  },
  backButton: {
    marginRight: wp('3%'),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
  },
  contentContainer: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: white,
  },
  card: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6488EA33',
    padding: wp('4%'),
    borderRadius: 8,
    marginBottom: hp('3%'),
    shadowColor: black,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  cardRow: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  cardProfileImage: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    marginRight: wp('3%'),
  },
  cardDetails: {
    flex: 1,
  },
  cardName: {
    fontSize: wp('4.5%'),
    fontFamily: SemiBold,
    color: black,
  },
  cardAge: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
  },
  cardRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  cardRating: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
    marginLeft: wp('2%'),
  },
  cardLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  cardLocation: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
    marginLeft: wp('2%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: black,
    marginBottom: hp('3%'),
  },
});

export default NotificationScreen;
