import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DATASTYLE} from '../../config/DataSectionList';
import {gBLACK, gWHITE, gGRAY11} from '../../assets/colors/MyColor';
import {windowWidth} from '../../utils/Dimentions';

const FilterStyle = ({onPress, onPress_}) => {
  return (
    <View style={styles.mContainer}>
      <View style={styles.mStyleView}>
        {DATASTYLE.map(item => {
          return (
            <TouchableOpacity key={item} style={styles.mItem} onPress={onPress}>
              <Text style={styles.mStyleText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{position: 'absolute', right: 10, bottom: 10}}>
        <TouchableOpacity onPress={onPress_} style={styles.mStyleClick}>
          <Text style={styles.mStyleTextH}>Huỷ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterStyle;

const styles = StyleSheet.create({
  mContainer: {
    height: windowWidth / 1.2,
  },
  mStyleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mItem: {
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
    marginHorizontal: 10,
    marginVertical: 10,
    height: windowWidth / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mStyleText: {
    fontSize: 14,
    color: gBLACK,
    padding: 5,
  },
  mStyleClick: {
    borderColor: gGRAY11,
    borderWidth: 1,
    backgroundColor: gGRAY11,
    width: windowWidth / 4,
    height: windowWidth / 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  mStyleTextH: {
    color: gWHITE,
    fontSize: 14,
    fontWeight: '500',
  },
});
