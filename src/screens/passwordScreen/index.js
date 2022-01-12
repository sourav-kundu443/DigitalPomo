import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';


import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

const NewPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} screenName='OTPScreen' color='#000' />
      <Text style={styles.message}>
        Please enter your new password to continue
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.loginForm}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>New Password</Text>
            <View style={styles.textInputField}>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <View style={styles.textInputField}>
              <TextInput style={styles.textInput} />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <CustomButton
            title="Continue"
            color="#F17400"
            paddingHorizontal={12}
            marginVertical={30}
            paddingVertical={15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPassword;
