
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './routes/Navigation';

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
