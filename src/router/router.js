import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import SecondIcon from 'react-native-vector-icons/SimpleLineIcons';

import { TabBar } from "../components";

import {
  WalletsListScreen,
  QRCodeScreen,
  ProfileScreen,
  LoginScreen,
  RegisterScreen
} from "../screens";


const Tabs = createBottomTabNavigator(
  {
    WalletsListScreen: {
      screen: WalletsListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <SecondIcon name="wallet" size={30} color={tintColor} />,
      },
    },
    QRCodeScreen: {
      screen: QRCodeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="qrcode" size={30} color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#c7d1d8"
    }
  },
);

const Stack = createStackNavigator(
  {
    tabs: Tabs,
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Stack);