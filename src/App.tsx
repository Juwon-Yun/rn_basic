import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CoreComponents from './pages/core_components';

const App = () => {
  return (
    <SafeAreaView style={styles.darkStyle}>
      <StatusBar
        barStyle={useColorScheme() === 'dark' ? Colors.dark : Colors.white}
      />
      <CoreComponents />
    </SafeAreaView>
  );
};

// StyleSheet.create
// options => auto complete, oranize Components style
// 안쓰고 inline 해도됨 not required
// https://reactnative.dev/ 참고하자
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20,
  },
  darkStyle: {
    backgroundColor: Colors.darker,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
