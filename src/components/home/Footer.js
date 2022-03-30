import React,{memo} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { gBLACK, gGHOSTWHITE, gWHITE } from '../../assets/colors/MyColor';
import {windowWidth} from '../../utils/Dimentions';

const Footer=()=> {
    return (
        <View style={{ backgroundColor: gGHOSTWHITE}}>
        <View style={styles.mContainer}>
          <Image
            style={styles.mImage}
            source={require('../../assets/images/logoSaleNoti.png')}
            resizeMode="contain"
          />
          <Text style={styles.mText}>CÔNG TY TNHH BÁN LẺ ,BÁN BUÔN TUIXACH</Text>
          <Text style={styles.mTextDc}>
            Địa chỉ: Số 158,Xuân Thuỷ,phường Dịch Vọng Hậu, quận Hai Bà
            Trưng,thành Phố Hà Nội
          </Text>
        </View>
      </View>
    )
}

export default memo(Footer);

const styles = StyleSheet.create({
    mContainer:{
        backgroundColor: gWHITE,
        marginVertical: 10,
        marginBottom: windowWidth /2.5-20,
    },
    mImage: {
        width: windowWidth - 20,
        height: 150,
      },
      mText: {
        textAlign: 'center',
        marginTop: -5,
        fontSize: 18,
        fontWeight: '700',
        color: gBLACK,
      },
      mTextDc: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
        color: gBLACK,
        fontWeight: '600',
      },
})
