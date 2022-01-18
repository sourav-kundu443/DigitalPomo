import React, {useState, createRef, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import User from '../../assets/images/user.png';
import UserIcon from '../../assets/images/userIcon.png';
import EmailIcon from '../../assets/images/emailIcon.png';
import MobileIcon from '../../assets/images/mobileIcon.png';
import JobIcon from '../../assets/images/jobIcon.png';
import OrganizationIcon from '../../assets/images/buildingIcon.png';
import CountryIcon from '../../assets/images/flagIcon.png';
import CityIcon from '../../assets/images/cityIcon.png';

import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

import {AuthContext} from '../../components/context';

const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNumber, setMobNumber] = useState('');
  const [password, setPassword] = useState('');
  const [job, setJob] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isSignUpSuccess, setSignUpSuccess] = useState(false);

  const emailInputRef = createRef();
  const mobileInputRef = createRef();
  const passwordInputRef = createRef();
  const jobInputRef = createRef();
  const organisationInputRef = createRef();
  const countryInputRef = createRef();
  const cityInputRef = createRef();

  const handleSubmitButton = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header navigation={navigation} screenName="LoginScreen" color="#fff" />
        <Image source={User} resizeMode="cover" style={styles.userImage} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formField}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setUserName(value)}
              autoCapitalize="sentences"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
            />
            <Image source={UserIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setEmail(value)}
              keyboardType="email-address"
              ref={emailInputRef}
              onSubmitEditing={() =>
                mobileInputRef.current && mobileInputRef.current.focus()
              }
            />
            <Image source={EmailIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Mobile No."
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setMobNumber(value)}
              keyboardType="phone-pad"
              ref={mobileInputRef}
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
            />
            <Image source={MobileIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
              ref={passwordInputRef}
              onSubmitEditing={() =>
                jobInputRef.current && jobInputRef.current.focus()
              }
            />
            <Image source={MobileIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Job Title"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setJob(value)}
              autoCapitalize="sentences"
              ref={jobInputRef}
              onSubmitEditing={() =>
                organisationInputRef.current &&
                organisationInputRef.current.focus()
              }
            />
            <Image source={JobIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Organisations"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setOrganisation(value)}
              autoCapitalize="sentences"
              ref={organisationInputRef}
              onSubmitEditing={() =>
                countryInputRef.current && countryInputRef.current.focus()
              }
            />
            <Image source={OrganizationIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Country"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setCountry(value)}
              autoCapitalize="sentences"
              ref={countryInputRef}
              onSubmitEditing={() =>
                cityInputRef.current && cityInputRef.current.focus()
              }
            />
            <Image source={CountryIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="City"
              placeholderTextColor="#191919"
              style={styles.textInput}
              onChangeText={value => setCity(value)}
              autoCapitalize="sentences"
              ref={cityInputRef}
              onSubmitEditing={Keyboard.dismiss}
            />
            <Image source={CityIcon} style={styles.icon} />
          </View>
          {errorText != '' ? (
            <Text style={styles.errorText}>{errorText}</Text>
          ) : null}
          <TouchableOpacity style={styles.btn} onPress={handleSubmitButton}>
            <CustomButton
              title="Continue"
              color="#F17400"
              paddingHorizontal={12}
              marginVertical={30}
              paddingVertical={15}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;
