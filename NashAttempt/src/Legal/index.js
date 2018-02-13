import React, { Component } from "react";
import LegalScreen from "./LegalScreen.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
	{
		LegalScreen: { screen: LegalScreen }
	},
	{
	    initialRouteName: "Legal"
	}
));



