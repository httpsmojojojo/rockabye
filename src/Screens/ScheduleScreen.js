import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { black, dark_grey, primary, white } from '../Stylings/Colors';
import { Medium, Regular, SemiBold } from '../Stylings/Font.Family';
import MapIcon from '../../assets/SvgIcons/MapIcon';
import WalletIcon from '../../assets/SvgIcons/WalletIcon';
import KeyIcon from '../../assets/SvgIcons/KeyIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScheduleScreen = () => {

  const [currentWeek, setCurrentWeek] = useState(0); // Tracks the current week's index
  const [currentMonth, setCurrentMonth] = useState("November 2024"); // Example month and year

  // Example week's dates
  const weeks = [
    ['27', '28', '29', '30', '1', '2', '3'], // Week 1
    ['4', '5', '6', '7', '8', '9', '10'], // Week 2
  ];
  const [selectedDate, setSelectedDate] = useState(weeks[0][1]);
  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const handlePreviousWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentWeek < weeks.length - 1) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../Theme/Assests/BG.png')}
        style={{ width: wp('100%'), height: hp('30%') }}
        resizeMode="cover"
      >
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

      {/* Header with Centered Month */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousWeek}>
          {/* <ArrowLeftIcon /> */}
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentMonth}</Text>
        <TouchableOpacity onPress={handleNextWeek}>
          {/* <ArrowRightIcon /> */}
          <Ionicons name="chevron-forward" size={24} color="black" />

        </TouchableOpacity>
      </View>

      {/* Week Dates */}
      <View style={styles.weekContainer}>
        <FlatList
          data={weeks[currentWeek]}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateButton,
                selectedDate === item && styles.activeDateButton,
              ]}
              onPress={() => handleDatePress(item)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === item && styles.activeDateText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
    marginTop: hp('7%'),
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  monthText: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
  },
  weekContainer: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  dateButton: {
    backgroundColor: white,
    width: wp('10%'),  
    height: wp('10%'), 
    padding: wp('2%'),
    marginHorizontal: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:wp('10%'),

  },
  activeDateButton: {
    backgroundColor: '#624b99',
  },
  dateText: {
    fontSize: wp('4%'),
    fontFamily: Medium,
    color: 'black',
  },
  activeDateText: {
    color: white,
  },
});

export default ScheduleScreen;
