import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SeacrchCart from '../components/cart/SeacrchCart';
import FilterCart from '../components/cart/FilterCart';
import FreeGift from '../components/cart/FreeGift';
import Line from '../components/cart/Line';
import {windowWidth} from '../utils/Dimentions';

import {gWHITE, gBLACK, gSNOW2} from '../assets/colors/MyColor';
import Payment from '../components/cart/Payment';
import ListCart from '../components/cart/ListCart';

export default function CartScreen() {
  return (
    <View style={styles.mContainer}>
      <View style={styles.mHeader}>
        <View style={styles.mText}>
          <Text style={styles.mText_}>Giỏ hàng</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <SeacrchCart />
          <FilterCart />
        </View>
      </View>
      <View style={styles.mGift}>
        <FreeGift />
      </View>
      <View
        style={{
          paddingBottom: windowWidth / 1.5,
        }}>
        <ListCart />
      </View>

      <View
        style={{
          width: windowWidth,
          height: 48,
          backgroundColor: gWHITE,
          position: 'absolute',
          bottom: 0,
          marginBottom: 58,
        }}>
        <Payment />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: gSNOW2,
  },
  mHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: gWHITE,
    marginBottom: 5,
  },
  mText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  mText_: {
    fontSize: 22,
    fontWeight: '600',
    color: gBLACK,
  },
  mGift: {},
});
