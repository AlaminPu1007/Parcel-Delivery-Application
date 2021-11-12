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
import {colorFunction} from '../../component/Colors';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../../component/Responsive';
import moment from 'moment';
import Header from '../../component/BackHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Define All colors into one variable
const Colors = colorFunction();

const ParcelScreen = ({navigation}) => {

  //On press function
  const goParcelForm=()=>{
    return navigation.navigate('Parcel-Form');
  }
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        // scrollEnabled={outerScrollViewScrollEnabled}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* Parent View */}
        <View style={styles.ViewStyle}>
          {/* Header View */}
          <View style={styles.HeaderView}>
            <Header navigation={navigation} title="What are you sending?" />
          </View>
          {/* Header View */}
          {/* ParcelCategory View */}
          <View style={styles.ParcelView}>
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.categoryButton}
              onPress={goParcelForm}>
              <View style={styles.categoryButtonView}>
                <Ionicons
                  name="document"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Documents</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={goParcelForm}
              style={styles.categoryButton}>
              <View style={styles.categoryButtonView}>
                <Ionicons
                  name="fast-food"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Food or Meals</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={goParcelForm}
              style={styles.categoryButton}>
              <View style={styles.categoryButtonView}>
                <Ionicons
                  name="shirt"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Clothes</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={goParcelForm}
              style={styles.categoryButton}>
              <View style={styles.categoryButtonView}>
                <MaterialIcons
                  name="local-grocery-store"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Groceries</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={goParcelForm}
              style={styles.categoryButton}>
              <View style={styles.categoryButtonView}>
                <MaterialIcons
                  name="cake"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Cake</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
            {/* Parcel Category Button */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={goParcelForm}
              style={styles.categoryButton}>
              <View style={styles.categoryButtonView}>
                <Entypo
                  name="flower"
                  size={ResponsiveFontSize(25)}
                  color={Colors.Header_Background}
                  style={styles.IconStyle}
                />
                <Text style={styles.ButtonText}>Flowers</Text>
              </View>
            </TouchableOpacity>
            {/* Parcel Category Button */}
          </View>
          {/* ParcelCategory View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: Colors.Parcel_Background,
  },
  ViewStyle: {
    flex: 1,
    width: '100%',
    paddingBottom: heightToDp(13),
  },
  ParcelView: {
    paddingVertical: heightToDp(2),
  },
  categoryButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.Features_Button_Background,
    marginVertical: heightToDp(1),
  },
  categoryButtonView: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightToDp(2),
  },
  IconStyle: {
    borderWidth: 1,
    paddingHorizontal: widthToDp(1),
    paddingVertical: heightToDp(0.5),
    borderRadius: ResponsiveFontSize(5),
    borderWidth: 1,
    borderColor: Colors.Border_Color,
  },
  ButtonText: {
    marginLeft: widthToDp(5),
    color: Colors.Back_Header_Title,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '500',
  },
});

export default ParcelScreen;
