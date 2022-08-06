import React from 'react';
import {ScrollView, View} from 'react-native';

const LayoutScreen = () => {
  // View는 기본이 FlexBox다

  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{width: 200, height: 200, backgroundColor: 'red'}} />
        <View style={{width: 200, height: 200, backgroundColor: 'black'}} />
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}} />
        <View style={{width: 200, height: 200, backgroundColor: 'green'}} />
        <View style={{width: 200, height: 200, backgroundColor: 'white'}} />
      </View>
    </ScrollView>
  );
};

export default LayoutScreen;
