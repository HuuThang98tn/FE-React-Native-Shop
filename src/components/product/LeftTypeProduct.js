import React, {useState, useEffect, memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {URL_CATEGORY_} from '../../api/Api';
import {gSNOW2, gWHITE, gGRAY11, gBLACK} from '../../assets/colors/MyColor';
import { ICON_SIZE } from '../../config/Theme';

const LeftTypeProduct = props => {
  const [dataType, setDataType] = useState([]);
  const [bgColor, setBgColor] = useState('61cf13e571cccb5e95d0ea31');

  //61bb4e685faa9760539626b7

  useEffect(() => {
    getListProduct();

    return () => {
      setDataType([]);
    };
  }, []);

  const getListProduct = () => {
    fetch(URL_CATEGORY_)
      .then(res => res.json())
      .then(resJSON => {
        setDataType(resJSON);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onClickID = () => {
    props.onClickID(bgColor);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mContainer_}>
        <TouchableOpacity
          onPress={onClickID}
          onPressIn={() => {
            setBgColor(item._id);
          }}>
          <View
            style={
              item._id === bgColor ? styles.mViewItemSelected : styles.mViewItem
            }>
            <Image
              style={styles.mStyleImg}
              source={{uri: item.imageTypeProduct}}
            />
            <Text>{item.type}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dataType}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LeftTypeProduct;

const styles = StyleSheet.create({
  mContainer_: {
    backgroundColor: gSNOW2,
  },
  mViewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // borderBottomWidth : .5,
    borderColor : gBLACK
  },

  mViewItemSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: gWHITE,
    borderLeftColor : "#000",
  },

  mStyleImg: {
    width: ICON_SIZE + 18,
    height: ICON_SIZE + 18,
    borderRadius: ICON_SIZE + 18 /2
  },
});
