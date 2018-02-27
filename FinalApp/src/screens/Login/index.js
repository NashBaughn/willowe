import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import login from "../../boot/firebaseFunctions.js"
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: login,
}
export interface State {}
class Login extends React.Component<Props, State> {
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
									
						<Title style={{fontWeight: '900', top: 15}}>Willowe </Title>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>

			</Container>
		);
	}
}

export default Login;
