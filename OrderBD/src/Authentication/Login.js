import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  StatusBar,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {Context as AuthContext} from '../context/AuthContext';
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

const Login = ({navigation}) => {
  //Bring all Context Function\
  const {
    state: {button_loading, mobileNumberValidation, serverIssue, loading},
    LoginUser,
    ClearRegistrationError,
    AutoMaticSignIn,
  } = useContext(AuthContext);
  //Define State
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [Mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [MobileFill, setMobileFill] = useState('');
  const [PassWordFill, setPassWordFill] = useState('');
  //Define State
  //useEffect function
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      //check initial render user is sign in or not
      AutoMaticSignIn();

      //when user leave a page 
      navigation.addListener('blur', () => {
        ClearTextInput();
        ClearRegistrationError();
      });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  /* If loading is occur show loader */
   if (loading) {
     return (
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size="large" color={Colors.Activity_Color} />
       </View>
     );
   }
  /* If loading is occur show loader */

  /* Clear TextInput Field */
  const ClearTextInput = () => {
    return (
      setMobile(''),
      setPassword(''),
      setPasswordVisible(true),
      setMobileFill(''),
      setPassWordFill('')
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
  //Password TextInput function
  const OnChangePassword = text => {
    if (text.length == 0) {
      setPassWordFill(false);
    } else {
      setPassWordFill(true);
    }
    setPassword(text);
  };
  //password visible or not
  const SecurePasswordFunction = () => {
    setPasswordVisible(!passwordVisible);
  };

  const NavigateRegister = () => {
    navigation.navigate('Registration');
  };

  //Login A user Context Function
  const LoginUserFunction = () => {
    LoginUser({Mobile, password});
  };
  //On Press Function
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Log In" Value={0} />
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
                  mobileNumberValidation ||
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
                    maxLength={11}
                    keyboardType="number-pad"
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
              {/* Name Validation Error */}
              {mobileNumberValidation ? (
                <View style={styles.ErrorView}>
                  <Text style={styles.ErrorText}>{mobileNumberValidation}</Text>
                </View>
              ) : null}
              {/* Name Validation Error */}
            </View>
            {/* Phone Number TextInput Box */}
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your password</Text>
              <View
                style={
                  (PassWordFill !== '' ? !PassWordFill : null)
                    ? [styles.PasswordView, styles.MobileTextInputStyleError]
                    : styles.PasswordView
                }>
                <TextInput
                  placeholder="*******"
                  ref={input => {
                    firstTextInput = input;
                  }}
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  secureTextEntry={passwordVisible}
                  value={password}
                  onChangeText={OnChangePassword}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
                <View style={styles.passwordEyeIcon}>
                  {passwordVisible ? (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={SecurePasswordFunction}>
                      <Feather
                        name="eye-off"
                        size={ResponsiveFontSize(20)}
                        color={Colors.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={SecurePasswordFunction}>
                      <Feather
                        name="eye"
                        size={ResponsiveFontSize(20)}
                        color={Colors.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* password TextInput Box */}

            {/* Forget Password */}
            <View style={styles.ForgetPasswordView}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}>
                <Text
                  style={[styles.ForgetPasswordText, styles.forgetTextBold]}>
                  Forget password ?
                </Text>
              </TouchableOpacity>
            </View>
            {/* Forget Password */}

            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              {MobileFill && PassWordFill && password.length >= 6 ? (
                <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={LoginUserFunction}
                  activeOpacity={0.5}>
                  {button_loading ? (
                    <ActivityIndicator
                      size="small"
                      color={Colors.Activity_Button_Color}
                    />
                  ) : (
                    <Text style={styles.LoginButtonText}>Login</Text>
                  )}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  style={styles.DeActiveLoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Login</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Login Button View */}
            {/* Name Validation Error */}
            {serverIssue ? (
              <View style={styles.ServerIssueView}>
                <Text style={styles.ErrorText}>{serverIssue}</Text>
              </View>
            ) : null}
            {/* Name Validation Error */}
          </View>

          {/* Navigation to Register Page */}
          <View style={styles.RegisterUserView}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={NavigateRegister}
              style={styles.LinkButtonStyle}>
              <Text style={styles.ForgetPasswordText}>
                Have not any account?
              </Text>
              <Text style={styles.LinkTextStyle}> SignUp</Text>
            </TouchableOpacity>
          </View>
          {/* Navigation to Register Page */}
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
    paddingTop: heightToDp(8),
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
  PasswordView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  PasswordTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: Colors.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
    width: '85%',
    marginLeft: ResponsiveFontSize(10),
  },
  passwordEyeIcon: {
    width: '12%',
    alignItems: 'center',
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
  ForgetPasswordView: {
    paddingTop: heightToDp(2),
  },
  ForgetPasswordText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Login_Header_Title,
  },
  forgetTextBold: {
    fontWeight: '700',
  },
  RegisterUserView: {
    width: '90%',
    alignItems: 'center',
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
  },
  LinkButtonStyle: {
    flexDirection: 'row',
  },
  LinkTextStyle: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.Login_Header_Title,
    fontWeight: '700',
  },
  ErrorView: {
    paddingTop: heightToDp(1),
    width: '100%',
    // flexWrap: 'wrap',
    marginLeft: widthToDp(2),
  },
  ServerIssueView: {
    paddingBottom: heightToDp(1),
    width: '100%',
    // flexWrap: 'wrap',
    marginLeft: widthToDp(2),
  },
  ErrorText: {
    fontSize: ResponsiveFontSize(14),
    color: Colors.TextInput_Error_Border,
  },
});

export default Login;
