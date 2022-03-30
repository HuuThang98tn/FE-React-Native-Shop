import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMain from './main/TabMain';
import DetailsType from '../screens/DetailsType';
import DetailsProduct from '../screens/DetailsProduct';
import SearchScreen from '../screens/SearchScreen';
import DetailsSearchScreen from '../screens/DetailsSearchScreen';


const Stack = createNativeStackNavigator();

export default function TabNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabMain"
          component={TabMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsType"
          component={DetailsType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsProduct"
          component={DetailsProduct}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="DetailsSearchScreen"
          component={DetailsSearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
