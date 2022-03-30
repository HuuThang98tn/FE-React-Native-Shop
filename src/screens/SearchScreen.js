import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChildSearchHeadr from '../components/search/ChildSearchHeadr';
import SuggestKeySearch from '../components/search/SuggestKeySearch';
const SearchScreen = () => {
  return (
    <View>
      <ChildSearchHeadr />
      <SuggestKeySearch/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
