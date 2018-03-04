// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import CreateAccount from "../../screens/CreateAccount";
import { CreateAccountPush } from "../../boot/firebaseFunctions";



export interface Props {
  navigation: any;
}
export interface State {}
export default class CreateAccountForm extends React.Component<Props, State> {
    Create(state, navigator) {
        console.log(state);
        CreateAccountPush(state, navigator);
        this.state = state;
    }




		  render() {

		    return <CreateAccount
		    navigation={this.props.navigation}
		     onCreate={this.Create}
		     />;


		  }
		}
