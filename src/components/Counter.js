import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Counter = ({
  id,
  name,
  step,
  current,
  onIncrement,
  onDecrement,
  onReset,
  onRemove,
}) => {
  return (
    <View>
      <View style={[styles.container]}>
        <Text>{name}</Text>
        <Text style={styles.countText}>{current}</Text>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onDecrement(id)}>
          <Text style={styles.buttonText}>-{step}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onIncrement(id)}>
          <Text style={styles.buttonText}>+{step}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => onReset(id)}>
          <Text>🔄 RESET</Text>
        </TouchableOpacity>
        <Text>&nbsp;&nbsp;|&nbsp;&nbsp;</Text>
        <TouchableOpacity onPress={() => onRemove(id)}>
          <Text>🗑 REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    flexDirection: 'row',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Counter;
