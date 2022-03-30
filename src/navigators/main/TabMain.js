import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import ProductScreenLeft from '../../screens/ProductScreenLeft';
import ProductScreenRight from '../../screens/ProductScreenRight';
import CartScreen from '../../screens/CartScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import AccountScreen from '../../screens/AccountScreen';
import {gWHITE, gGRAY11, gSNOW2, gBLACK} from '../../assets/colors/MyColor';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchIcon from '../../components/icons_/SearchIcon';
import ThreeDots from '../../components/icons_/ThreeDots';
import Filter from '../../components/icons_/Filter';
import {windowWidth} from '../../utils/Dimentions';
import {FAKEDATACART}  from "../../config/FakeDataCart"
const Tab = createMaterialTopTabNavigator();
const mTabs = createBottomTabNavigator();

const mTabBarOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: gGRAY11,
  tabBarStyle: {
    position: 'absolute',
    elevation: 0,
    backgroundColor: gWHITE,
    borderRadius: 1,
    height: 58,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  
};

function MyTabs() {
  return (
    <View style={{flex: 1,backgroundColor : gWHITE}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 22, fontWeight: '600', color: gBLACK}}>
            CHRISTIAN DIOR
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <SearchIcon />
          <Filter />
          <ThreeDots />
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="ProductScreenLeft"
        screenOptions={{
          // tabBarShowLabel : false,
          tabBarScrollEnabled: false,
          tabBarItemStyle: {
            height: 48,
          },
          tabBarInactiveTintColor: '#859fa4',
          tabBarActiveTintColor: '#002126',
          tabBarIndicatorStyle: {
            backgroundColor: '#002126',
            width: 48,
            marginHorizontal : windowWidth /5.5
          },
        }}>
        <Tab.Screen name="Sản phẩm nữ" component={ProductScreenLeft} />
        <Tab.Screen name="Sản phẩm nam" component={ProductScreenRight} />
      </Tab.Navigator>
    </View>
  );
}

export default function TabMain() {
  const index = FAKEDATACART.length ;

  console.log(index);
  return (
    <mTabs.Navigator
     screenOptions={mTabBarOptions}>
      <mTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 3,
              }}>
              <Image
                source={require('../../assets/images/icons8-home-24.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? gBLACK : gGRAY11,
                }}
              />
              <Text
                style={{
                  color: focused ? gBLACK : gGRAY11,
                  fontWeight: '600',
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <mTabs.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 3,
              }}>
              <Image
                source={require('../../assets/images/list-text.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? gBLACK : gGRAY11,
                }}
              />
              <Text
                style={{
                  color: focused ? gBLACK : gGRAY11,
                  fontWeight: '600',
                }}>
                Sản phẩm
              </Text>
            </View>
          ),
        }}
      />
      <mTabs.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarBadge: index, //index giỏ hàng
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 3,
              }}>
              <Image
                source={require('../../assets/images/shopping-cart.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? gBLACK : gGRAY11,
                }}
              />
              <Text
                style={{
                  color: focused ? gBLACK : gGRAY11,
                  fontWeight: '600',
                }}>
                Giỏ hàng
              </Text>
            </View>
          ),
        }}
      />
      <mTabs.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 3,
              }}>
              <Image
                source={require('../../assets/images/icons8-notification-24.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? gBLACK : gGRAY11,
                }}
              />
              <Text
                style={{
                  color: focused ? gBLACK : gGRAY11,
                  fontWeight: '600',
                }}>
                Thông báo
              </Text>
            </View>
          ),
        }}
      />
      <mTabs.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 3,
              }}>
              <Image
                source={require('../../assets/images/user.png')}
                resizeMode="contain"
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? gBLACK : gGRAY11,
                }}
              />
              <Text
                style={{
                  color: focused ? gBLACK : gGRAY11,
                  fontWeight: '600',
                }}>
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </mTabs.Navigator>
  );
}

const styles = StyleSheet.create({});
