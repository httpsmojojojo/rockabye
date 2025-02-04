import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundImageComponent from '../Components/ImageBackgroundComponent';
import {black, dark_grey, primary, white} from '../Stylings/Colors';
import {Medium, Regular, SemiBold} from '../Stylings/Font.Family';
import StarIcon from '../../assets/SvgIcons/StarIcon';

const ExploreCardScreen = () => {
  const cards = [
    {
      id: '1',
      name: 'Erin Dowart',
      age: 25,
      rating: '5.00',
      experience: '2 Years',
      availability: 'Yes',
      profileImage: require('../Theme/Assests/profile.png'),
      description: 'A professional designer with 2 years of experience.',
    },
    {
      id: '2',
      name: 'John Doe',
      age: 28,
      rating: '4.75',
      experience: '3 Years',
      availability: 'Yes',
      profileImage: require('../Theme/Assests/profile.png'),
      description: 'Specialist in modern web and app design.',
    },
    {
      id: '3',
      name: 'Jane Smith',
      age: 30,
      rating: '4.85',
      experience: '5 Years',
      availability: 'No',
      profileImage: require('../Theme/Assests/profile.png'),
      description: 'Expert in creative illustration and branding.',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Background Section */}
      <BackgroundImageComponent>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={dark_grey}
          />
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>Sort</Text>
          </TouchableOpacity>
        </View>
      </BackgroundImageComponent>

      {/* Top Search Result */}
      <Text style={styles.sectionTitle}>Top Search Result</Text>

      {/* Swipable Cards */}
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={wp('75%') + wp('5%')} // Center the card
        decelerationRate="fast"
        contentContainerStyle={styles.cardList}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={item.profileImage}
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>{item.name}</Text>
              <View style={styles.ratingRow}>
                <TouchableOpacity style={styles.ratingButton}>
                  <StarIcon />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <Text style={styles.ageText}>Age: {item.age} Years</Text>
              <View style={styles.detailRow}>
                <View style={[styles.detailItem, styles.borderLeft]}>
                  <Text style={styles.detailTitle}>{item.experience}</Text>
                  <Text style={styles.detailSubtitle}>Experience</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailTitle}>{item.availability}</Text>
                  <Text style={styles.detailSubtitle}>Availability</Text>
                </View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%'),
  },
  searchInput: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 50,
    padding: wp('3%'),
    marginRight: wp('2%'),
    borderWidth: 1,
    borderColor: dark_grey,
  },
  roundButton: {
    backgroundColor: primary,
    borderRadius: 50,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    marginLeft: wp('2%'),
  },
  buttonText: {
    fontSize: wp('4%'),
    fontFamily: Medium,
    color: white,
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
    marginVertical: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  cardList: {
    paddingHorizontal: wp('5%'),
  },
  card: {
    width: wp('75%'),
    marginHorizontal: wp('2.5%'),
    backgroundColor: white,
    borderRadius: 10,
    shadowColor: black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    padding: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    marginBottom: hp('2%'),
  },
  profileName: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
    marginBottom: hp('1%'),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  ratingButton: {
    backgroundColor: primary,
    borderRadius: 8,
    padding: wp('2%'),
    marginRight: wp('2%'),
  },
  ratingText: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: dark_grey,
  },
  ageText: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: dark_grey,
    marginBottom: hp('2%'),
  },
  detailRow: {
    flexDirection: 'row',
    width: '100%',
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: dark_grey,
  },
  detailTitle: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
  },
  detailSubtitle: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: dark_grey,
  },
  description: {
    fontSize: wp('4%'),
    fontFamily: Regular,
    color: dark_grey,
    textAlign: 'center',
    marginTop: hp('2%'),
  },
});

export default ExploreCardScreen;
