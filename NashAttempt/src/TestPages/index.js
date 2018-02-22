import React, { Component } from "react";
import LoginScreen from "./Login.js";
import ItemDetailScreen from "./ItemDetail.js"
import Test from "./Test.js"
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
	{
	    Login : { screen: LoginScreen }, 
	    ItemDetail  : { screen:  ItemDetailScreen},
	    TestScreen : { screen: Test}
	},
	{
	    initialRouteName: "TestScreen"
	}
));


