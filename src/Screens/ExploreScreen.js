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
import StarIcon from '../../assets/SvgIcons/StarIcon';
import MapIcon from '../../assets/SvgIcons/MapIcon';
import CheckIcon from '../../assets/SvgIcons/CheckIcon';
import WalletIcon from '../../assets/SvgIcons/WalletIcon';
import KeyIcon from '../../assets/SvgIcons/KeyIcon';

const ClientScreen = (navigation) => {
  return (
    <View style={styles.container}>
      {/* Background Image Section */}
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <ImageBackground
          source={require('../Theme/Assests/BG.png')}
          style={{width: wp('100%'), height: hp('30%')}}
          resizeMode="cover">
          <View style={styles.imageContentRow}>
            <Image
              source={require('../Theme/Assests/profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.greeting}>Good Morning !</Text>
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

        {/* Content Section */}
        <View style={styles.contentContainer}>
          {/* Card Section */}
          <View style={styles.card}>
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
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BookSitterScreen')}>
              <Text style={styles.buttonText}>BOOK ME</Text>
            </TouchableOpacity>
          </View>

          {/* Availability Section */}
          <View style={styles.availabilityContainer}>
            {/* Availability Header Row */}
            <View style={styles.availabilityHeaderRow}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                (day, index) => (
                  <View key={index} style={styles.dayHeader}>
                    <Text style={styles.availabilityHeader}>{day}</Text>
                  </View>
                ),
              )}
              <Text style={styles.shiftHeader}>Shifts</Text>
            </View>

            {/* Availability Grid */}


            <View style={styles.availabilityGrid}>
              {['Morning', 'Mid Day', 'Afternoon', 'Evening', 'Night'].map(
                (shift, index) => (
                  <View
                    key={index}
                    style={[
                      styles.availabilityRow,
                      {
                        backgroundColor: index % 2 === 0 ? '#E0E0E0' : white,
                      },
                    ]}>
                    {Array(7)
                      .fill(0)
                      .map((_, idx) => (
                        <View
                          key={idx}
                          style={[
                            styles.availabilityBox,
                            {
                              borderColor: index % 2 === 0 ? white : '#E0E0E0',
                            },
                          ]}>
                          <CheckIcon />
                        </View>
                      ))}
                    <Text style={styles.shiftLabel}>{shift}</Text>
                  </View>
                ),
              )}
            </View>




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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('5%'),
  },
  profileImage: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    borderColor: '#51CC56',
    borderWidth: 1.5,
  },
  profileDetails: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  greeting: {
    fontSize: wp('3.5%'),
    fontFamily: Regular,
    color: black,
  },
  name: {
    fontSize: wp('6%'),
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
  contentContainer: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  card: {
    borderWidth: 1,
    borderColor: '#6488EA33',
    backgroundColor: '#6488EA33',
    padding: wp('4%'),
    borderRadius: 8,
    marginBottom: hp('3%'),
    shadowColor: black,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    borderColor: '#91a9eb',
    borderWidth: 2,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardProfileImage: {
    width: wp('20%'),
    height: wp('20%'),
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
  button: {
    width: '40%',
    backgroundColor: '#6488EA33',
    borderColor: '#6488EA33',
    borderRadius: wp('20%'),
    alignItems: 'center',
   
    borderWidth: 8,
    borderColor: '#6488EA33',
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: wp('4%'),
    fontFamily: Medium,
    color: black,
  },
  availabilityContainer: {
    borderWidth: 1,
    borderColor: '#6488EA33',
    borderRadius:wp('3%'),
    padding: wp('3%'),
    marginBottom: hp('0%'),
  },
  availabilityHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  
   
  },
  availabilityHeader: {
    fontSize: wp('3%'),
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
    flex: 1,
  },
  dayHeader: {
    flex: 1,
  },
  shiftHeader: {
    fontSize: wp('3%'),
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
    width: wp('12%'),
  },
  availabilityGrid: {
    flexDirection: 'column',
    marginBottom: hp('5%'),
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'),

  },
  shiftLabel: {
    fontSize: wp('2.4%'),
    fontFamily: Medium,
    color: black,
    textAlign: 'center',
    width: wp('12%'),
  },
  availabilityBox: {
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('0%'),
    borderWidth: 1,
  },
});

export default ClientScreen;  