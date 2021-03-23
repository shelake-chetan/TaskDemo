/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {View} from 'react-native';
import { MainRouting } from './src/routing/MainRouting';

const App=() =>{
  return (
    <Provider store={store}>
      <MainRouting></MainRouting>
    </Provider>
  );
};



export default App;
