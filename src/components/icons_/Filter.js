import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {gWHITE} from '../../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../../utils/Dimentions';

const Filter = ({onPress}) => {
  return (
    <View style={styles.mContainer}>
      <Icon
        style={styles.mIconFilter}
        name="list"
        size={24}
        color="#000"
        onPress={onPress}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  mContainer: {
    marginHorizontal: 5,
    height: 42,
    justifyContent: 'center',
  },
  mIconFilter: {},
});
