import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowWidth} from '../utils/Dimentions';

const FakeSwiperProductRight = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.mSkeletonPlaceholder}></View>
    </SkeletonPlaceholder>
  );
};

export default memo(FakeSwiperProductRight);

const styles = StyleSheet.create({
  mSkeletonPlaceholder: {
    marginVertical: 5,
    marginHorizontal: 10,
    width: windowWidth / 1.4,
    height: windowWidth /3.5,
    borderRadius: 5,
  },
});
