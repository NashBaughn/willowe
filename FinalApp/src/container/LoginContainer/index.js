// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../screens/Login";
import { loginFire } from "../../boot/firebaseFunctions";



export interface Props {
  navigation: any;
}
export interface State {}
export default class LoginForm extends React.Component<Props, State> {
    login(state, navigator) {
        console.log(state);
        loginFire(state, navigator);
        this.state = state;
    }
  /*Problem with below code. I can't figure out how to send the pass and username to the firebase auth login
  I don't know how to access the form
  I hard coded in my own account
  */
  /*
  login() {
    if (this.props.valid) {
      console.log("HI");



      //dummy data from Thomas
      thomas = {
        email:this.state.email,
        password:this.state.password
      }
      response = loginFire(thomas)
      //console.log(response)
      //console.log("would normally proceed")
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }*/





  render() {

    return <Login
    navigation={this.props.navigation}
     onLogin={this.login}
     />;


  }
}
