import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import Item from "../../components/item.js"; 
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class SettingsScreen extends React.Component<Props, State> {
	render() {
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
						<Title>{param ? param.name.item : "Settings"}</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesom . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default SettingsScreen;