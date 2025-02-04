import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {black, white, primary} from '../Stylings/Colors';
import {Regular, SemiBold} from '../Stylings/Font.Family';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons from vector-icons

const ProfileScreen = ({navigation}) => {
  // Example data for settings
  const settingsData = [
    {
      id: '1',
      title: 'Account',
      icon: 'account-circle',
      onClick: () => navigation.navigate('SignupScreen'),
    },
    {id: '2', title: 'Notifications', icon: 'notifications',
      onClick: () => navigation.navigate('NotificationScreen'),


    },
    {id: '3', title: 'Appearance', icon: 'color-lens',
      onClick: () => navigation.navigate('BookSitterScreen'),

    },
    {id: '4', title: 'Privacy Policy', icon: 'lock',
      onClick: () => navigation.navigate('NotificationScreen'),

    },
    {id: '5', title: 'Help and Support', icon: 'help',
      onClick: () => navigation.navigate('NotificationScreen'),

    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.settingItem} onPress={item.onClick}>
      <Icon name={item.icon} size={wp('6%')} color={black} />
      <Text style={styles.settingTitle}>{item.title}</Text>
      <Icon name="arrow-forward" size={wp('5%')} color={black} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../Theme/Assests/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Erin Dowart</Text>
      </View>

      {/* Settings List */}
      <FlatList
        data={settingsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.settingsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: wp('5%'),
  },
  header: {
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  profileImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('12.5%'),
    marginBottom: hp('2%'),
  },
  profileName: {
    fontSize: wp('5%'),
    fontFamily: SemiBold,
    color: black,
  },
  settingsList: {
    marginTop: hp('2%'),
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingTitle: {
    fontSize: wp('4.5%'),
    fontFamily: Regular,
    color: black,
    marginLeft: wp('3%'),
    flex: 1,
  },
});

export default ProfileScreen;
