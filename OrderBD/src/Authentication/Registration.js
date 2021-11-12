import React, {useState, useEffect, useRef, useContext} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
//import auth context
import {Context as AuthContext} from '../context/AuthContext';
//import Header Screen
import Header from './Header/HeaderTitle';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
//Define All colors into one variable
const Colors = colorFunction();

const Registration = ({navigation}) => {
  //Bring all Context Function\
  const {
    state: {
      button_loading,
      nameValidation,
      mobileNumberValidation,
      serverIssue,
    },
    RegisterUser,
    ClearRegistrationError,
  } = useContext(AuthContext);

  //Define State
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [Mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [MobileFill, setMobileFill] = useState('');
  const [PassWordFill, setPassWordFill] = useState('');
  const [NameFill, setNamedFill] = useState('');
  //drop down menu
  const [visible, setVisible] = useState(false);
  const [registrationType, setUserType] = useState(0);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  //Define State

  //useEffect function
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      navigation.addListener('blur', () => {
        ClearTextInput();
        ClearRegistrationError();
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
      setPassword(''),
      setPasswordVisible(true),
      setMobileFill(''),
      setPassWordFill(''),
      setName(''),
      setNamedFill(''),
      setVisible(false),
      setUserType(0)
    );
  };
  /* Clear TextInput Field */

  //On Press Function
  //Name TextInput function
  const OnChangeName = text => {
    if (text.length == 0) {
      setNamedFill(false);
    } else {
      setNamedFill(true);
    }
    setName(text);
  };
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

  const NavigateLogin = () => {
    navigation.navigate('Login');
  };

  //Register A user Context Function
  const RegisterUserFunction = () => {
    RegisterUser({name, Mobile, password, registrationType});
  };
  //On Press Function
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar backgroundColor={Colors.StatusBar_Background} />
      {/* Header Area */}
      <View style={styles.HeaderView}>
        <Header navigation={navigation} title="Sign Up" Value={0} />
      </View>
      {/* Header Area */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View style={styles.BodyViewStyle}>
          {/* Login View */}
          <View style={styles.LoginView}>
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>Enter your name</Text>
              <View
                style={
                  nameValidation || (NameFill !== '' ? !NameFill : null)
                    ? [styles.NameView, styles.MobileTextInputStyleError]
                    : styles.NameView
                }>
                <TextInput
                  placeholder="Your name"
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  value={name}
                  onChangeText={OnChangeName}
                  autoCorrect={false}
                  autoFocus={true}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    firstTextInput.focus();
                  }}
                  returnKeyType="next"
                />
              </View>
              {/* Name Validation Error */}
              {nameValidation ? (
                <View style={styles.ErrorView}>
                  <Text style={styles.ErrorText}>{nameValidation}</Text>
                </View>
              ) : null}
              {/* Name Validation Error */}
            </View>
            {/* password TextInput Box */}
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
                    ref={input => {
                      firstTextInput = input;
                    }}
                    style={styles.MobileTextInputStyle}
                    placeholder="1XXXXXXXXX"
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => {
                      secondTextInput.focus();
                    }}
                    value={Mobile}
                    maxLength={11}
                    keyboardType="number-pad"
                    onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    blurOnSubmit={false}
                    returnKeyType="next"
                  />
                </View>
                {/* TextInput */}
              </View>
              {/* Name Validation Error */}
              {mobileNumberValidation ? (
                <View style={styles.ErrorView}>
                  <Text style={styles.ErrorText}>{mobileNumberValidation}</Text>
                </View>
              ) : null}
              {/* Name Validation Error */}
              {/* Mobile Number */}
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
                  underlineColorAndroid="transparent"
                  style={styles.PasswordTextInputStyle}
                  secureTextEntry={passwordVisible}
                  value={password}
                  ref={input => {
                    secondTextInput = input;
                  }}
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
            {/* password TextInput Box */}
            <View>
              <Text style={styles.PhoneTextStyle}>User type</Text>
              <View style={styles.UserTypeView}>
                <View>
                  <Menu
                    visible={visible}
                    anchor={
                      <Text onPress={showMenu} style={styles.UserTypeText}>
                        {registrationType == 0
                          ? 'General user'
                          : 'Merchant user'}
                      </Text>
                    }
                    onRequestClose={hideMenu}>
                    <MenuItem
                      onPress={() => {
                        setUserType(0), hideMenu();
                      }}>
                      General user
                    </MenuItem>
                    <MenuItem
                      onPress={() => {
                        setUserType(1), hideMenu();
                      }}>
                      Merchant user
                    </MenuItem>
                  </Menu>
                </View>

                <View>
                  {visible ? (
                    <TouchableOpacity
                      onPress={showMenu}
                      style={styles.MaterialMenuIcon}>
                      <AntDesign
                        name="up"
                        size={ResponsiveFontSize(20)}
                        color={Colors.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={showMenu}
                      style={styles.MaterialMenuIcon}>
                      <AntDesign
                        name="down"
                        size={ResponsiveFontSize(20)}
                        color={Colors.Location_Arrow_Icon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
            {/* password TextInput Box */}
            {/* Login Button View */}
            <View style={styles.LoginButtonView}>
              {MobileFill &&
              PassWordFill &&
              password.length >= 6 &&
              NameFill ? (
                <TouchableOpacity
                  onPress={RegisterUserFunction}
                  style={styles.LoginButton}
                  activeOpacity={0.5}>
                  {button_loading ? (
                    <ActivityIndicator
                      size="small"
                      color={Colors.Activity_Button_Color}
                    />
                  ) : (
                    <Text style={styles.LoginButtonText}>Sign Up</Text>
                  )}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  style={styles.DeActiveLoginButton}
                  activeOpacity={0.5}>
                  <Text style={styles.LoginButtonText}>Sign Up</Text>
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
              onPress={NavigateLogin}
              style={styles.LinkButtonStyle}>
              <Text style={styles.ForgetPasswordText}>
                Have not any account?
              </Text>
              <Text style={styles.LinkTextStyle}> Login</Text>
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
    paddingTop: heightToDp(6),
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
  NameView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Mobile_TextInput_Border,
    paddingVertical: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
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
  UserTypeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  UserTypeText: {
    fontSize: ResponsiveFontSize(15),
    fontWeight: '600',
    color: Colors.Login_Header_Title,
  },
  MaterialMenuIcon: {
    padding: ResponsiveFontSize(5),
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

export default Registration;
