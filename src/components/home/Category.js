import React, {useState, useEffect, memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {URL_CATEGORY} from '../../api/Api';
import {gBLACK, gWHITE} from '../../assets/colors/MyColor';
import {SPACING, ICON_SIZE} from '../../config/Theme';
import FakeCategory from '../../skeletonPlaceholder/FakeCategory';

const Category = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategory();

    return () => {
      setData([]);
    };
  }, []);

  const getCategory = () => {
    fetch(URL_CATEGORY)
      .then(res => res.json())
      .then(resJSON => {
        setData(resJSON);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  console.log('re-render Category');
  return (
    <View style={styles.mContainer}>
      <View style={styles.mContainerTitle}>
        <Text style={styles.mStyleTitle}>Danh mục</Text>
      </View>
      {isLoading ? (
        <FakeCategory />
      ) : (
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          >
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailsType', {item, data});
                }}
                key={item._id}>
                <View style={styles.mContainerData}>
                  <View style={styles.mContainerImg}>
                    <Image
                      source={{uri: item.imageTypeProduct}}
                      style={[styles.mStyleImg]}
                    />
                  </View>
                  <View style={styles.mContainerType}>
                    <Text style={styles.styleType}>{item.type}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default memo(Category);

const styles = StyleSheet.create({
  mContainer: {
    marginVertical: 10,
  },
  mContainerTitle: {
    marginHorizontal: 10,
  },
  mStyleTitle: {
    color: gBLACK,
    fontSize: 18,
    fontWeight: '600',
  },
  mContainerData: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mContainerImg: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 6,
    elevation: 8,
    shadowOffset: {width: 1, height: 1},
  },
  mStyleImg: {
    width: ICON_SIZE + 18,
    height: ICON_SIZE + 18,
    resizeMode: 'contain',
    borderRadius : ICON_SIZE + 18 / 2
  },
  mContainerType: {
    //marginVertical: 10,
  },
  styleType: {
    fontSize: 12,
    color: gBLACK,
  },
});


