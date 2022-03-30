import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {gBLACK, gRED, gWHITE} from '../../assets/colors/MyColor';
import {windowWidth} from '../../utils/Dimentions';

const Payment = () => {
  const [radio, setRadio] = useState(false);

  const clickRadio = () => {
    if (radio == true) {
      setRadio(false);
    } else if (radio == false) {
      setRadio(true);
    }
  };
  

  return (
    <View style={styles.mContainer}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={clickRadio} style={styles.mRadio}>
          {radio ? <View style={styles.mSelected}></View> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={clickRadio}>
          <Text style={styles.mTextAll}>Chọn tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mViewPrice}>
        <Text style={styles.mTextPrice}>9.000.000đ</Text>
      </View>
      <View style={styles.mViewPay}>
        <TouchableOpacity>
          <Text style={styles.mTextPay}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  mContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mRadio: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 1.5,
  },
  mSelected: {
    height: 8,
    width: 8,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  mTextAll: {
    fontSize: 16,
    fontWeight: '600',
    color: gBLACK,
  },
  mViewPrice: {
    position: 'absolute',
    right: windowWidth / 3.5,
  },
  mTextPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: gRED,
    marginHorizontal: 10,
  },
  mViewPay: {
    width: windowWidth / 3.5,
    backgroundColor: gBLACK,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mTextPay: {color: gWHITE, fontSize: 16, fontWeight: '600'},
});
