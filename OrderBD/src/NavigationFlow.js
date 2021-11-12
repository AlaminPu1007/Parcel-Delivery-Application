import {navigationRef} from './RootNavigation';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  TransitionSpecs,
} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//import Authentication Context page
import {Context as AuthContext} from './context/AuthContext';

//import Custome Tabs
import Tabs from './Navigation/Tabs';

//Import Authentication Stack Screen
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import ForgetPassword from './Authentication/ForgetPassword';
import UserVerification from './Authentication/UserVerification';

//import Colors Page
import {colorFunction} from './component/Colors';

//Define Authentication Stack Navigation
const AuthStack = createNativeStackNavigator();
//Define Colors Function
const Colors = colorFunction();
//Define Authentication Stack Navigation Function
const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator
      // initialRouteName="Registration"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="UserVerification" component={UserVerification} />
    </AuthStack.Navigator>
  );
};

export default () => {
  const {
    state: {token},
  } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {!token ? <Tabs /> : <AuthenticationStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
