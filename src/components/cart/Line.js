import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gSNOW2, gBLACK} from '../../assets/colors/MyColor';
import {windowWidth} from '../../utils/Dimentions';

const Line = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          borderWidth: 0.3,
          width: windowWidth / 2 - 25,
          marginLeft: 10,
          backgroundColor: gSNOW2,
        }}></View>
      <View
        style={[
          {
            width: 10,
            height: 10,
            backgroundColor: gBLACK,
            marginHorizontal: 10,
          },
          {transform: [{rotate: '45deg'}]},
        ]}></View>
      <View
        style={{
          borderWidth: 0.3,
          width: windowWidth / 2 - 25,
          position: 'absolute',
          right: 10,
        }}></View>
    </View>
  );
};

export default memo(Line);
