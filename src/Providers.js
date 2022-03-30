import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import SplashScreen from './screens/SplashScreen';
import TabNavigator from './navigators/TabNavigator';

class Providers extends React.Component {

  constructor(props) {
    super(props);
    (this.state = {
      currentScreen: 'SplashScreen',
    }),
      setTimeout(() => {
        this.setState({
          currentScreen: 'ViewTabs',
        });
      }, 3500);
  }

  

  render() {
    const {currentScreen} = this.state;
    let mainScreen =
      currentScreen == 'SplashScreen' ? (
        <SplashScreen />
      ) : (
        <View style={{flex: 1}}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <TabNavigator />
        </View>
      );
    return mainScreen;
  }
}

export default Providers;
