import React, { Component } from "react";
import NotificationsScreen from "./Notifications.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
	{
		Notifications: { screen: NotificationsScreen }
	},
	{
	    initialRouteName: "Notifications"
	}
));



