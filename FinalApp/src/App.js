// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login               from "./container/LoginContainer";
import CreateAccount 			 from "./container/CreateAccountContainer"
import LegalScreen         from "./container/LegalContainer";
import NotificationsScreen from "./container/NotificationsContainer";
import SettingsScreen      from "./container/SettingsContainer";
import Home                from "./container/HomeContainer";
import BlankPage           from "./container/BlankPageContainer";
import Sidebar             from "./container/SidebarContainer";
import ItemDetailScreen    from "./container/ItemDetailContainer";
import AddItemScreen       from "./container/AddItemContainer";
import CameraComponent     from "./components/CameraComponent";
import CameraDetails       from "./components/CameraComponent/CameraDetail";
import NotificationDetail  from "./container/NotificationDetailContainer";

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
		CreateAccount: {screen:CreateAccount},
		BlankPage:     { screen: BlankPage },
		Legal:         { screen: LegalScreen },
		Notifications: { screen: NotificationsScreen },
		Settings:      { screen: SettingsScreen },
	    Drawer:        { screen: Drawer },
	    AddItem:       { screen: AddItemScreen },
	    Camera:        { screen: CameraComponent  },
	    CameraDetails: { screen: CameraDetails },
	    ItemDetail:    { screen: ItemDetailScreen },
	    NotificationDetail: {screen: NotificationDetail}

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
