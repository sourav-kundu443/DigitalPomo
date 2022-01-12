import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';

const Contacts = ({isModalVisible, toggleModal}) => {
  return (
    <View>
        <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Contacts;
