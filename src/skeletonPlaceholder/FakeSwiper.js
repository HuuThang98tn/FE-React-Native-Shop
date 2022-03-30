import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowWidth} from '../utils/Dimentions';

const FakeSwiper = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.mSkeletonPlaceholder}></View>
    </SkeletonPlaceholder>
  );
};

export default memo(FakeSwiper);

const styles = StyleSheet.create({
  mSkeletonPlaceholder: {
    marginVertical: 5,
    marginHorizontal: 10,
    width: windowWidth - 20,
    height: windowWidth / 1.5 - 48,
    borderRadius: 10,
  },
});
