import React,{memo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {FAKEDATA} from '../config/FakeData';
import {gWHITE, gGHOSTWHITE} from '../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../utils/Dimentions';

const  FakeSale = ()=> {
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
    <View>
      <FlatList
        //
        data={FAKEDATA}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
}

export default memo(FakeSale);

const styles = StyleSheet.create({
  mContainer_: {
    height: windowHeight / 5,
    width: windowWidth / 3,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  mContainerImg_: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderRadius: 6,
    backgroundColor: gGHOSTWHITE,
  },
  mContainerTitle_: {
    width: windowWidth / 3,
    height: 8,
    marginVertical: 10,
  },
});
