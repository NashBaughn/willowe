import React, { Component } from "react";
import HomeScreenNavigator from "./HomeScreen.js";
import SettingsScreen from "../Settings/index.js"
import MainScreenNavigator from "../ChatScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import NotificationsScreen from "../Notifications/index.js";

import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenNavigator },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen:  { screen: ProfileScreen },
    SettingsScreen: { screen: SettingsScreen },
    NotificationsScreen: { screen: NotificationsScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
