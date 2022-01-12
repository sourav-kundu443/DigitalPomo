import React from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import styles from './style';

import {
  NewProjectImage,
  ProjectNameIcon,
  ProjectAddIcon,
  ProjectValueIcon,
  ProjectImageIcon,
  ProjectTimeIcon,
} from '../../assets/images';
import CustomButton from '../../components/CustomButton';

const NewProject = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} screenName='Home' color="#fff" />
      <Image
        source={NewProjectImage}
        resizeMode="contain"
        style={styles.constructionImage}
      />
      <ScrollView style={styles.footer}>
        <Text style={styles.heading}>Create new project</Text>
        <View>
          <View style={styles.formField}>
            <Image source={ProjectNameIcon} style={styles.icon} />
            <TextInput placeholder="Project name" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={ProjectAddIcon} style={styles.icon} />
            <TextInput placeholder="Project address" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={ProjectValueIcon} style={styles.icon} />
            <TextInput placeholder="Project value" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={ProjectImageIcon} style={styles.icon} />
            <TextInput placeholder="Project image" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={ProjectTimeIcon} style={styles.icon} />
            <TextInput
              placeholder="Project start date"
              style={styles.textInput}
            />
          </View>
          <View style={styles.formField}>
            <Image source={ProjectTimeIcon} style={styles.icon} />
            <TextInput
              placeholder="Project end date"
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('HomeDashboard')}>
            <CustomButton
              title="Continue"
              color="#F17400"
              paddingHorizontal={12}
              marginVertical={30}
              paddingVertical={15}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewProject;
