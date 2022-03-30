import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const SeacrchCart = ({onPress}) => {
    return (
        <View style={styles.mContainer}>
          <Icon
            style={styles.mIconSearch}
            name="search1"
            size={24}
            color="#000"
            onPress={onPress}
          />
        </View>
      );
}

export default SeacrchCart

const styles = StyleSheet.create({
    mContainer: {
      marginHorizontal: 5,
      height: 48,
      justifyContent: 'center',
    },
    mIconSearch: {},
  });
  
