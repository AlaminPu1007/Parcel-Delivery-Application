import React,{useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const MoreScreen = () => {
  const {signOutUser} = useContext(AuthContext);
  
  return (
    <View>
      <Text>Logout a User</Text>
      <Button title="Log Out" onPress={()=>{signOutUser()}} />
    </View>
  );
};

export default MoreScreen;
