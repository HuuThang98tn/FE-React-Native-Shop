import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {gWHITE} from '../../assets/colors/MyColor';
import {windowWidth, windowHeight} from '../../utils/Dimentions';
const BackIcon = ({onPress}) => {
  return (
    <View style={styles.mContainer}>
      <Icon
        style={styles.mIconBack}
        name="arrowleft"
        size={24}
        color="#000"
        onPress={onPress}
      />
    </View>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  mContainer: {
    marginHorizontal: 10,
    height: 48,
    justifyContent: 'center',
  },
  mIconBack: {},
});
