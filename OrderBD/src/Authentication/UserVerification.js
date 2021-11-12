import React, {useState, useEffect, useRef} from 'react';
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

const UserVerification = ({navigation}) => {
  //Define State
  const [firstTextInput, setFirstTextInput] = useState('');
  const [secondTextInput, setSecondTextInput] = useState('');
  const [thirdTextInput, setThirdTextInput] = useState('');
  const [fourTextInput, setFourTextInput] = useState('');
  const [FiveTextInput, setFiveTextInput] = useState('');
  const [sixTextInput, setSixTextInput] = useState('');
  /// TextInput Fill
  const [firstTextInputFill, setFirstTextInputFill] = useState('');
  const [secondTextInputFill, setSecondTextInputFill] = useState('');
  const [thirdTextInputFill, setThirdTextInputFill] = useState('');
  const [fourTextInputFill, setFourTextInputFill] = useState('');
  const [FiveTextInputFill, setFiveTextInputFill] = useState('');
  const [sixTextInputFill, setSixTextInputFill] = useState('');
  //set time second
  const [Second, setSecond] = useState('');
  //Define State

  //useEffect function
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      navigation.addListener('blur', () => {
        ClearTextInput();
      });
      // after 60 second need to initial value 
      Second === 60 ? setSecond(null) : setSecond(Second);
    }
    return () => {
      unmounted = true;
    };
  }, [Second]);

  /* Clear TextInput Field */
  const ClearTextInput = () => {
    return (
      setFirstTextInput(''),
      setSecondTextInput(''),
      setThirdTextInput(''),
      setFourTextInput(''),
      setFiveTextInput(''),
      setSixTextInput(''),
      setFirstTextInputFill(''),
      setSecondTextInputFill(''),
      setThirdTextInputFill(''),
      setFourTextInputFill(''),
      setFiveTextInputFill(''),
      setSixTextInputFill(''),
      setSecond('')
    );
  };
  /* Clear TextInput Field */

  //On Press Function
  const FocusSecondTextInput = () => {
    firstTextInput1.focus();
  };

  const FocusThirdTextInput = () => {
    secondtextInput.focus();
  };

  const FocusFourthTextInput = () => {
    thirdtextInput.focus();
  };

  const FocusFiveTextInput = () => {
    fourtextInput.focus();
  };

  const FocusSixTextInput = () => {
    fivetextInput.focus();
  };

  const ResendFunction = async() => {
    var timesRun = 0;
    const interval = setInterval(async function () {
      timesRun += 1;
      if (timesRun === 60) {
         clearInterval(interval);
      }
      //do whatever here..
       setSecond(timesRun);
    }, 1000);
  };

  //On Press Function
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Verification" Value={1} />
      </View>
      {/* Header Area */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            <Text style={styles.PhoneTextStyle}>
              Enter the code sent to +8801986221266
            </Text>
            {/* TextInput View */}
            <View style={styles.TextInputView}>
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  maxLength={1}
                  value={firstTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setFirstTextInputFill(false);
                    } else {
                      setFirstTextInputFill(true), FocusSecondTextInput();
                    }
                    setFirstTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={true}
                  onSubmitEditing={FocusSecondTextInput}
                  returnKeyType="next"
                />
              </View>
              {/* First Text Input  */}
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  maxLength={1}
                  value={secondTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setSecondTextInputFill(false);
                    } else {
                      setSecondTextInputFill(true), FocusThirdTextInput();
                    }
                    setSecondTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={false}
                  ref={input => {
                    firstTextInput1 = input;
                  }}
                  onSubmitEditing={FocusThirdTextInput}
                  blurOnSubmit={false}
                  returnKeyType="next"
                />
              </View>
              {/* First Text Input  */}
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  maxLength={1}
                  value={thirdTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setThirdTextInputFill(false);
                    } else {
                      setThirdTextInputFill(true), FocusFourthTextInput();
                    }
                    setThirdTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={false}
                  ref={input => {
                    secondtextInput = input;
                  }}
                  onSubmitEditing={FocusFourthTextInput}
                  blurOnSubmit={false}
                  returnKeyType="next"
                />
              </View>
              {/* First Text Input  */}
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  axLength={1}
                  value={fourTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setFourTextInputFill(false);
                    } else {
                      setFourTextInputFill(true), FocusFiveTextInput();
                    }
                    setFourTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={false}
                  ref={input => {
                    thirdtextInput = input;
                  }}
                  onSubmitEditing={FocusFiveTextInput}
                  blurOnSubmit={false}
                  returnKeyType="next"
                />
              </View>
              {/* First Text Input  */}
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  maxLength={1}
                  value={FiveTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setFiveTextInputFill(false);
                    } else {
                      setFiveTextInputFill(true), FocusSixTextInput();
                    }
                    setFiveTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={false}
                  ref={input => {
                    fourtextInput = input;
                  }}
                  onSubmitEditing={FocusSixTextInput}
                  blurOnSubmit={false}
                  returnKeyType="next"
                />
              </View>
              {/* First Text Input  */}
              {/* First Text Input  */}
              <View regular style={styles.TextInputStyle}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.inputStyle}
                  maxLength={1}
                  value={sixTextInput}
                  onChangeText={text => {
                    if (text.length == 0) {
                      setSixTextInputFill(false);
                    } else {
                      setSixTextInputFill(true);
                    }
                    setSixTextInput(text);
                  }}
                  autoCorrect={false}
                  autoFocus={false}
                  ref={input => {
                    fivetextInput = input;
                  }}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
              </View>
              {/* First Text Input  */}
            </View>
            {/* TextInput View */}
            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              {firstTextInputFill &&
              secondTextInputFill &&
              thirdTextInputFill &&
              fourTextInputFill &&
              FiveTextInputFill &&
              sixTextInputFill ? (
                <TouchableOpacity
                  style={styles.LoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Submit</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  style={styles.DeActiveLoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Submit</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Login Button View */}
            {/* Dont Receive code View */}
            <View style={styles.RegisterUserView}>
              {Second ? (
                <View
                  style={styles.LinkButtonStyle}>
                  <Text style={styles.ForgetPasswordText}>
                   Code sent. Resend code in 00.{Second}
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={ResendFunction}
                  style={styles.LinkButtonStyle}>
                  <Text style={styles.ForgetPasswordText}>
                    Don't receive code?
                  </Text>
                  <Text style={styles.LinkTextStyle}> Resend code</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Dont Receive code View */}
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
    width: '85%',
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

  PhoneTextStyle: {
    fontSize: ResponsiveFontSize(15),
    color: Colors.Mobile_TextInput_Text,
    paddingVertical: heightToDp(3),
  },

  DeActiveLoginButton: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.DeActive_Login_Button_Color,
    paddingVertical: heightToDp(1.5),
    borderColor: Colors.StatusBar_Background,
    borderRadius: ResponsiveFontSize(8),
  },
  RegisterUserView: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: heightToDp(2),
  },
  LinkButtonStyle: {
    flexDirection: 'row',
  },
  ForgetPasswordText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Login_Header_Title,
  },
  LinkTextStyle: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Login_Header_Title,
    fontWeight: '700',
  },
  TextInputStyle: {
    width: ResponsiveFontSize(40),
    height: ResponsiveFontSize(40),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ResponsiveFontSize(5),
    borderColor: Colors.Location_Arrow_Icon,
  },
  inputStyle: {
    textAlign: 'center',
    borderBottomColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 0,
  },

  TextInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UserVerification;
