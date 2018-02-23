import * as React from "react";
import NotificationsScreen from "../../screens/Notifications";
export interface Props {
	navigation: any,
}
export interface State {}
export default class NotificationsContainer extends React.Component<Props, State> {
	render() {
		return <NotificationsScreen navigation={this.props.navigation} />;
	}
}



