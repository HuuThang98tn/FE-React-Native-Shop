import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Seacrch from '../components/home/Seacrch';
import Swipers from '../components/home/Swipers';
import Category from '../components/home/Category';
import Sale from '../components/home/Sale';
import BuyMost from '../components/home/BuyMost';
import FakeProduct from '../skeletonPlaceholder/FakeProduct';
import Footer from '../components/home/Footer';
import ShowGoTop from '../components/home/ShowGoTop';

import {CONTENT_OFFSET_THRESHOLD} from '../config/Theme';
import {URL_PRODUCT} from '../api/Api';
import {gBLACK, gGHOSTWHITE, gRED, gSNOW2, gWHITE} from '../assets/colors/MyColor';
import {windowWidth} from '../utils/Dimentions';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showGoTop, setShowGoTop] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    getListProduct();
  }, []);

  const getListProduct = () => {
    fetch(URL_PRODUCT)
      .then(res => res.json())
      .then(resJSON => {
        setData(resJSON);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mContainer_}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailsProduct', {item});
          }}>
          <View style={styles.mContainerImg_}>
            <Image
              source={{uri: item.imageProduct}}
              resizeMode="cover"
              style={styles.mStyleImg}
            />
          </View>
          <View mContainerTitle_style={styles.mContainerTitle_}>
            <Text style={styles.mStyleText}>{item.titleProduct}</Text>
            <Text style={styles.mStyleText__}>{item.priceProduct}đ</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ListHeaderComponent = useCallback(() => {
    return (
      <View style={styles.mContainerHeader}>
        <View style={styles.mSwiper}>
          <Swipers />
        </View>
        <View style={styles.mCategory}>
          <Category navigation={navigation} />
        </View>
        <View style={styles.mSale}>
          <Sale navigation={navigation} />
        </View>
        <View style={styles.mBuyMost}>
          <BuyMost navigation={navigation} />
        </View>
        <View>
          <View style={styles.mContainerTitle}>
            <Text style={styles.mStyleText_}>Hàng mới</Text>
            <View style={styles.mStyleText_}>
              <Text style={styles.mTextXemThem}>Xem thêm...</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }, []);

  const ListFooterComponent = useCallback(() => {
    return (
      <View>
        <Footer />
      </View>
    );
  }, []);

  return (
    <View style={styles.mContainer}>
      <View style={styles.mSeacrch}>
        <Seacrch />
      </View>

      {/* <View>
        {isLoading ? (
          <FakeProduct />
        ) : ( */}
          <FlatList
            ref={listRef}
            data={data}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => `${item._id}`}
            initialNumToRender={10}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
            onScroll={event => {
              setShowGoTop(event.nativeEvent.contentOffset.y);
              console.log(event.nativeEvent.contentOffset.y);
            }}
          />
        {/* )} */}
      {/* </View> */}
      {showGoTop > CONTENT_OFFSET_THRESHOLD && (
        <ShowGoTop
          onPress={() => {
            listRef.current.scrollToOffset({offset: 0, animated: true});
          }}
        />
      )}
    </View>
  );
};
export default memo(HomeScreen);

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: gSNOW2,
  },
  mSeacrch: {},
  mSwiper: {},
  mCategory: {},
  mSale: {},
  mBuyMost: {},

  //renderItem
  mContainer_: {
    width: windowWidth / 2 - 20,
    marginHorizontal: 10,
  },
  mContainerImg_: {
    width: windowWidth / 2 - 20,
   height: windowWidth / 1.5,
    backgroundColor: gGHOSTWHITE,
  },
  mStyleImg: {
    width: windowWidth / 2 -20,
    height: windowWidth / 1.5,
  },
  mContainerTitle_: {
    marginVertical: 5,
  },
  mStyleText: {
    fontSize: 12,
    color : gBLACK,
    marginTop : 5
  },
  mStyleText__: {
    color: gRED,
    marginVertical: 5,
  },

  //mContainerHeader
  mContainerHeader: {},
  mContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ' red',
  },
  mStyleText_: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: '700',
    fontSize: 16,
    color: gBLACK,
  },
  mTextXemThem: {
    color: gBLACK,
    fontWeight: '700',
  },
});
