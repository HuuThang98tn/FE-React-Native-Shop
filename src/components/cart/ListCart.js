import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {gGHOSTWHITE, gWHITE} from '../../assets/colors/MyColor';
import {FAKEDATACART} from '../../config/FakeDataCart';
import {windowWidth} from '../../utils/Dimentions';
import UpDown from './UpDown';
import Line from './Line';

const ListCart = () => {
  // const [quantity, setQuantity] = useState(1);

  // const hanDleChangeText = number => {
  //   setQuantity(number);

  //   // console.log(number);

  //   const arrTotal = FAKEDATACART.map(e => e.price * e.quantity);

  //   const toTal = arrTotal.reduce((a, b) => a + b);

  //   console.log(arrTotal);
  // };

  //Redux

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: windowWidth - 20,
          marginHorizontal: 10,
          backgroundColor: gWHITE,
          marginVertical: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                width: windowWidth / 4,
                height: windowWidth / 3,
                marginVertical: 10,
                marginHorizontal: 10,
              }}
              source={{uri: item.urlImg}}
              resizeMode="cover"
            />
          </View>
          <View styles={{width: windowWidth / 2.5}}>
            <Text
              style={{
                marginVertical: 10,
                width: windowWidth / 1.6,
                fontSize: 12,
              }}>
              {item.title}
            </Text>
            <View>
              <Text style={{marginVertical: 5}}>{item.price}đ</Text>
            </View>
            <View style={{marginLeft: windowWidth / 3, marginTop: 28}}>
              <UpDown />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={FAKEDATACART}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListCart;

const styles = StyleSheet.create({});
