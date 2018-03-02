import * as React from "react";
import AddItemScreen   from "../../screens/AddItemScreen";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import {addItem} from "../../boot/firebaseFunctions"
import CameraScreen from './Camera';

export interface Props {
	navigation: any,
}
export interface State {}

export default class CameraComponent extends React.Component<Props, State> {
    submit(state) {
        console.log(state);
        addItem(state);
        this.state = state;
    }
    
    render() {
	   console.log("Here we go")
	   return <CameraScreen navigation={this.props.navigation} onSubmit={this.submit}  />;
    }
    
}
