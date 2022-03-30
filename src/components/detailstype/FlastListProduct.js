import React, {useState, useEffect, memo} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {URL_PRODUCT_ID} from '../../api/Api';
import {gBLACK, gGHOSTWHITE, gRED} from '../../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../../utils/Dimentions';
import FakeProductType from '../../skeletonPlaceholder/FakeProductType';

const FlastListProduct = ({route}) => {
  const ID = route.params.item._id;
  const [listProductID, setListProductID] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListProduct();
    return () => {
      setListProductID([]);
    };
  }, []);

  const getListProduct = () => {
    fetch(URL_PRODUCT_ID + '/' + ID)
      .then(res => res.json())
      .then(resJSON => {
        setListProductID(resJSON);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mContainer_}>
        <View style={styles.mContainerImg_}>
          <Image
            source={{uri: item.imageProduct}}
            resizeMode="contain"
            style={styles.mStyleImg}
          />
        </View>
        <View mContainerTitle_style={styles.mContainerTitle_}>
          <Text style={styles.mStyleText}>{item.titleProduct}</Text>
          <Text style={styles.mStyleText__}>{item.priceProduct}đ</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mContainer}>
      <FlatList
        data={listProductID}
        renderItem={renderItem}
        keyExtractor={item => `${item._id}`}
        initialNumToRender={10}
        numColumns={2}
      />
    </View>
  );
};

export default memo(FlastListProduct);

const styles = StyleSheet.create({
  mContainer: {
    marginVertical: 10,
  },
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
    width: windowWidth / 2.2,
    height: windowWidth / 1.5,
  },
  mContainerTitle_: {
    marginVertical: 5,
  },
  mStyleText: {
    fontSize: 12,
  },
  mStyleText__: {
    color: gRED,
    marginVertical: 5,
  },
});
