import React from 'react';
import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';

const FlatListView = () => {
  handleInnerPressIn = () =>
    this.setState({outerScrollViewScrollEnabled: false});
  handleInnerPressOut = () =>
    this.setState({outerScrollViewScrollEnabled: true});
  //declare data
  const flatListData = [
    {
      id: 1,
      title: 'First Image',
      link: 'First_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 2,
      title: 'Second Image',
      link: 'Second_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 3,
      title: 'Third Image',
      link: 'Third_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 4,
      title: 'Fourth Image',
      link: 'Fourth_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 5,
      title: 'Fifth Image',
      link: 'Fifth_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 6,
      title: 'Sixth Image',
      link: 'Sixth_image Render',
      image: require('../../image/profile.jpg'),
    },
    {
      id: 7,
      title: 'Seven Image',
      link: 'Seven Render',
      image: require('../../image/profile.jpg'),
    },
  ];
  return (
    <View>
      <FlatList
        data={flatListData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListView;
