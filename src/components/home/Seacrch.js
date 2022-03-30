import React, {memo} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {HEIGHT_SEARCH} from '../../config/Theme';
import {windowWidth} from '../../utils/Dimentions';
import {gBLACK, gSNOW2, gWHITE} from '../../assets/colors/MyColor';
import {useNavigation} from '@react-navigation/native';

const Seacrch = () => {
  const navigation = useNavigation();

  function headerClick() {
    navigation.navigate('SearchScreen');
  }
  return (
    <View style={styles.mContainer}>
      <View style={styles.mViewSearch} onPress={headerClick}>
        <View style={styles.mViewImg}>
          <Image
            source={require('../../assets/images/log-adidas.png')}
            resizeMode="contain"
            style={styles.mStyleImg}
          />
        </View>
        <TouchableOpacity onPress={headerClick} style={styles.mContainerInPut}>
          <View style={styles.mStyleContainerText}>
            <Text
              style={styles.mStyleText}
              onPress={headerClick}>
              Nhập tên tìm kiếm...
            </Text>
          </View>
          <Icon
            style={styles.mStyleSearch}
            name="search"
            size={24}
            color={gBLACK}
            onPress={headerClick}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default memo(Seacrch);

const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
  },
  mViewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    height: HEIGHT_SEARCH,
  },
  mViewImg: {
    marginHorizontal: 10,
  },
  mStyleImg: {
    width: 48,
    height: 48,
  },
  mContainerInPut: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEIGHT_SEARCH - 15,
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  mStyleContainerText: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  mStyleText: {
    color: gBLACK,
    fontWeight: '300',
  },
  mStyleSearch: {
    position: 'absolute',
    right: 10,
  },
  // mStyleMic: {
  //   marginHorizontal: 10,
  // },
});
