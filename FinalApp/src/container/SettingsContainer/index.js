import * as React from "react";
import SettingsScreen from "../../screens/Settings";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SettingsContainer extends React.Component<Props, State> {
    onSubmit(state) {
	console.log(state);
	{/*this.setState({userData: {state}});*/}
    }
    componentWillMount() {
	this.setState ({
	    userData: {
		email: 'test',
		firstName: '123',
		lastName: '124'
	    }
	});
    }
    render() {
	return <SettingsScreen navigation={this.props.navigation} submit={this.onSubmit} data={this.state.userData}/>;
    }
}
