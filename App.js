import React from 'react';
import { View, StatusBar } from 'react-native'
import About from './components/about'
import Search from './components/search'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation'

const Tabs = createBottomTabNavigator({
  Search: { screen: Search },
  About: { screen: About },
}, {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: "#a2273c",
        borderTopWidth: 10,
        borderColor: "#42f4b3",
      }
    }
  })


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
