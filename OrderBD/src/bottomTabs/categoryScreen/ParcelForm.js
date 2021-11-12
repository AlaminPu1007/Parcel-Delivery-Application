import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
  Animated,
  PermissionsAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../../component/Colors';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../../component/Responsive';
import Contacts from 'react-native-contacts';
import moment from 'moment';
import Header from '../../component/BackHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

//Define All colors into one variable
const Colors = colorFunction();

//Define all moment
const ToDay = moment().format('DD');
const Month = moment().format('MM');
const Year = moment().format('YYYY');

const ParcelForm = ({navigation}) => {
  const [date, setDate] = useState(new Date(moment().format('YYYY-MM-DD')));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [listContact, setListContact] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  /*
   {show && (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={'date'}
      is24Hour={false}
      display="default"
      onChange={onChange}
      minimumDate={new Date(Year, parseInt(Month)-1, ToDay)}
    />
  )}
   */

  const requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      // console.log(granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          Contacts.getAll().then(contacts => {
            // contacts returned
            setListContact(contacts[0]);
          });
        } catch (err) {
          console.warn(err);
        }
      } else {
        console.warn('contact permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        // scrollEnabled={outerScrollViewScrollEnabled}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* Parent View */}
        <View style={styles.ViewStyle}>
          {/* Header View */}
          <View style={styles.HeaderView}>
            <Header navigation={navigation} title="Location Details" />
          </View>
          {/* Header View */}
          {/* Pick Up View */}
          <View>
            {/* Pick Up Title */}
            <View style={styles.PickUpView}>
              <View style={styles.OneView}>
                <Text style={styles.OneTextStyle}>1</Text>
              </View>
              <Text style={styles.PickupTextStyle}>Pickup Point</Text>
            </View>
            {/* Pick Up Title */}
            {/* Address Button View */}
            <View style={styles.AddressView}>
              <View style={styles.AddressInsideView}>
                <View style={styles.TextInputView}>
                  <TextInput
                    style={styles.AddressTextInputStyle}
                    placeholder="Address"
                    underlineColorAndroid="transparent"
                    // onSubmitEditing={() => {
                    //   firstTextInput.focus();
                    // }}
                    // value={Mobile}
                    // maxLength={11}
                    // onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    // autoFocus={true}
                    blurOnSubmit={false}
                    // returnKeyType="next"
                  />
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.IconView}>
                  <MaterialIcons
                    name="my-location"
                    size={ResponsiveFontSize(20)}
                    color={Colors.Header_Background}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Address Button View */}
            {/* Address Button View */}
            <View style={styles.AddressView}>
              <View style={styles.AddressInsideView}>
                <View style={styles.TextInputView}>
                  <TextInput
                    style={styles.AddressTextInputStyle}
                    placeholder="Your phone"
                    underlineColorAndroid="transparent"
                    // onSubmitEditing={() => {
                    //   firstTextInput.focus();
                    // }}
                    // value={Mobile}
                    keyboardType="number-pad"
                    maxLength={11}
                    // onChangeText={OnChangeMobile}
                    autoCorrect={false}
                    // autoFocus={true}
                    blurOnSubmit={false}
                    // returnKeyType="next"
                  />
                </View>
                {/* <TouchableOpacity
                  onPress={requestContactPermission}
                  activeOpacity={0.5}
                  style={styles.IconView}>
                  <AntDesign
                    name="contacts"
                    size={ResponsiveFontSize(20)}
                    color={Colors.Header_Background}
                  />
                </TouchableOpacity> */}
              </View>
            </View>
            {/* Address Button View */}
          </View>
          {/* Arrived time */}
          <View style={styles.ArrivedView}>
          <View style={styles.ArrivedInsideView}>
            <View style={styles.ArrivedTextView}>
              <Text style={styles.ArrivedText}>
                when to arrived the address
              </Text>
            </View>

            <View style={styles.ArrivedTimeView}>
              <TouchableOpacity style={styles.ArrivedButton}>
                <Text>Today</Text>
                <AntDesign
                  name="caretdown"
                  size={ResponsiveFontSize(12)}
                  color={Colors.Login_Header_Title}
                />
              </TouchableOpacity>
              <View style={styles.DashView}>
                <Text style={styles.DashText}>-</Text>
              </View>
              <TouchableOpacity style={styles.ArrivedButton}>
                <Text>11.50 AM</Text>
                <AntDesign
                  name="caretdown"
                  size={ResponsiveFontSize(12)}
                  color={Colors.Login_Header_Title}
                />
              </TouchableOpacity>
            </View>
          </View>
          </View>
          {/* Arrived time */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: Colors.Parcel_Background,
  },
  ViewStyle: {
    flex: 1,
    width: '100%',
    paddingBottom: heightToDp(13),
  },
  PickUpView: {
    flexDirection: 'row',
    paddingVertical: heightToDp(3),
    alignItems: 'center',
  },
  OneView: {
    backgroundColor: Colors.Header_Background,
    marginHorizontal: widthToDp(3),
    height: heightToDp(5),
    width: heightToDp(5),
    borderRadius: ResponsiveFontSize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  OneTextStyle: {
    color: Colors.Features_Background,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    textAlign: 'center',
  },
  PickupTextStyle: {
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
  },
  AddressView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.Features_Button_Background,
    paddingVertical: heightToDp(2),
    marginBottom: heightToDp(2),
  },
  AddressInsideView: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInputView: {
    width: '90%',
  },
  AddressTextInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    color: Colors.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
    width: '100%',
  },
  IconView: {
    width: '10%',
    alignItems: 'center',
  },
  ArrivedView: {
    width: '100%',
    marginBottom: heightToDp(2),
    backgroundColor: Colors.Features_Button_Background,
    alignItems: 'center',
    paddingVertical: heightToDp(3),
  },
  ArrivedInsideView: {
    width: '90%',
  },
  ArrivedTimeView: {
    backgroundColor: Colors.Parcel_Background,
    borderWidth: 1,
    borderColor: Colors.Parcel_Form_Text,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: heightToDp(1),
    borderRadius: ResponsiveFontSize(8),
  },
  ArrivedButton: {
    backgroundColor: Colors.Features_Button_Background,
    borderWidth: 1,
    borderColor: Colors.Parcel_Form_Text,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '45%',
    paddingVertical: heightToDp(1.5),
    borderRadius: ResponsiveFontSize(6),
  },
  DashView: {
    width: '10%',
    alignItems: 'center',
  },
  DashText: {
    fontSize: ResponsiveFontSize(30),
    color: Colors.Mobile_TextInput_Text,
  },
  ArrivedTextView: {
    paddingBottom: heightToDp(2),
  },
  ArrivedText: {
    color: Colors.Mobile_TextInput_Text,
    fontSize: ResponsiveFontSize(15),
  },
});

export default ParcelForm;
