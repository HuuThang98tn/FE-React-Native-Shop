import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {gGHOSTWHITE, gBLACK} from '../../assets/colors/MyColor';
import Icon from 'react-native-vector-icons/AntDesign';

const UpDown = (props) => {
  const [number, setNumber] = useState(1);

  const minus = () => {
    // props.hanDleChangeText(number)
    setNumber(number - 1);
  };
  const plus = () => {
    // props.hanDleChangeText(number);
    setNumber(number + 1);
  };

  // console.log(props.number);

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity style={styles.mBtn} onPress={minus}>
        <Icon name="minus" size={14} color="#000" />
      </TouchableOpacity>
      <View style={styles.mViewText}>
        <Text style={{fontSize: 16, fontWeight: '600', color: gBLACK}}>
          {number}
        </Text>
      </View>
      <TouchableOpacity style={styles.mBtn} onPress={plus}>
        <Icon name="plus" size={14} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default UpDown;

const styles = StyleSheet.create({
  mBtn: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: gGHOSTWHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mViewText: {
    width: 32,
    alignItems: 'center',
    marginHorizontal: 2,
    justifyContent: 'center',
  },
});
