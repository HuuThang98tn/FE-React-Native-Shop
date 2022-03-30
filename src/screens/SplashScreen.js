import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {gWHITE} from '../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../utils/Dimentions';

export default function SplashScreen() {
  return (
    <View style={styles.mContainer}>
      <Image
        style={styles.mCustomImg}
        resizeMode="contain"
        source={require('../assets/images/splash_.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    width : windowWidth,
    height : windowHeight,
    backgroundColor : gWHITE
  },
  mCustomImg: {
    width: windowWidth,
    height: windowHeight,
   
  },
});
