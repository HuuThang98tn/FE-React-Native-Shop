import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {gWHITE} from '../../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../../utils/Dimentions';

const ThreeDots = ({onPress}) => {
  return (
    <View style={styles.mContainer}>
      <Icon
        style={styles.mIconDots}
        name="dots-horizontal-circle-outline"
        size={24}
        color="#000"
        onPress={onPress}
      />
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({
  mContainer: {
    marginRight: 10,
    height: 42,
    justifyContent: 'center',
  },
  mIconDots: {},
});
