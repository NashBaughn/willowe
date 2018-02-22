import * as React from "react";
import BlankPage   from "../../screens/BlankPage";
export interface Props {
	navigation: any,
}
export interface State {}

const AddItemNav = StackNavigator(
	{
		Login:         { screen: Login },
		BlankPage:     { screen: BlankPage },
		Legal:         { screen: LegalScreen },
		Notifications: { screen: NotificationsScreen },
		Settings:      { screen: SettingsScreen },
		Drawer:        { screen: Drawer },
		ItemDetail:    { screen: ItemDetailScreen }
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default class AddItemContainer extends React.Component<Props, State> {
	render() {
		return <BlankPage navigation={this.props.navigation} />;
	}
}
