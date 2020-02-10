import React from "react";

import Screen from "./Screen";

import WalletsList from "./Wallets/List"
import QRCode from "./Payment/QRCode"
import Profile from "./Profile/Profile"
import Login from "./Auth/Login"
import Register from "./Auth/Register"

// App navigation
export const WalletsListScreen = () => (<Screen name="Home" ><WalletsList/></Screen>);
export const QRCodeScreen = () => (<Screen name="Pics" ><QRCode/></Screen>);
export const ProfileScreen = ({ navigation }) => (<Screen  name="Profile" ><Profile navigation={navigation}/></Screen>);

// Auth navigation
export const LoginScreen = ({ navigation }) => (<Login navigation={navigation}/>);
export const RegisterScreen = ({ navigation }) => (<Register navigation={navigation}/>);

