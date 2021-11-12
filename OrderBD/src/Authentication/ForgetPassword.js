import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
//import Header Screen
import Header from './Header/HeaderTitle';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
//Define All colors into one variable
const Colors = colorFunction();

const ForgetPassword = ({navigation}) => {
  //Define State
  const [Mobile, setMobile] = useState('');
  const [MobileFill, setMobileFill] = useState('');
  //Define State

  //useEffect function
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      navigation.addListener('blur', () => {
        ClearTextInput();
      });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  /* Clear TextInput Field */
  const ClearTextInput = () => {
    return (
      setMobile(''),
      setMobileFill('')
    );
  };
  /* Clear TextInput Field */

  //On Press Function
  //Email TextInput function
  const OnChangeMobile = text => {
    if (text.length == 0) {
      setMobileFill(false);
    } else {
      setMobileFill(true);
    }
    setMobile(text);
  };

  //On Press Function
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Forget Password" Value={1} />
      </View>
      {/* Header Area */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            {/* Phone Number TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>
                Enter your mobile number
              </Text>
              {/* Mobile Number */}
              <View
                style={
                  (MobileFill !== '' ? !MobileFill : null)
                    ? [styles.MobileNumber, styles.MobileTextInputStyleError]
                    : styles.MobileNumber
                }>
                {/* flag View */}
                <View style={styles.FlagView}>
                  <View style={styles.FlagStyle}>
                    <View style={styles.FlagRound} />
                  </View>
                </View>

                {/* flag View */}
                <View style={styles.VerticalBorderStyle} />

                {/* Mobile Code View */}
                <View style={styles.CodeView}>
                  <Text style={styles.CodeTextStyle}>+880</Text>
                </View>
                {/* Mobile Code View */}
                {/* TextInput */}
                <View style={styles.PhoneTextInputView}>
                  <TextInput
                    style={styles.MobileTextInputStyle}
                    placeholder="1XXXXXXXXX"
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => {
                      firstTextInput.focus();
                    }}
                    value={Mobile}
                    onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    autoFocus={true}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
                {/* TextInput */}
              </View>
              {/* Mobile Number */}
            </View>
            {/* Phone Number TextInput Box */}

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              {MobileFill ? (
                <TouchableOpacity
                  style={styles.LoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Search</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  style={styles.DeActiveLoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Search</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Login Button View */}
          </View>
          {/* Login View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: Colors.StatusBar_Background,
  },
  HeaderView: {
    // paddingBottom: heightToDp(8),
  },
  ContentStyle: {
    flexGrow: 1,
    // paddingVertical: heightToDp(1),
  },
  BodyViewStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: heightToDp(15),
    paddingBottom: heightToDp(1),
  },
  LoginView: {
    width: '90%',
  },
  MobileNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  PhoneTextStyle: {
    fontSize: ResponsiveFontSize(15),
    color: Colors.Mobile_TextInput_Text,
    paddingVertical: heightToDp(2),
  },
  FlagView: {
    width: '15%',
    alignItems: 'center',
  },
  CodeView: {
    width: '15%',
    alignItems: 'center',
  },
  CodeTextStyle: {
    color: Colors.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  PhoneTextInputView: {
    width: '65%',
  },
  FlagStyle: {
    width: ResponsiveFontSize(30),
    height: ResponsiveFontSize(18),
    backgroundColor: '#006a4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlagRound: {
    width: ResponsiveFontSize(12),
    height: ResponsiveFontSize(12),
    backgroundColor: '#f42a41',
    borderRadius: ResponsiveFontSize(100),
  },
  VerticalBorderStyle: {
    height: '80%',
    borderWidth: 1,
    borderColor: Colors.Mobile_TextInput_Border,
    marginHorizontal: ResponsiveFontSize(8),
  },
  MobileTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: Colors.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },



  LoginButtonView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(3),
  },
  LoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: Colors.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  },
  LoginButtonText: {
    color: Colors.StatusBar_Background,
    fontSize: ResponsiveFontSize(16),
    fontWeight: '600',
  },
 
 

  MobileTextInputStyleError: {
    borderWidth: 1,
    borderColor: Colors.TextInput_Error_Border,
  },
  DeActiveLoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.DeActive_Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: Colors.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  }
});

export default ForgetPassword;

