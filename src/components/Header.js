import React, {useState} from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AddCounterContainer from '../containers/AddCounterContainer';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);

  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <AddCounterContainer closeModal={closeModal} />
      </Modal>

      <Text style={styles.text}>Redux multi counter</Text>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.text}>➕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7dbae5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
});

export default Header;
