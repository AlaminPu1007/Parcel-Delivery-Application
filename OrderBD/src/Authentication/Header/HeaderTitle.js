import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colorFunction} from '../../component/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../../component/Responsive';
const Colors = colorFunction();

const HeaderTitle = ({navigation, Value, title}) => {
  return (
    <View style={styles.BodyView}>
      {/* if Back Button Exists */}
      {Value ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.BackButtonStyle}
            onPress={() => {
              navigation.goBack()
            }}>
            <AntDesign
              name="left"
              size={ResponsiveFontSize(25)}
              color={Colors.Login_Header_Title}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      {/* if Back Button Exists */}
      {/* Header Title  */}
      <View>
        <Text style={styles.Title}>{title}</Text>
      </View>
      {/* Header Title  */}
      {/* Null View Area */}
      <View />
      {/* Null View Area */}
    </View>
  );
};

const styles = StyleSheet.create({
  BodyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.StatusBar_Background,
    paddingVertical: heightToDp(2),
  },
  Title: {
    fontSize: ResponsiveFontSize(18),
    fontWeight: '700',
    color: Colors.Login_Header_Title,
  },
  BackButtonStyle:{
    paddingHorizontal: widthToDp(3),
  },
});

export default HeaderTitle;
