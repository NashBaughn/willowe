import * as React from "react";
import AddItemScreen   from "../../screens/AddItemScreen";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
export interface Props {
	navigation: any,
}
export interface State {}

export default class AddItemContainer extends React.Component<Props, State> {
    submit(state) {
	console.log(state);
	this.state = state;
    }
    
    render() {
	
	return <AddItemScreen navigation={this.props.navigation} onSubmit={this.submit}  />;
    }
    
}

