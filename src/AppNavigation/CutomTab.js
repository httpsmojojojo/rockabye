import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import HomeIcon from '../../assets/SvgIcons/HomeIcon';
import HomeUnactiveIcon from '../../assets/SvgIcons/HomeUnActiveIcon';
import ActiveHistoryIcon from '../../assets/SvgIcons/HistoryActiveIcon';
import HistoryIcon from '../../assets/SvgIcons/HistoryIcon';
import NotificationActiveIcon from '../../assets/SvgIcons/NotificationActiveIcon';
import NotificationIcon from '../../assets/SvgIcons/NotificationIcon';
import UserActiveIcon from '../../assets/SvgIcons/UserActiveIcon';
import UserIcon from '../../assets/SvgIcons/UserIcon';
import {SemiBold} from '../Stylings/Font.Family';
import {black, light_black, primary, white} from '../Stylings/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CustomTab = ({navigation, currentRoute}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    console.log('Logged out');
  };

  const routes = [
    {name: 'HomeScreen', label: 'Home'},
    {name: 'HistoryScreen', label: 'History'},
    {name: 'NotificationScreen', label: 'Notification'},
    {name: 'ProfileSpalshScreen', label: 'Profile'},
  ];

  return (
    <View style={styles.tabContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: '#F43030'}]}
                onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>

      {routes.map(route => {
        const isFocused = currentRoute === route.name;

        return (
          <TouchableOpacity
            key={route.name}
            style={[styles.tabButton, isFocused && styles.activeTab]}
            onPress={() => {
              if (route.name === 'Logout') {
                setModalVisible(true);
              } else {
                navigation.navigate(route.name);
              }
            }}>
            <View style={styles.tabContent}>
              {isFocused ? (
                <ActiveIcon name={route.name} />
              ) : (
                <InactiveIcon name={route.name} />
              )}
              {isFocused && (
                <MaskedView
                  maskElement={
                    <Text style={styles.tabLabel}>{route.label}</Text>
                  }>
                  <LinearGradient
                    colors={['#204D65', '#79C7BA']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={[styles.tabLabel, {opacity: 0}]}>
                      {route.label}
                    </Text>
                  </LinearGradient>
                </MaskedView>
              )}
              {isFocused && (
                <LinearGradient
                  colors={['#225C7F', '#79C7BA']}
                  style={styles.gradientDot}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}></LinearGradient>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ActiveIcon = ({name}) => {
  switch (name) {
    case 'HomeScreen':
      return <HomeIcon />;
    case 'HistoryScreen':
      return <ActiveHistoryIcon />;
    case 'NotificationScreen':
      return <NotificationActiveIcon />;
    case 'ProfileSpalshScreen':
      return <UserActiveIcon />;
    default:
      return null;
  }
};

const InactiveIcon = ({name}) => {
  switch (name) {
    case 'HomeScreen':
      return <HomeUnactiveIcon />;
    case 'HistoryScreen':
      return <HistoryIcon />;
    case 'NotificationScreen':
      return <NotificationIcon />;
    case 'ProfileSpalshScreen':
      return <UserIcon />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp('9%'),
    width: wp('90%'),
    paddingHorizontal: wp('2%'),
    alignSelf: 'center',
    backgroundColor: light_black,
    elevation: 8,
    borderColor: light_black,
    borderRadius: wp('10%'),
    position:"absolute",
    bottom:hp('1%')
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTextWrapper: {
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('1%'),
  },
  activeTabText: {
    color: white,
    fontSize: wp('3.5%'),
    fontFamily: SemiBold,
  },
  gradientDot: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('2%'),

    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    width: wp('1.5%'),
    height: wp('1.5%'),
    borderRadius: wp('0.75%'),
    backgroundColor: white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp('80%'),
    backgroundColor: white,
    borderRadius: wp('5%'),
    padding: wp('5%'),
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: wp('5%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    fontFamily: SemiBold,
    color: black,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: hp('1%'),
    marginHorizontal: wp('2%'),
    backgroundColor: primary,
    borderRadius: wp('3%'),
    alignItems: 'center',
  },
  modalButtonText: {
    color: white,
    fontSize: wp('4%'),
  },
});

export default CustomTab;
