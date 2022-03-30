import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsSearchScreen = ({route}) => {

    const keyName = route.params;
    console.log(keyName);
  return (
    <View>
      <Text>DetailsSearchScreen</Text>
    </View>
  )
}

export default DetailsSearchScreen

const styles = StyleSheet.create({})