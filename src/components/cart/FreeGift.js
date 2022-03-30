import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {gBLACK, gSNOW2, gWHITE} from '../../assets/colors/MyColor';

const FreeGift = ({onPress}) => {
  return (
    <View style={styles.mContainer}>
      <View style={styles.mViewText}>
        <View style={{marginHorizontal: 5}}>
          <Text
            style={{
              fontSize: 18,
              color: gBLACK,
              fontWeight: '600',
              marginTop: 10,
            }}>
            Tặng Quà
          </Text>
          <Text style={{fontSize: 12, color: gBLACK, marginVertical: 10}}>
            Mua thêm 450.000đ để nhận một món quà MIỄN Phí
          </Text>
        </View>

        <View style={styles.mViewIcon}>
          <Icon
            style={styles.mIconSearch}
            name="right"
            size={14}
            color="#000"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default FreeGift;

const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  mViewText: {
    flexDirection: 'row',
  },
  mViewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 68,
  },
});
