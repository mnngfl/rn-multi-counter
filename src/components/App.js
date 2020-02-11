/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import CounterContainer from '../containers/CounterContainer';
import Header from './Header';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <CounterContainer />
    </Provider>
  );
};

export default App;
