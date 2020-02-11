import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Counter from './Counter';

const CounterList = ({
  counters,
  incrementCount,
  decrementCount,
  resetCount,
  removeCounter,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={counter => `${counter.id}`}
        data={counters}
        renderItem={({item, index}) => (
          <>
            <Counter
              {...item}
              onIncrement={incrementCount}
              onDecrement={decrementCount}
              onReset={resetCount}
              onRemove={removeCounter}
            />
            {index < counters.length - 1 && <View style={styles.divider} />}
          </>
        )}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={[styles.title, {fontWeight: 'bold'}]}>
              카운터가 존재하지 않습니다.
            </Text>
            <Text style={styles.title}>
              우측 상단의 ➕ 버튼으로 카운터를 추가해보세요 !
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceeef',
    padding: 8,
  },
  title: {
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
  },
});

export default CounterList;
