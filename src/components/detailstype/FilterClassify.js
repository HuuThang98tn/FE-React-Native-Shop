import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {gWHITE} from '../../assets/colors/MyColor';
import {DATAPL} from '../../config/DataSectionList';
import {windowWidth} from '../../utils/Dimentions';

const FilterClassify = ({onPress}) => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.styleText}>{item}</Text>
          <View style={styles.mBorderBottomWidth}></View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mContainer}>
      <FlatList
        data={DATAPL}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default FilterClassify;

const styles = StyleSheet.create({
  mContainer: {
    opacity: 0.8,
    backgroundColor: gWHITE,
    height: windowWidth / 1.48,
  },
  styleText: {
    fontSize: 14,
    lineHeight: 46,
    marginHorizontal: 10,
  },
  mBorderBottomWidth: {
    borderBottomWidth: 0.6,
    borderColor: '#DCDCDC',
    marginHorizontal: 10,
  },
});
