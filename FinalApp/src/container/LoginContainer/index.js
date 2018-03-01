// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../screens/Login";
import { loginFire } from "../../boot/firebaseFunctions";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(30); //changed
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(1); //changed
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export interface Props {
  navigation: any;
}
export interface State {}
class LoginForm extends React.Component<Props, State> {
  textInput: any;

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === "email" ? "Email" : "Password"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }

  /*Problem with below code. I can't figure out how to send the pass and username to the firebase auth login
  I don't know how to access the form
  I hard coded in my own account 
  */
  login() {
    if (this.props.valid) {
      console.log(this.state)
      //dummy data from Thomas
      thomas = {
        email:'tcahill@ucsc.edu',
        password:'helloworld'
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
  }

  handleChange = (name, val) => {
    console.log(name+val)
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  render() {
    const form = (
      <Form>
        <Field
          name="email"
          autoCapitalize="none"
          value={this.state.email}
          component={this.renderInput}
          keyboardType="email-address"
          onChangeText={v => this.handleChange('email', v)}
          validate={[email, required]}
        />
        <Field
          name="password"
          component={this.renderInput}
          onChangeText={v => this.handleChange('password', v)}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);
export default LoginContainer;
