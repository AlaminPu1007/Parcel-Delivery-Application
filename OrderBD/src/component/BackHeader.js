import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { backgroundColor } from 'styled-system';
import {colorFunction} from './Colors';
//import Responsive height, width & fontsize
import {widthToDp, ResponsiveFontSize, heightToDp} from './Responsive';
//Define All colors into one variable
const Colors = colorFunction();

const BackHeader = ({navigation, title, id}) => {
  //On press Function
  const GoBackFunction = () => {
    return navigation.goBack();
  };

  return (
    <View>
      <View style={styles.initialHeaderView}>
        <View style={styles.headerView}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={GoBackFunction}
              style={styles.BackButton}>
              <View>
                <AntDesign
                  name="left"
                  size={ResponsiveFontSize(20)}
                  color={Colors.Features_Button_Background}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>
            <Text style={styles.titleViewText}> {title} </Text>
          </View>

          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  initialHeaderView: {
    alignItems: 'center',
    backgroundColor: Colors.Header_Background,
    paddingVertical: heightToDp(1),
  },

  headerView: {
    width: '95%',
    flexDirection: 'row',
    paddingVertical: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  BackButton: {
    borderWidth: 1,
    borderColor: Colors.Back_arrow,
    borderRadius: ResponsiveFontSize(50),
    padding: ResponsiveFontSize(6),
    backgroundColor: Colors.Back_arrow,
  },

  titleView: {
    alignItems: 'center',
  },

  titleViewText: {
    fontSize: ResponsiveFontSize(17),
    color: Colors.Back_Header_Title,
    fontWeight: '600',
  },
});

export default BackHeader;
