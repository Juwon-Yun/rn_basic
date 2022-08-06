import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';

const LayoutScreen = () => {
  // View는 기본이 FlexBox다

  return (
    <ScrollView>
      <View
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'black'}} />
        <View style={{flex: 3, backgroundColor: 'blue'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'white'}} />
      </View>
    </ScrollView>
  );
};

export default LayoutScreen;
