import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class LegalScreen extends React.Component<Props, State> {
	
	render() {
		console.log("Here we go")
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
			              <Icon
			                active
			                name="menu"			                
			              />
			            </Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Legal</Title>
					</Body>
				</Header>

				<Content padder>
					<Text style={{fontWeight: 'bold'}, {color: 'red'}}> Willowe is not a law firm, we are not responsible for any damages of use or misuse of this software.  Willowe is meant to provide a statement of final wishes, we do not make any claims of legality of service.  We recommend you see an attorney to create a legal will, the law is highly complex and professionals should be sought out to make decisions on the law.  Willowe is not intended for public or commercial use and should not be released, it does not provide any guarantee of services.  Willowe is part of an educational exercise and should not be mistaken for a marketable product.  All lawful responsibilities lay with the user of this software. </Text>
					<Text>{ param !== undefined ? param.name.item : " "}</Text>
				</Content>
			</Container>
		);
	}
}

export default LegalScreen;
