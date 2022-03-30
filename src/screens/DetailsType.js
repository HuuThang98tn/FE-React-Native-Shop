import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
  useRef,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  Animated,
  TouchableOpacity,
  ScrollView,
  SectionList,
} from 'react-native';
import {URL_PRODUCT_ID} from '../api/Api';
import FakeProductType from '../skeletonPlaceholder/FakeProductType';
import FlastListProduct from '../components/detailstype/FlastListProduct';
import {windowWidth, windowHeight} from '../utils/Dimentions';
import {gGHOSTWHITE, gRED, gWHITE, gBLACK} from '../assets/colors/MyColor';
import BackIcon from '../components/icons_/BackIcon';
import CartIcon from '../components/icons_/CartIcon';
import SearchIcon from '../components/icons_/SearchIcon';

import Trademark from '../components/detailstype/Trademark';
import SectionListType from '../components/detailstype/SectionListType';

import {ICON_SIZE, SPACING, HEIGHT_SCROLLVIEW} from '../config/Theme';

const DetailsType = ({route, navigation}) => {
  return (
    <View style={styles.mBody}>
      <View style={styles.mIcons}>
        <BackIcon onPress={() => navigation.goBack()} />
        <Trademark />
        <View style={{position: 'absolute', right: 30}}>
          <SearchIcon />
        </View>
        <CartIcon
          onPress={() => {
            console.log('cart');
          }}
        />
      </View>
      <SectionListType />
      <View style={styles.mFlastList}>
        <FlastListProduct route={route} />
      </View>
    </View>
  );
};

export default DetailsType;

const styles = StyleSheet.create({
  mBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    backgroundColor: gWHITE,
  },
  mFlastList: {
    position: 'absolute',
    top: windowWidth / 4,
    bottom: -10,
  },
});
