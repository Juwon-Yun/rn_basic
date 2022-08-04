import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.darkStyle}>
      <StatusBar
        barStyle={useColorScheme() === 'dark' ? Colors.dark : Colors.white}
      />
      <View>
        <Text style={styles.highlight}>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

// StyleSheet.create
// options => auto complete, oranize Components style
// 안쓰고 inline 해도됨 not required
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
