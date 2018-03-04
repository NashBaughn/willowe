import * as React from "react";
import AddItemScreen   from "../../screens/AddItemScreen";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import {addItem} from "../../boot/firebaseFunctions"

export interface Props {
	navigation: any,
}
export interface State {}

export default class CreateAccountContainer extends React.Component<Props, State> {
    submit(state) {
        console.log(state);
        addItem(state);
        this.state = state;
    }

    render() {

	return <AddItemScreen navigation={this.props.navigation} onSubmit={this.submit}  />;
    }

}
