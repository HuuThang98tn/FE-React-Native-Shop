import React, {memo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {FAKEDATA} from '../config/FakeData';
import {gWHITE, gGHOSTWHITE} from '../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../utils/Dimentions';
import {HEIGHT_SCROLLVIEW} from '../config/Theme';

const FakeProduct = () => {
  // console.log(FAKEDATA)
  const renderItem = ({item}) => {
    return (
      <SkeletonPlaceholder>
        <View style={styles.mContainer_}>
          <View style={styles.mContainerImg_}></View>
          <View style={styles.mContainerTitle_}></View>
        </View>
      </SkeletonPlaceholder>
    );
  };
  return (
    <View style={styles.mContainer}>
      <FlatList //
        style={{paddingTop: 0}}
        data={FAKEDATA}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};
export default memo(FakeProduct);
const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
  },

  //renderItem
  mContainer_: {
    width: windowWidth / 2 - 20,
    height: windowWidth / 1.5 + 30,
    marginHorizontal: 10,
  },
  mContainerImg_: {
    width: windowWidth / 2 - 20,
    height: windowWidth / 1.5,
  },
  mContainerTitle_: {
    width: windowWidth / 2 - 20,
    height: 16,
    // backgroundColor: 'red',
    marginVertical: 5,
  },
});
