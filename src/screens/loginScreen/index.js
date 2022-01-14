import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EmailIcon} from '../../assets/images';

import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('sourav@gmail.com');
  const [message, setMessage] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onSubmit = async () => {
    const emailValue = await AsyncStorage.getItem('token');
    if (emailValue == email) {
      navigation.navigate('HomeScreen');
      setMessage('');
    } else {
      setMessage('Entered email is not valid.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Header
          screenName="SplashScreen"
          navigation={navigation}
          color="#fff"
        />
        <View style={styles.TtextContainer}>
          <Text style={styles.welcomeText}>Welcome to Demo!</Text>
          <Text style={styles.paraText}>
            Please enter your registered mobile number to login your app
            account.
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.loginForm}>
          <View style={styles.formField}>
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              secureTextEntry={false}
              onChangeText={value => {
                setEmail(value);
              }}
            />
            <Image source={EmailIcon} style={styles.icon} />
          </View>

          <View style={styles.formField}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={secureTextEntry}
              onChangeText={value => {
                setPassword(value);
              }}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                setSecureTextEntry(prev => !prev);
              }}>
              {secureTextEntry ? (
                <Icon name="eye-slash" size={25} style={{color: '#000'}} />
              ) : (
                <Icon name="eye" size={25} style={{color: '#000'}} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('OTPScreen')}>
            <Text style={styles.linkableText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSubmit}>
            <CustomButton
              title="Login"
              color="#F17400"
              paddingHorizontal={12}
              marginVertical={30}
              paddingVertical={15}
            />
          </TouchableOpacity>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        <View style={styles.bottomtext}>
          <Text style={styles.normalText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.linkableText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
