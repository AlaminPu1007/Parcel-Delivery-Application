import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InboxScreen = () => {
  return (
    <View style={styles.curvedViewStyle}>
      <View style={styles.container}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  curvedViewStyle: {
    flex: 1,
  },
  container: {
    height: '40%',
    backgroundColor: 'red',
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
    overflow: 'hidden',
  },
});

export default InboxScreen;
