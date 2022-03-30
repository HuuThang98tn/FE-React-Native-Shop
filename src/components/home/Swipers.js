import React, {useState, useEffect, memo} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import {URL_SWIPER} from '../../api/Api';
import {windowWidth} from '../../utils/Dimentions';
import FakeSwiper from '../../skeletonPlaceholder/FakeSwiper';
import {gWHITE, gBLACK} from '../../assets/colors/MyColor';

const Swipers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    getListBanner();

    return () => {
      setData([]);
    };
  }, []);

  const getListBanner = () => {
    fetch(URL_SWIPER)
      .then(res => res.json())
      .then(resJSON => {
        setData(resJSON);
      })
      .catch(error => {
        console.log(error);
        // setIsLoading(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log('re-render-Swiper');
  //
  return (
    <View>
      {isLoading ? (
        <FakeSwiper />
      ) : (
        <ScrollView>
          <Swiper
            style={styles.mSwiper}
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={5}>
            {data.map(item => {
              return (
                <View style={styles.cardView} key={item._id}>
                  <Image
                    style={styles.mImage}
                    resizeMode="cover"
                    source={{uri: item.imageBn}}
                  />
                  <View style={styles.mView}>
                    <Text style={styles.mText_}> {item.titleBn}</Text>
                    <Text style={styles.mText__}>{item.descriptionBn}</Text>
                  </View>
                </View>
              );
            })}
          </Swiper>
        </ScrollView>
      )}
    </View>
  );
};

export default memo(Swipers);

const styles = StyleSheet.create({
  mSwiper: {
    height: windowWidth / 1.7 ,
  },
  cardView: {
    flex: 1,
    width: windowWidth - 20,
    height: windowWidth / 1.7 ,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 0,
  },
  mImage: {
    width: windowWidth - 20,
    height: windowWidth / 1.8,
    borderRadius: 10,
  },
  mView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  mText_: {
    color: gWHITE,
    fontSize: 18,
    shadowColor: gBLACK,
    shadowOffset: {windowWidth: 0.8, windowWidth: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  mText__: {
    color: gWHITE,
    fontSize: 12,
    shadowColor: gBLACK,
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
