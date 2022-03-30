import React, {memo} from 'react';
import {TouchableOpacity,StyleSheet, View} from 'react-native';
import {gGREEN_T, gWHITE} from '../../assets/colors/MyColor';
import {SHOW_GO_TOP} from '../../config/Theme';
import Icon from 'react-native-vector-icons/AntDesign';


const ShowGoTop = ({onPress}) => {
  return (
    <View style={styles.mContainer}>
      <TouchableOpacity onPress={onPress} style={styles.mOnClick}>
        <Icon color={gWHITE} size={18} name="arrowup"></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ShowGoTop);

const styles = StyleSheet.create({
  mContainer: {
    position: 'absolute',
    right: 10,
    bottom: 68,
    zIndex: 1,
  },
  mOnClick: {
    borderWidth: 1,
    borderColor: gGREEN_T,
    height: SHOW_GO_TOP,
    width: SHOW_GO_TOP,
    backgroundColor: gGREEN_T,
    borderRadius: SHOW_GO_TOP / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
