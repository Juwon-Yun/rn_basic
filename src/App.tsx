import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

/*
  예전 RN 버전 (~0.30)에서 제공하던 다양한 컴포넌트는 최신버전에서는 지원하지 않는다.
  (AsyncStorage, Navigation Bar, APIs, other Components)

  RN을 성공시키기 위해서 전부다 지원할 필요가 없었기 때문에 이제 지원하지 않는 패키지는 커뮤니티 패키지를 사용한다.

*/

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import ScrollViewComponent from './components/scrollview';
// import CoreComponents from './pages/core_components';
// import Translator from './pages/trans';
import ListViewComponent from './components/listview';

const App = () => {
  const themeData = useColorScheme() === 'light';

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.darkStyle}>
      <StatusBar barStyle={themeData ? 'light-content' : 'light-content'} />
      {/* <CoreComponents /> */}
      {/* <Translator /> */}
      {/* <ScrollViewComponent /> */}
      <ListViewComponent />
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default App;
