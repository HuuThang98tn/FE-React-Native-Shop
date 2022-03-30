import React, {memo} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {FAKEDATA} from '../config/FakeData';
import {gWHITE} from '../assets/colors/MyColor';
import {ICON_SIZE, SPACING} from '../config/Theme';

const FakeCategory = () => {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {FAKEDATA.map(item => {
        return (
          <SkeletonPlaceholder key={item}>
            <View style={styles.mContainerData}>
              <View style={styles.mContainerImg}></View>
              <View style={styles.mContainerType}></View>
            </View>
          </SkeletonPlaceholder>
        );
      })}
    </ScrollView>
  );
};
export default memo(FakeCategory);

const styles = StyleSheet.create({
  mContainerData: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mContainerImg: {
    marginVertical: 10,
    width: ICON_SIZE + 20,
    height: ICON_SIZE + 20,
    borderRadius: ICON_SIZE + 20 / 2,
    backgroundColor: gWHITE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 6,
    elevation: 8,
    shadowOffset: {width: 1, height: 1},
  },
  mContainerType: {
    // marginVertical: 10,
    height: 8,
    width: 68,
  },
});
