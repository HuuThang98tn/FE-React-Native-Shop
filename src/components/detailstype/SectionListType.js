import React, {useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {windowWidth} from '../../utils/Dimentions';
import {DATASECTION} from '../../config/DataSectionList';
import {gBLACK, gGHOSTWHITE, gWHITE} from '../../assets/colors/MyColor';
import FilterClassify from './FilterClassify';
import FilterSize from './FilterSize';
import FilterStyle from './FilterStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const SectionListType = () => {
  const [isSelectedClassify, setisSelectedClassify] = useState(false);
  const [isSelectedSize, setIsSelectedSize] = useState(false);
  const [isSelectedStyle, setIsSelectedStyle] = useState(false);

  const onClickClassify = () => {
    console.log('ok');
  };
  const onClickSize = () => {
    console.log('ok');
  };

  const onClickSize_ = () => {
    setIsSelectedSize(false);
  };

  const onClickStyle = () => {
    console.log('ok');
  };

  const onClickStyle_ = () => {
    setIsSelectedStyle(false);
  };

  const OnClickSectionList = () => {
    return (
      <View style={styles.mFilter}>
        <TouchableOpacity
          onPress={() => {
            setisSelectedClassify(!isSelectedClassify);
            setIsSelectedSize(false);
            setIsSelectedStyle(false);
          }}
          style={styles.mClick}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.mTextFilter}>Phân loại</Text>
            <Icon
              name="down"
              size={14}
              style={{
                marginHorizontal: 3,
                justifyContent: 'center',
                marginVertical: 2,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mClick}
          onPress={() => {
            setIsSelectedSize(!isSelectedSize);
            setisSelectedClassify(false);
            setIsSelectedStyle(false);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.mTextFilter}>Kích thước</Text>
            <Icon
              name="down"
              size={14}
              style={{
                marginHorizontal: 3,
                justifyContent: 'center',
                marginVertical: 2,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mClick}
          onPress={() => {
            setIsSelectedStyle(!isSelectedStyle);
            setisSelectedClassify(false);
            setIsSelectedSize(false);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.mTextFilter}>Kiểu dáng</Text>
            <Icon
              name="down"
              size={14}
              style={{
                marginHorizontal: 3,
                justifyContent: 'center',
                marginVertical: 2,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mClick_}>
          <Text style={styles.mTextFilter_}>Sàng lọc</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mContainer}>
      <OnClickSectionList />
      <View
        style={{
          marginTop: 10,
          opacity: 0.8,
          borderBottomWidth: 0.5,
        }}></View>
      {isSelectedClassify && (
        <FilterClassify onPress={() => onClickClassify()} />
      )}
      {isSelectedSize && (
        <FilterSize
          onPress_={() => {
            onClickSize_();
          }}
          onPress={() => {
            onClickSize();
          }}
        />
      )}
      {isSelectedStyle && (
        <FilterStyle
          onPress_={() => {
            onClickStyle_();
          }}
          onPress={() => {
            onClickStyle();
          }}
        />
      )}
    </View>
  );
};

export default SectionListType;

const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
    zIndex: 1000,
  },
  mFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: 32,
  },
  mClick: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  mClick_: {
    borderLeftWidth: 0.5,
    marginRight: 10,
    justifyContent: 'center',
  },
  mTextFilter: {
    fontSize: 14,
    color: gBLACK,
    fontWeight: '500',
    justifyContent: 'center',
  },
  mTextFilter_: {
    marginLeft: 3,
    fontSize: 14,
    color: gBLACK,
    fontWeight: '500',
    justifyContent: 'center',
  },
});
