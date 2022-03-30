import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gSNOW2, gWHITE} from '../assets/colors/MyColor';
import LeftTypeProduct from '../components/product/LeftTypeProduct';
import RightListProduct from '../components/product/RightListProduct';
import { windowWidth } from '../utils/Dimentions';

const ProductScreenLeft = ({item}) => {
  const [data, setData] = React.useState([{title: '61cf13e571cccb5e95d0ea31'}]);

  const onClickID = taskName => {
    try {
      const newTask = {title: taskName};
      const newTaskList = [...data, newTask];

      setData(newTaskList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mContainer}>
      <View style={styles.mContainerMenu}>
        <View style={styles.mLeft}>
          <LeftTypeProduct onClickID={onClickID} />
        </View>
        <View style={styles.mRight}>
          <RightListProduct listData={data} />
        </View>
      </View>
    </View>
  );
};

export default ProductScreenLeft;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: gWHITE,
  },
  mContainerMenu: {
    flexDirection: 'row',
    paddingBottom : 56
  },
  mLeft: {
    flex: 2,
  },
  mRight: {
    flex: 7.5,
  },
});
