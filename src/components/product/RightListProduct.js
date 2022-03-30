import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

import {URL_PRODUCT_ID} from '../../api/Api';
import {gBLACK, gGHOSTWHITE, gRED, gSNOW2, gWHITE} from '../../assets/colors/MyColor';
import {windowWidth} from '../../utils/Dimentions';
import Swipers from './Swipers';

const RightListProduct = props => {
  const lastItem = props.listData[props.listData.length - 1].title;
  const [listProductID, setListProductID] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListProduct();

    return () => {
      setListProductID([]);
    };
  }, [lastItem]);

  const getListProduct = () => {
    fetch(URL_PRODUCT_ID + '/' + lastItem)
      .then(res => res.json())
      .then(resJSON => {
        setListProductID(resJSON);
      })
      .catch(error => {
        console.log(error);
      });
    // .finally(() => setIsLoading(false));
  };

  // function format2(n, currency) {
  //   return n.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
  // }

  // var numbers = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345.67];

  // for (var i = 0; i < numbers.length; i++) {
  //   console.log(format2(numbers[i], 'đ'));
  // }
  

  const renderItem = ({item, index}) => {  

    return (
      <View style={styles.mContainer_}>
        <View style={styles.mStyleImg}>
          <Image
            style={styles.mImg}
            source={{uri: item.imageProduct}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            width: windowWidth / 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: gBLACK, marginTop: 5}}>
            {item.priceProduct}đ
          </Text>
        </View>
      </View>
    );
  };
  const listHeaderComponent = () => {
    return <Swipers />;
  };
  return (
    <View style={styles.mContainer}>
      <FlatList
        data={listProductID}
        keyExtractor={item => `${item._id}`}
        renderItem={renderItem}
        numColumns={3}
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  );
};

export default RightListProduct;

const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
    marginHorizontal: 10,
  },
  mContainer_: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mStyleImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  mImg: {
    width: windowWidth / 4.5,
    height: windowWidth / 3.5,
  },
});
