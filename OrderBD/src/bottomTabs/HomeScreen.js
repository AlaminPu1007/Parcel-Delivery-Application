import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
import moment from 'moment';
//import Header
import Header from './homeComponent/Header';
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
import {width} from 'styled-system';
//Define All colors into one variable
const Colors = colorFunction();

//Declare Category Button
const CategoryButton = [
  {
    id: 1,
    category_name: 'Courier',
    navigation_link: 'Courier-screen',
    Icon_name: 'truck-delivery-outline',
  },
  {
    id: 2,
    category_name: 'Parcel',
    navigation_link: 'Parcel-Screen',
    Icon_name: 'truck-delivery-outline',
  },
  {
    id: 3,
    category_name: 'Car',
    navigation_link: 'Car-screen',
    Icon_name: 'truck-delivery-outline',
  },
  {
    id: 4,
    category_name: 'Bazar',
    navigation_link: 'Bazar-screen',
    Icon_name: 'truck-delivery-outline',
  },
  {
    id: 5,
    category_name: 'Bus',
    navigation_link: 'Bus-screen',
    Icon_name: 'truck-delivery-outline',
  },
  {
    id: 6,
    category_name: 'Train',
    navigation_link: 'Train-screen',
    Icon_name: 'truck-delivery-outline',
  },
];

//declare data
const flatListData = [
  {
    id: 1,
    title: 'First Image',
    link: 'First_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on first image',
  },
  {
    id: 2,
    title: 'Second Image',
    link: 'Second_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on second image',
  },
  {
    id: 3,
    title: 'Third Image',
    link: 'Third_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on third image',
  },
  {
    id: 4,
    title: 'Fourth Image',
    link: 'Fourth_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on fourth image',
  },
  {
    id: 5,
    title: 'Fifth Image',
    link: 'Fifth_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on five image',
  },
  {
    id: 6,
    title: 'Sixth Image',
    link: 'Sixth_image Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on six image',
  },
  {
    id: 7,
    title: 'Seven Image',
    link: 'Seven Render',
    image: require('../image/profile.jpg'),
    navigate_screen: 'you click on seven image',
  },
];

//Food info
const FoodData = [
  {
    id: 1,
    name: 'Berger',
    description: 'Food description',
    navigate_screen: 'Seven Render',
    image: require('../image/profile.jpg'),
    price: '$20',
  },
  {
    id: 2,
    name: 'Rice',
    description: 'Food description',
    navigate_screen: 'second Render',
    image: require('../image/profile.jpg'),
    price: '$25',
  },
  {
    id: 3,
    name: 'Meat',
    description: 'Food description',
    navigate_screen: 'Third Render',
    image: require('../image/profile.jpg'),
    price: '$30',
  },
  {
    id: 4,
    name: 'Ginger',
    description: 'Food description',
    navigate_screen: 'Fourth Render',
    image: require('../image/profile.jpg'),
    price: '$35',
  },
];

const HomeScreen = ({navigation}) => {
  //Declare State
  const [indexSize, setIndexSize] = useState(2);
  const [Visible, setVisible] = useState(true);

  //onPress Function
  const IncreaseCategoryLength = () => {
    return setIndexSize(CategoryButton.length), setVisible(false);
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      <ScrollView
        // scrollEnabled={outerScrollViewScrollEnabled}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* Parent View */}
        <View style={styles.ViewStyle}>
          {/* Header View */}
          <View style={styles.HeaderView}>
            <Header navigation={navigation} />
          </View>

          {/* Header View */}
          {/* Render FlatList Item */}
          <View>
            <FlatList
              horizontal
              data={flatListData}
              keyExtractor={item => item.id}
              onEndReachedThreshold={0.5}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      alert(item.navigate_screen);
                    }}
                    style={[
                      styles.FlatListStyle,
                      index == flatListData.length - 1
                        ? {marginRight: widthToDp(2)}
                        : null,
                    ]}>
                    <Image source={item.image} style={styles.ImageStyle} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* Render FlatList Item */}
          {/* Category View */}
          <View style={styles.CategoryInitialView}>
            {/* category button view */}
            <View style={styles.CategoryView}>
              {/* Category Button */}
              <View style={styles.CategoryFlatListView}>
                <FlatList
                  horizontal
                  data={CategoryButton}
                  keyExtractor={item => item.id}
                  onEndReachedThreshold={0.5}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    return index <= indexSize ? (
                      <View
                        style={[
                          styles.CategoryFlatListStyle,
                          index == flatListData.length - 1
                            ? {marginRight: widthToDp(2)}
                            : null,
                        ]}>
                        <TouchableOpacity
                          style={styles.categoryButtonView}
                          activeOpacity={0.5}
                          onPress={() => {
                            item.navigation_link == 'Parcel-Screen'
                              ? navigation.navigate(item.navigation_link)
                              : alert(item.category_name)
                          }}>
                          <MaterialCommunityIcons
                            name={item.Icon_name}
                            size={ResponsiveFontSize(35)}
                            color={Colors.Point_Logo}
                          />
                          <Text style={styles.BikeText}>
                            {item.category_name}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : null;
                  }}
                />
                {CategoryButton.length > 3 ? (
                  Visible ? (
                    <View>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={IncreaseCategoryLength}
                        style={styles.SeeAllButton}>
                        <Text style={styles.SeeAllText}>See All</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null
                ) : null}
              </View>
              {/* Category Button */}
            </View>
            {/* category button view */}
          </View>
          {/* Category View */}
          {/* Trend Food */}
          <View style={styles.TrendFoodInitialView}>
            {/* Trend Food Show */}
            <View style={styles.TrendFoodView}>
              {/* Trend Text View */}
              <View style={styles.TrendFood}>
                <Text style={styles.TrendFoodTextStyle}>Trend Food</Text>
              </View>
              {/* Trend Text View */}
              {/* Show All Food */}
              <View style={styles.FoodViewStyle}>
                {/* Food Button */}
                <View style={styles.FoodButtonInitialView}>
                  {FoodData.map(item => {
                    return (
                      <TouchableOpacity
                      onPress={()=>{alert(item.name)}}
                        activeOpacity={0.5}
                        style={styles.FoodMapView}
                        key={item.id}>
                        <View style={styles.FoodButtonView}>
                          {/* image and food description */}
                          <View style={styles.ImageAndFood}>
                            {/* Image View */}
                            <View>
                              <Image
                                source={item.image}
                                style={styles.FoodImageStyle}
                              />
                            </View>
                            {/* Image View */}
                            {/* Food Description View */}
                            <View style={styles.FoodName}>
                              <Text style={styles.FoodNameText}>
                                {item.name}
                              </Text>
                              <Text style={styles.FoodDescriptionText}>
                                {item.description}
                              </Text>
                            </View>
                            {/* Food Description View */}
                          </View>
                          {/* image and food description */}

                          {/* Food Price View */}
                          <View>
                            <Text style={styles.PriceText}>{item.price}</Text>
                          </View>
                          {/* Food Price View */}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                {/* Food Button */}
              </View>
              {/* Show All Food */}
            </View>
            {/* Trend Food Show */}
          </View>
          {/* Trend Food */}
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
    paddingTop: heightToDp(1),
    paddingBottom: heightToDp(13),
    backgroundColor: Colors.Dashboard_Bg_color,
  },
  LinearGradientViewStyle: {
    flex: 1,
    width: '100%',
  },
  HeaderView: {
    width: '100%',
    alignItems: 'center',
  },
  FlatListStyle: {
    marginLeft: widthToDp(2),
  },
  ImageStyle: {
    resizeMode: 'cover',
    height: heightToDp(35),
    width: widthToDp(80),
    borderRadius: ResponsiveFontSize(10),
  },
  CategoryInitialView: {
    width: '100%',
    paddingVertical: heightToDp(3),
  },
  categoryButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp(20),
    height: heightToDp(15),
    backgroundColor: Colors.Features_Button_Background,
    borderRadius: ResponsiveFontSize(10),
    marginHorizontal: widthToDp(1),
  },
  CategoryFlatListView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CategoryView: {
    width: '100%',
    alignItems: 'center',
  },
  SeeAllButton: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(5),
    backgroundColor: Colors.Features_Button_Background,
    marginRight: widthToDp(1),
  },
  BikeText: {
    color: Colors.Bike_Text,
    fontSize: ResponsiveFontSize(13),
  },
  SeeAllText: {
    color: Colors.Home_Tab_Color,
    fontSize: ResponsiveFontSize(15),
    fontWeight: 'bold',
  },
  TrendFoodInitialView: {
    alignItems: 'center',
    width: '100%',
  },
  TrendFoodView: {
    width: '100%',
  },
  TrendFood: {
    paddingBottom: heightToDp(2),
    marginLeft: widthToDp(2),
  },
  TrendFoodTextStyle: {
    fontSize: ResponsiveFontSize(17),
    color: Colors.Features_Button_Background,
    fontWeight: '600',
  },
  FoodViewStyle: {
    paddingVertical: heightToDp(3),
    backgroundColor: Colors.Activity_Button_Color,
    alignItems: 'center',
    borderRadius: ResponsiveFontSize(10),
  },
  ImageAndFood: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FoodButtonInitialView: {
    width: '95%',
    padding: heightToDp(3),
    backgroundColor: Colors.Features_Button_Background,
    borderRadius: ResponsiveFontSize(10),
  },
  FoodButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightToDp(2),
  },
  FoodMapView: {
    marginVertical: heightToDp(1),
    borderBottomWidth: 1,
    borderBottomColor: Colors.In_Active_Bottom,
  },
  FoodImageStyle: {
    resizeMode: 'cover',
    height: heightToDp(10),
    width: widthToDp(20),
    borderRadius: ResponsiveFontSize(5),
  },
  FoodName: {
    marginLeft: widthToDp(2),
  },
  FoodNameText: {
    fontSize: ResponsiveFontSize(16),
    fontWeight: 'bold',
  },
  FoodDescriptionText: {
    fontSize: ResponsiveFontSize(13),
    color: Colors.Location_Text,
  },
  PriceText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Dashboard_Bg_color,
  },
});

export default HomeScreen;
