import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer,Form,Input,Item,Label } from "native-base";
import styles from "./styles";
import { Firebase, FirebaseRef } from '../../boot/firebaseSetup';


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
//import styles from "./styles";
export interface Props {
	navigation: any;
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.state ={
		email:'',
		password:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	handleChange = (name, val) => {
		//console.log('change');
		//console.log(this.state);
		this.setState({
		  ...this.state,
		  [name]: val,
		});
	}

	submit = () => {
		//console.log('submitting');
		this.props.onLogin(this.state, this.props.navigation);
		//this.props.navigation.navigate("Drawer");


	}
	render() {
		return (
			<Container>
				<Header style={{ height: 300, backgroundColor: "#0000FF" }}>
					<Body style={{ alignItems: "center" }}>
			              <Image style={{
							  					backgroundColor: "transparent",
						                        height: 200,
						                        width: 190,
						                        alignSelf: "center",
						                        top: 5
						                      }}
						                source={{
						                     uri:"http://fitnessanddiabetes.com/wp-content/uploads/2018/02/WIllowe_master.png"
						                       }}
											   />

						<Title style={{fontWeight: '900', top: 15, color:'white'}}>Willowe </Title>
					</Body>
				</Header>
				<View style={styles.content}>
				<Content padder>
				<Form>
				<Input
				autoCapitalize="none"
				placeholder='Email'
				onChangeText={v => this.handleChange('email', v)}
				validate={[email, required]}

				 />
				   <Input
					 autoCapitalize="none"
				   placeholder='Password'
					 onChangeText={v => this.handleChange('password', v)}
					 validate={[alphaNumeric, minLength8, maxLength15, required]}

				 />
					<Button block onPress={this.submit}>
							<Text>Login</Text>
						</Button>
						</Form>

				</Content>
				</View>

			</Container>
		);
	}
}

export default Login;
