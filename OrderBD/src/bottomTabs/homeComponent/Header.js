import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../../component/Responsive';
import {colorFunction} from '../../component/Colors';
import moment from 'moment';

const Colors = colorFunction();

//declare today date
const TodayDate = moment().format('dddd Do MMMM ');

const Header = ({navigation}) => {
  //get current day name with date

  return (
    <View style={styles.HeaderView}>
      {/* Welcome and Date View */}
      <View>
        <View>
          <Text style={styles.DateTextStyle}>{TodayDate}</Text>
        </View>
        <View>
          <Text style={styles.WelcomeTextStyle}>Welcome</Text>
        </View>
      </View>
      {/* Welcome and Date View */}
      {/* Icon View */}
      <View style={styles.IconInitialView}>
        {/* cart icon */}
        <View>
          <TouchableOpacity
            style={styles.IconView}
            activeOpacity={0.5}
            onPress={() => {
              alert('need to add cart');
            }}>
            <Feather
              name="shopping-cart"
              size={ResponsiveFontSize(20)}
              color={Colors.Black}
            />
          </TouchableOpacity>
        </View>
        {/* cart icon */}
        {/* notification Icon */}
        <View>
          <TouchableOpacity
            style={styles.IconView}
            activeOpacity={0.5}
            onPress={() => {
              alert('need to add notification');
            }}>
            <Ionicons
              name="notifications"
              size={ResponsiveFontSize(20)}
              color={Colors.Black}
            />
          </TouchableOpacity>
        </View>
        {/* notification Icon */}
        {/* Profile Image View */}
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              alert('profile image');
            }}>
            <Image
              source={require('../../image/profile.jpg')}
              style={styles.ProfileImageStyle}
            />
          </TouchableOpacity>
        </View>
        {/* Profile Image View */}
      </View>
      {/* Icon View */}
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    alignItems: 'center',
    paddingVertical: heightToDp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    
  },
  DateTextStyle: {
    color: Colors.Features_Button_Background,
    fontSize: ResponsiveFontSize(13),
  },
  WelcomeTextStyle: {
    color: Colors.Features_Button_Background,
    fontSize: ResponsiveFontSize(23),
    fontWeight: '700',
  },
  IconInitialView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileImageStyle: {
    height: ResponsiveFontSize(40),
    width: ResponsiveFontSize(40),
    resizeMode: 'cover',
    borderRadius: ResponsiveFontSize(100),
    marginHorizontal: widthToDp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconView: {
    height: ResponsiveFontSize(40),
    width: ResponsiveFontSize(40),
    borderRadius: ResponsiveFontSize(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Features_Button_Background,
    marginHorizontal: widthToDp(1),
  },
});

export default Header;
