import * as React from "react";
import SettingsScreen from "../../screens/Settings";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SettingsContainer extends React.Component<Props, State> {
	render() {
		return <SettingsScreen navigation={this.props.navigation} />;
	}
}
