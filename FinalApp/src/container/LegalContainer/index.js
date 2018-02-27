import * as React from "react";
import LegalScreen from "../../screens/Legal";
export interface Props {
	navigation: any,
}
export interface State {}
export default class LegalContainer extends React.Component<Props, State> {
	render() {
		return <LegalScreen navigation={this.props.navigation} />;
	}
}
