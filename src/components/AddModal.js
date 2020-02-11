import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddModal = ({addCounter, closeModal}) => {
  const [name, setName] = useState('');
  const [step, setStep] = useState('');

  const handleNumberChange = text => {
    const filteredText = text.replace(/\D/gm, '');

    setStep(filteredText);
  };

  const handleSubmit = () => {
    if (name === '' || step === '') {
      Alert.alert('경고', '입력 항목을 모두 채워 주세요.');
    } else {
      addCounter({name: name, step: Number(step)});
      closeModal();
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text>New Counter</Text>
        <TouchableOpacity onPress={() => closeModal()}>
          <Text>❌</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>Counter Name</Text>
        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          style={styles.input}
        />
      </View>
      <View style={styles.content}>
        <Text>Counter Step (Number only)</Text>
        <TextInput
          onChangeText={number => handleNumberChange(number)}
          value={step}
          style={styles.input}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>생성</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  content: {
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    margin: 16,
    padding: 16,
    backgroundColor: '#000',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
  },
});

export default AddModal;
