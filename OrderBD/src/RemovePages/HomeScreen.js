import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
//import vector icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
//Define All colors into one variable
const Colors = colorFunction();

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* Parent View */}
        <View style={styles.ViewStyle}>
          {/* Logo And payment View */}
          <View style={styles.LogoAndPaymentView}>
            {/* Logo View */}
            <View>
              <Text style={styles.LogoText}>OrderBD</Text>
            </View>
            {/* Logo View */}

            {/* Payment View */}
            <View>
              <Pressable
                onPress={() => {
                  alert('payment method add later');
                }}
                style={({pressed}) => [
                  pressed ? styles.ActiveButton : styles.DeActiveButton,
                ]}>
                {({pressed}) => (
                  <SimpleLineIcons
                    name="credit-card"
                    size={ResponsiveFontSize(25)}
                    color={Colors.CardIcon}
                  />
                )}
              </Pressable>
            </View>
            {/* Payment View */}
          </View>
          {/* Logo And payment View */}

          {/* Location Appear View */}
          <TouchableOpacity activeOpacity={0.5} style={styles.LocationAndIcon}>
            {/* Location Text */}
            <View style={styles.LocationView}>
              <Entypo
                name="location-pin"
                size={ResponsiveFontSize(25)}
                color={Colors.Location_Arrow_Icon}
              />
              <Text style={styles.LocationText}>Your Current Location</Text>
            </View>
            {/* Location Text */}
            {/* Arrow Icon */}
            <View>
              <AntDesign
                name="right"
                size={ResponsiveFontSize(20)}
                color={Colors.Location_Arrow_Icon}
              />
            </View>
            {/* Arrow Icon */}
          </TouchableOpacity>
          {/* Location Appear View */}
          {/* Points And Text View */}
          <View style={styles.PointsAndText}>
            {/* Points View */}
            <View style={styles.PointsView}>
              <View style={styles.PointsLogoAndName}>
                {/* Logo View */}
                <View>
                  <AntDesign
                    name="star"
                    size={ResponsiveFontSize(50)}
                    color={Colors.Point_Logo}
                  />
                </View>
                {/* Logo View */}
                {/* Level Name and points */}
                <View style={styles.PointsTextView}>
                  <Text style={styles.PointText}>Bronze</Text>
                  <Text style={styles.PointNumberText}>0 Points</Text>
                </View>
                {/* Level Name and points */}
              </View>
              {/* QR Scanner */}
              <TouchableOpacity
                style={styles.QRView}
                activeOpacity={0.5}
                onPress={() => {
                  alert('Scan QR button');
                }}>
                <AntDesign
                  name="scan1"
                  size={ResponsiveFontSize(20)}
                  color={Colors.Point_Logo}
                />
                <Text style={styles.ScanText}>Scan QR</Text>
              </TouchableOpacity>
              {/* QR Scanner */}
            </View>
            {/* Points View */}
            {/* Promo and Benefits View */}
            <View style={styles.PromoAndBenefit}>
              {/* Promo Title View */}
              <View>
                <Text style={styles.BenefitsText}>
                  Exciting promos / benefits available!
                </Text>
              </View>
              {/* Promo Title View */}
              {/* See All Button */}
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.SeeAllView}
                onPress={() => {
                  alert('Sell All button');
                }}>
                <Text style={styles.SeeAllText}>See All</Text>
                <AntDesign
                  name="right"
                  size={ResponsiveFontSize(14)}
                  color={Colors.Point_Logo}
                />
              </TouchableOpacity>
              {/* See All Button */}
            </View>
            {/* Promo and Benefits View */}
          </View>
          {/* Points And Text View */}

          {/* Order Bd Features View */}
          <View style={styles.FeaturesFirstView}>
            {/* Show All Features */}
            <View style={styles.FeaturesView}>
              {/* Features Button View */}
              <View style={styles.FeatureButtonView}>
                {/* Features Button 1 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="motorbike"
                      size={ResponsiveFontSize(42)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Bike</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 1 */}
                {/* Features Button 2 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <FontAwesome5
                      name="car-side"
                      size={ResponsiveFontSize(30)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Car</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 2 */}
                {/* Features Button 3 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <Ionicons
                      name="ios-fast-food-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Food</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 3 */}
                {/* Features Button 4 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Parcel</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 4 */}
              </View>
              {/* Features Button View */}
              {/* Features Button View */}
              <View style={styles.FeatureButtonView}>
                {/* Features Button 5 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="motorbike"
                      size={ResponsiveFontSize(42)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Health</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 5 */}
                {/* Features Button 6 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <FontAwesome5
                      name="car-side"
                      size={ResponsiveFontSize(30)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Courier</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 6 */}
                {/* Features Button 7*/}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <Ionicons
                      name="ios-fast-food-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Shop</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 7 */}
                {/* Features Button 8 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Tong</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 8 */}
              </View>
              {/* Features Button View */}
              {/* Features Button View */}
              <View style={styles.FeatureButtonView}>
                {/* Features Button 1 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="motorbike"
                      size={ResponsiveFontSize(42)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Bike</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 1 */}
                {/* Features Button 2 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <FontAwesome5
                      name="car-side"
                      size={ResponsiveFontSize(30)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Car</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 2 */}
                {/* Features Button 3 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <Ionicons
                      name="ios-fast-food-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Food</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 3 */}
                {/* Features Button 4 */}
                <View>
                  <TouchableOpacity
                    style={styles.FeaturesButton}
                    activeOpacity={0.5}
                    onPress={() => {
                      alert('This is for Bike');
                    }}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={ResponsiveFontSize(35)}
                      color={Colors.Point_Logo}
                    />
                    <Text style={styles.BikeText}>Parcel</Text>
                  </TouchableOpacity>
                </View>
                {/* Features Button 4 */}
              </View>
              {/* Features Button View */}
            </View>
            {/* Show All Features */}
          </View>
          {/* Order Bd Features View */}
        </View>
        {/* Parent View */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
  },
  ViewStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(1),
  },
  LogoAndPaymentView: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(1),
  },
  LogoText: {
    fontSize: ResponsiveFontSize(20),
    letterSpacing: 0.5,
    fontWeight: '700',
  },
  ActiveButton: {
    backgroundColor: Colors.CardIcon_DeActive_Background,
    padding: ResponsiveFontSize(15),
    borderRadius: ResponsiveFontSize(100),
  },
  DeActiveButton: {
    backgroundColor: Colors.CardIcon_Active_Background,
    padding: ResponsiveFontSize(15),
    borderRadius: ResponsiveFontSize(100),
  },
  LocationAndIcon: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(1),
  },
  LocationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LocationText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Location_Text,
  },
  PointsAndText: {
    width: '95%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Points_Border,
    borderRadius: ResponsiveFontSize(8),
  },
  PointsView: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(2),
  },
  PointsLogoAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PointsTextView: {
    paddingHorizontal: widthToDp(2),
  },
  PointText: {
    fontSize: ResponsiveFontSize(18),
    color: Colors.Point_Logo,
  },
  PointNumberText: {
    fontSize: ResponsiveFontSize(15),
    fontWeight: '600',
  },
  QRView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Point_Logo,
    paddingVertical: heightToDp(0.2),
    paddingHorizontal: widthToDp(1.5),
    borderRadius: ResponsiveFontSize(8),
  },
  ScanText: {
    color: Colors.Point_Logo,
    fontSize: ResponsiveFontSize(16),
    margin: widthToDp(1),
    fontWeight: '700',
  },
  PromoAndBenefit: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(2),
    backgroundColor: Colors.Benefit_Background,
    elevation: Platform.OS === 'ios' ? null : 5,
  },
  BenefitsText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Benefit_Text,
    marginLeft: widthToDp(1),
  },
  SeeAllView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SeeAllText: {
    color: Colors.Point_Logo,
    marginRight: widthToDp(1),
    fontSize: ResponsiveFontSize(12),
  },
  FeaturesFirstView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(3),
  },
  FeaturesView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.Features_Background,
    paddingVertical: heightToDp(2),
  },
  FeatureButtonView: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightToDp(2.5),
  },
  FeaturesButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp(20),
    height: heightToDp(15),
    backgroundColor: Colors.Features_Button_Background,
    borderRadius: ResponsiveFontSize(10),
  },
  BikeText: {
    color: Colors.Bike_Text,
    fontSize: ResponsiveFontSize(10),
  },
});

export default HomeScreen;
