import React, {memo, useState,useEffect} from 'react';
import {StyleSheet, Text, View, Alert, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {HEIGHT_SEARCH} from '../../config/Theme';
import {windowWidth} from '../../utils/Dimentions';
import {gBLACK, gSNOW2, gWHITE} from '../../assets/colors/MyColor';
import {useNavigation} from '@react-navigation/native';
import ModalPoup from '../search/ModalPoup';

import LottieView from 'lottie-react-native';
import Voice from 'react-native-voice';

const ChildSearchHeadr = () => {
  const [visible, setVisible] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    // Đặt lệnh gọi lại cho trạng thái quy trình
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      //phá hủy quá trình sau khi chuyển đổi màn hình
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);


  const onSpeechError = (e) => {
    // Được gọi khi xảy ra lỗi.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));

    /// hiện thông báo cho người dùng
    // Alert.alert()
  };

  const onSpeechResults = (e) => {
    // Được gọi khi SpeechRecognizer nhận dạng xong
    console.log('onSpeechResults: ', e);
    setResults(e.value);
    setVisible(false);
  };
  const startRecognizing = async () => {
    // Bắt đầu nghe giọng nói cho một ngôn ngữ cụ thể
    try {
      await Voice.start('vi-VN');
      setError('');
      setResults([]);

    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  function goBack_() {
    navigation.goBack();
  }
  function onSubmitEditing() {
    navigation.navigate('DetailsSearchScreen', textInput);
  }
  function clickMic() {
    startRecognizing();
    setVisible(true);
  }
   console.log(results);

  return (
    <View style={styles.mContainer}>
      <View style={styles.mViewSearch}>
        <View style={styles.mViewImg}>
          <Icon name="arrow-left" size={24} color={gBLACK} onPress={goBack_} />
        </View>
        <View style={styles.mContainerInPut}>
          <View style={styles.mStyleContainerText}>
            <TextInput
              placeholder=" Nhập tên tìm kiếm..."
              returnKeyType="search"
              onSubmitEditing={onSubmitEditing}
              onChangeText={value => {
                setTextInput(value);
              }}></TextInput>
          </View>
          <Icon
            style={styles.mStyleSearch}
            name="search"
            size={24}
            color={gBLACK}
          />
          <Icon
            onPress={clickMic}
            style={styles.mStyleMic}
            name="mic"
            size={24}
            color={gBLACK}
          />
        </View>
      </View>
      <ModalPoup visible={visible}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: gBLACK,
              marginTop: 10,
            }}>
            Xin mời nói
          </Text>
          <View style={{width: windowWidth / 4.5, height: windowWidth / 4.5}}>
            <LottieView
              source={require('../../api/69198-microphone.json')}
              autoPlay
              loop
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: gBLACK,
              }}
              onPress={() => {
                setVisible(false);
              }}>
              Hủy
            </Text>
          </View>
        </View>
      </ModalPoup>
    </View>
  );
};

export default ChildSearchHeadr;

const styles = StyleSheet.create({
  mContainer: {
    backgroundColor: gWHITE,
  },
  mViewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    height: HEIGHT_SEARCH,
  },
  mViewImg: {
    marginHorizontal: 5,
  },
  mContainerInPut: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEIGHT_SEARCH - 15,
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  mStyleContainerText: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  mStyleText: {
    color: gBLACK,
    fontWeight: '300',
  },
  mStyleSearch: {
    position: 'absolute',
    right: 45,
  },
  mStyleMic: {
    marginHorizontal: 10,
  },
});
