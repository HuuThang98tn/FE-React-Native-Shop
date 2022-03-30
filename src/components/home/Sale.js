import React, {useState, useEffect, memo} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {URL_SALE} from '../../api/Api';
import {gBLACK, gGHOSTWHITE} from '../../assets/colors/MyColor';
import {windowHeight, windowWidth} from '../../utils/Dimentions';
import FakeSale from '../../skeletonPlaceholder/FakeSale';

const Sale = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    getSale();

    return () => {
      setData([]);
    };
  }, []);

  const getSale = () => {
    fetch(URL_SALE)
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
              style={styles.mStyleImg_}
              source={{uri: item.imageProduct}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.mContainerTitle_}>
            <Text style={styles.mStyleTitle_}>{item.titleProduct}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mContainer}>
      <View style={styles.mContainerTitle}>
        <Text style={styles.mStyleTitle}>Giảm giá</Text>
      </View>
      <View>
        <View>
          {isLoading ? (
            <FakeSale />
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              keyExtractor={item => `${item._id}`}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(Sale);

const styles = StyleSheet.create({
  mContainer: {},
  mContainerTitle: {
    marginHorizontal: 10,
  },
  mStyleTitle: {
    color: gBLACK,
    fontSize: 18,
    fontWeight: '500',
  },

  //RenderItem
  mContainer_: {
    height: windowHeight / 4,
    width: windowWidth / 3,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  mContainerImg_: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderRadius: 3,
    backgroundColor: gGHOSTWHITE,
  },
  mStyleImg_: {
    width: '100%',
    height: windowWidth / 3,
  },
  mContainerTitle_: {},
  mStyleTitle_: {
    fontSize: 12,
    color: gBLACK,
    fontWeight: '500',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
