import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
//Import Tabs navigation pages
import HomeScreen from '../bottomTabs/HomeScreen';
import InboxScreen from '../bottomTabs/InboxScreen';
import HistoryScreen from '../bottomTabs/HistoryScreen';
import MoreScreen from '../bottomTabs/MoreScreen';
import CardScreen from '../bottomTabs/CardScreen';
//import react native vector icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Colors Page
import {colorFunction} from '../component/Colors';

//Category List screen
import ParcelScreen from '../bottomTabs/categoryScreen/ParcelScreen';
import ParcelForm from '../bottomTabs/categoryScreen/ParcelForm';

//Define HomePage Stack Navigation
const HomeyStack = createNativeStackNavigator();

const HomeyStackStack = () => {
  return (
    <HomeyStack.Navigator
      // initialRouteName="Registration"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeyStack.Screen name="Home" component={HomeScreen} />
      <HomeyStack.Screen name="Parcel-Screen" component={ParcelScreen} />
      <HomeyStack.Screen name="Parcel-Form" component={ParcelForm} />
    </HomeyStack.Navigator>
  );
};


//Define Bottom tabs
const BottomTab = createBottomTabNavigator();
const Colors = colorFunction();

const Tabs = () => {
  // Custom Tab bar home button
  const CustomTabButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.CustomButton, styles.opacity]}>
        <View style={styles.CustomView}>{children}</View>
      </TouchableOpacity>
    );
  };
  // Custom Tab bar home button

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.Home_Tab_Color, // Colors.Active_Bottom,
        tabBarInactiveTintColor: Colors.In_Active_Bottom,
        // tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: Colors.Tab_Background_Color,
          borderRadius: 20,
          height: 60,
          ...styles.opacity,
        },
      }}>
      <BottomTab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.TabBarLabelIcon}>
              <Feather name="credit-card" size={size} color={color} />
              {/* <Text
                style={{
                  fontSize: 15,
                  color: focused
                    ? Colors.Active_Bottom
                    : Colors.In_Active_Bottom,
                }}>
                Card
              </Text> */}
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.TabBarLabelIcon}>
              <Feather name="inbox" size={size + 3} color={color} />
              {/* <Text
                style={{
                  fontSize: 15,
                  color: focused
                    ? Colors.Active_Bottom
                    : Colors.In_Active_Bottom,
                }}>
                Inbox
              </Text> */}
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Dashboard"
        component={HomeyStackStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.TabBarLabelIcon}>
              <Entypo
                name="home"
                size={size + 3}
                color={Colors.Tab_Background_Color}
              />
              {/* <Text
                style={{
                  fontSize: 15,
                  color: focused
                    ? Colors.Active_Bottom
                    : Colors.In_Active_Bottom,
                }}>
                Card
              </Text> */}
            </View>
          ),
          tabBarButton: props => <CustomTabButton {...props} />,
        }}
      />

      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history" size={size + 4} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.TabBarLabelIcon}>
              <Feather name="settings" size={size} color={color} />
              {/* <Text
                style={{
                  fontSize: 15,
                  color: focused
                    ? Colors.Active_Bottom
                    : Colors.In_Active_Bottom,
                }}>
                Card
              </Text> */}
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  opacity: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  TabBarLabelIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CustomButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CustomView: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: Colors.Home_Tab_Color,
  },
});

export default Tabs;
