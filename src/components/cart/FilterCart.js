import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FilterCart = ({onPress}) => {
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

export default FilterCart;

const styles = StyleSheet.create({
  mContainer: {
    marginHorizontal: 5,
    height: 48,
    justifyContent: 'center',
  },
  mIconFilter: {},
});
