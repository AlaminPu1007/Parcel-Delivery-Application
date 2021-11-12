import createDataContext from './createDataContext';
import hostApi from '../api/hostApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

//Define Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    //Registration button loading
    case 'Signup__button_loading':
      return {...state, button_loading: action.payload};
    //Name Validation
    case 'Name_Validation':
      return {...state, nameValidation: action.payload};
    //Mobile Number Validation
    case 'Mobile_Number_Validation':
      return {...state, mobileNumberValidation: action.payload};
    //Clear all Registration Error
    case 'Clear_Registration_Error':
      return {
        ...state,
        nameValidation: '',
        mobileNumberValidation: '',
        serverIssue: '',
      };
    // No_communication_With_Server
    case 'No_communication_With_Server':
      return {...state, serverIssue: action.payload};
    //Store a Token
    case 'Store_Token':
      return {...state, token: action.payload};
    //loading initial time
    case 'Loading_Screen':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

// Clear Registration Error
const ClearRegistrationError = dispatch => {
  return () => {
    dispatch({type: 'Clear_Registration_Error'});
  };
};

//Automatic SignIn method
const AutoMaticSignIn = dispatch => {
  return async () => {
    dispatch({type: 'Loading_Screen', payload: true});

    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({type: 'Store_Token', payload: token});
      // RootNavigation.navigate('Home');
    } else {
      RootNavigation.navigate('Login');
    }

    dispatch({type: 'Loading_Screen', payload: false});
  };
};

//SignOut a User
const signOutUser = dispatch => {
  return async () => {
    try {
      dispatch({type: 'Loading_Screen', payload: true});

      await AsyncStorage.removeItem('token');

      dispatch({type: 'Store_Token', payload: null});

      // RootNavigation.navigate('SignIn');

      dispatch({type: 'Loading_Screen', payload: false});
    } catch (err) {
      dispatch({type: 'Loading_Screen', payload: false});
      // console.log(err.message);
    }
  };
};

//Register A user
const RegisterUser = dispatch => {
  return async ({name, Mobile, password, registrationType}) => {
    //declare a variable
    var mobile = 0;
    try {
      //Clear all Registration related every initial step
      dispatch({type: 'Clear_Registration_Error'});
      //regular expression for number only
      let checkNumber = /^\d+$/.test(Mobile);
      //regular expression for letter and space only
      var checkLetter = /^[a-zA-Z\s]*$/.test(name);
      //check first number character
      const checkFirstLetter = Mobile.charAt(0);

      //check mobile number is valid or not
      if (checkNumber && checkLetter && name.length >= 3) {
        //need to check mobile number with 0 or not
        checkFirstLetter === '0' ? (mobile = Mobile) : (mobile = '0' + Mobile);

        if (mobile.length === 11) {
          ///all success work goes here
          dispatch({type: 'Signup__button_loading', payload: true});

          //Clear every error
          dispatch({type: 'Clear_Registration_Error'});

          // console.log({name, mobile, password, registrationType},'\n');

          const response = await hostApi.post('/registration', {
            registrationInfo: {name, mobile, password, registrationType},
          });
          // console.log(response.data, '\n');

          if ((response.data.STATUS == 200)) {
            //store a token
            await AsyncStorage.setItem('token', response.data.DATA.userToken);

            /// store token inside state value
            dispatch({
              type: 'Store_Token',
              payload: response.data.DATA.userToken,
            });

          } else if ((response.data.STATUS == 400)) {
            // console.log(response.data.MESSAGES.mobile);
            //if number is already exist
            // if mobile number is not valid
            dispatch({
              type: 'Mobile_Number_Validation',
              payload: response.data.MESSAGES.mobile,
            });
          }
          dispatch({type: 'Signup__button_loading', payload: false});
        } else {
          // if mobile number is not valid
          dispatch({
            type: 'Mobile_Number_Validation',
            payload: 'This number is not valid',
          });
          dispatch({type: 'Signup__button_loading', payload: false});
        }
      } else {
        /// validation goes here
        if (name.length <= 2) {
          dispatch({
            type: 'Name_Validation',
            payload: 'Name is too short',
          });
        } else if (checkLetter == false) {
          dispatch({
            type: 'Name_Validation',
            payload: 'This name is not valid',
          });
        } else if (checkNumber == false) {
          dispatch({
            type: 'Mobile_Number_Validation',
            payload: 'This number is not valid',
          });
        }

        dispatch({type: 'Signup__button_loading', payload: false});
      }
    } catch (registrationError) {
      if (
        registrationError.message == 'Request failed with status code 404' ||
        registrationError.message == 'Network Error'
      ) {
        dispatch({
          type: 'No_communication_With_Server',
          payload:
            'There was an issue looking up your account. Please try again later.',
        });
      }
      dispatch({type: 'Signup__button_loading', payload: false});

      // console.log(
      //   registrationError.message,
      //   'Auth Context Registration Error\n',
      // );
    }
  };
};

//Login A user
const LoginUser = dispatch => {
  return async ({Mobile, password}) => {
    //declare a variable
    var mobile = 0;
    try {
      //Clear all Registration related every initial step
      dispatch({type: 'Clear_Registration_Error'});
      //regular expression for number only
      let checkNumber = /^\d+$/.test(Mobile);
      //check first number character
      const checkFirstLetter = Mobile.charAt(0);

      //check mobile number is valid or not
      if (checkNumber) {
        //need to check mobile number with 0 or not
        checkFirstLetter === '0' ? (mobile = Mobile) : (mobile = '0' + Mobile);

        if (mobile.length === 11) {
          ///all success work goes here
          dispatch({type: 'Signup__button_loading', payload: true});

          //Clear every error
          dispatch({type: 'Clear_Registration_Error'});

          // console.log({name, mobile, password, registrationType},'\n');

          const response = await hostApi.post('/login', {
            loginInfo: {mobile, password},
          });

          // console.log(response.data, '\n');

          //status 101 is success message
          if (response.data.STATUS == 101) {
            //store a token
            await AsyncStorage.setItem('token', response.data.DATA.userToken);

            /// store token inside state value
            dispatch({
              type: 'Store_Token',
              payload: response.data.DATA.userToken,
            });
          }
          //status 405 if user is not found | registered
          else if (response.data.STATUS == 405) {
            dispatch({
              type: 'No_communication_With_Server',
              payload:
                "The email address or mobile number you entered isn't connected to an account.",
            });
          }
          dispatch({type: 'Signup__button_loading', payload: false});
        } else {
          // if mobile number is not valid
          dispatch({
            type: 'Mobile_Number_Validation',
            payload: 'This number is not valid',
          });
          dispatch({type: 'Signup__button_loading', payload: false});
        }
      } else {
        /// validation goes here
        if (checkNumber == false) {
          dispatch({
            type: 'Mobile_Number_Validation',
            payload: 'This number is not valid',
          });
        }

        dispatch({type: 'Signup__button_loading', payload: false});
      }
    } catch (LoginError) {
      if (
        LoginError.message == 'Request failed with status code 404' ||
        LoginError.message == 'Network Error'
      ) {
        dispatch({
          type: 'No_communication_With_Server',
          payload:
            'There was an issue looking up your account. Please try again later.',
        });
      }
      dispatch({type: 'Signup__button_loading', payload: false});

      // console.log(
      //   LoginError.message,
      //   'Auth Context Registration Error\n',
      // );
    }
  };
};

//export Reducer
export const {Context, Provider} = createDataContext(
  reducer,
  //All function goes here
  {
    //Check user is login or not
    AutoMaticSignIn,
    signOutUser,
    LoginUser,
    RegisterUser,
    //Clear Registration Error
    ClearRegistrationError,
  },
  //Define all state Variable here
  {
    token: null,
    loading: true,
    button_loading: false,
    //registration validation variable
    nameValidation: '',
    mobileNumberValidation: '',
    //registration if is not communicated with server
    serverIssue: '',
  },
);
