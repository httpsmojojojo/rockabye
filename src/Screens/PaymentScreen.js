import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  black,
  primary,
  white,
  light_grey,
  error_red,
  success_green,
} from '../Stylings/Colors';
import {Medium, Regular, SemiBold} from '../Stylings/Font.Family';
import StarIcon from '../../assets/SvgIcons/StarIcon';
import MapIcon from '../../assets/SvgIcons/MapIcon';
import { Ionicons } from '@expo/vector-icons'; // ✅ Import Icon
import BackIcon from '../../assets/SvgIcons/BackIcon';

const PaymentScreen = () => {
  const paymentData = [
    {
      id: '1',
      profileImage: require('../Theme/Assests/profile.png'),
      name: 'John Doe',
      age: 19,
      rating: '5.00',
      reviews: 150,
      location: 'New York, USA',
      arrivedDate: '7/1/2024',
      time: '17:00 - 12:00',
      feePerHour: '40 NIS',
      overallPrice: '200 NIS',
      status: 'Tap to Pay',
      backgroundColor: '#CEEEE4',
    },
    {
      id: '2',
      profileImage: require('../Theme/Assests/profile.png'),
      name: 'Jane Smith',
      age: 22,
      rating: '4.80',
      reviews: 120,
      location: 'San Francisco, USA',
      arrivedDate: '7/2/2024',
      time: '14:00 - 19:00',
      feePerHour: '50 NIS',
      overallPrice: '250 NIS',
      status: 'Payment Failed',
      backgroundColor: '#FFFF0038',
    },
    {
      id: '3',
      profileImage: require('../Theme/Assests/profile.png'),
      name: 'Emily Davis',
      age: 25,
      rating: '5.00',
      reviews: 200,
      location: 'Los Angeles, USA',
      arrivedDate: '7/3/2024',
      time: '10:00 - 15:00',
      feePerHour: '45 NIS',
      overallPrice: '225 NIS',
      status: 'Pending',
      backgroundColor: '#6488EA33',
    },
    {
      id: '4',
      profileImage: require('../Theme/Assests/profile.png'),
      name: 'Emily Davis',
      age: 25,
      rating: '5.00',
      reviews: 200,
      location: 'Los Angeles, USA',
      arrivedDate: '7/3/2024',
      time: '10:00 - 15:00',
      feePerHour: '45 NIS',
      overallPrice: '225 NIS',
      status: 'Pending',
      backgroundColor: '#D2BAA3',
    },
  ];

  const renderPaymentCard = ({item}) => (
    <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
      {/* Profile Section */}
        <View style={styles.cardRow}>
          <Image source={item.profileImage} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{item.name}</Text>
            <Text style={styles.profileText}>Age: {item.age} Years</Text>
            <View style={styles.ratingRow}>
              <StarIcon />
              <Text style={styles.profileText}>
                {' '}
                {item.rating} ({item.reviews} Reviews)
              </Text>
            </View>
            <View style={styles.locationRow}>
              <MapIcon />
              <Text style={styles.profileText}> {item.location}</Text>
            </View>
          </View>
        </View>
  
      {/* Details Section */}
      <View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Arrived: {item.arrivedDate}</Text>
        <Text style={styles.detailText}>From: {item.time}</Text>
        <Text style={styles.detailText}>Fee per hour: {item.feePerHour}</Text>
        <Text style={styles.detailText}>
          Overall Price: {item.overallPrice}
        </Text>
      </View>
  
      {/* Action Section */}
      {item.status === 'Tap to Pay' && (
        <TouchableOpacity
          style={[styles.payButton, {backgroundColor: item.buttonColor,}]}>
          <Text style={styles.payButtonText}>Tap to Pay</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Payment Failed' && (
        <>
        <View > 
        <Text style={styles.failedText}>
          Payment Failed:
        </Text>

        <TouchableOpacity
          style={[styles.payButton, {backgroundColor: item.buttonColor,}]}>
          <Text style={
            {
              fontSize: wp('3%'),
              fontFamily: 'small',
              color: black,
              textAlign: 'center',
            }
          }>Contact app support </Text>
        </TouchableOpacity>

        </View>
</>
      )}


      {item.status === 'Pending' && (
        <Text style={styles.pendingText}>
          Payment has been accepted by the sitter.
        </Text>
      )}
      </View>

    </View>
  );
  

  return (
    <View style={styles.container}>
<View style={styles.header}>
  <TouchableOpacity>
    <BackIcon />
  </TouchableOpacity>

  <Text style={styles.title}>Payments</Text>
</View>
<FlatList
    data={paymentData}
    renderItem={renderPaymentCard}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.listContainer}
    ListFooterComponent={<View style={{ height: 50 }} />} // ✅ Extra spacing at the bottom
    showsVerticalScrollIndicator={false} // ✅ Hide scroll bar (optional)
  />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',  
    alignItems: 'center',
    gap: 15,               
    paddingHorizontal: 20, 
    paddingVertical: 15,
  },

  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontSize: wp('6%'),
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  listContainer: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
   
  },
  card: {
    borderRadius: 10,
    padding: wp('2%'),
    marginBottom: hp('2%'),
    flexDirection:'row',
    alignItems:"flex-start",
    justifyContent:"space-between"
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('0.5%'),
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('7.5%'),
  },
  profileDetails: {
    marginLeft: wp('3%'),
  },
  profileName: {
    fontSize: wp('4%'),
    fontFamily: SemiBold,
    color: black,
  },
  profileText: {
    fontSize: wp('3%'),
    fontFamily: Regular,
    color: black,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  detailsContainer: {
    marginBottom: hp('1%'),
  },
  detailText: {
    fontSize: wp('3%'),
    fontFamily: Medium,
    color: black,
  },
  payButton: {
    backgroundColor: primary,
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    textAlign: 'center',
    shadowRadius: 3.84,
    elevation: 5,
    height: hp('5%'),
  
  
    }
  ,
  payButtonText: {
    fontSize: wp('3%'),
    fontFamily: Medium,
    color: black,
    textAlign: 'center',
  },
  failedText: {
    width:wp('30%'),
    fontSize: wp('3%'),
    fontFamily: Medium,
    color: black,
    textAlign: 'center',
  },
  pendingText: {
    fontSize: wp('3%'),
    fontFamily: Medium,
    color: black,
    textAlign: 'center',
    width:wp('30%'),

  },
});

export default PaymentScreen;
