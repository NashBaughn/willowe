// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login               from "./container/LoginContainer";
import LegalScreen         from "./container/LegalContainer";
import NotificationsScreen from "./container/NotificationsContainer";
import SettingsScreen      from "./container/SettingsContainer";
import Home                from "./container/HomeContainer";
import BlankPage           from "./container/BlankPageContainer";
import Sidebar             from "./container/SidebarContainer";
import ItemDetailScreen    from "./container/ItemDetailContainer";
import AddItemScreen       from "./container/AddItemContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login:         { screen: Login },
		BlankPage:     { screen: BlankPage },
		Legal:         { screen: LegalScreen },
		Notifications: { screen: NotificationsScreen },
		Settings:      { screen: SettingsScreen },
	        Drawer:        { screen: Drawer },
	        AddItem:       { screen: AddItemScreen },
		ItemDetail:    { screen: ItemDetailScreen },
		
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
