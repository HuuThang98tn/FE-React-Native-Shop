import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gBLACK} from '../../assets/colors/MyColor';

const Trademark = () => {
  return (
    <View style={styles.mContainer}>
      <Text style={styles.styleTex}>
        FASHION
        <Text style={styles.mVN}>.vn</Text>
      </Text>
    </View>
  );
};

export default Trademark;

const styles = StyleSheet.create({
  mContainer: {
    justifyContent: 'center',
  },
  styleTex: {
    fontSize: 32,
    fontWeight: '600',
    color: gBLACK,
  },
  mVN: {
    fontSize: 16,
    color: gBLACK,
    fontWeight: '500',
  },
});
