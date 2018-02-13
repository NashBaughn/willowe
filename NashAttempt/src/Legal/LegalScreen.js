import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
	Button,
	Text,
	List,
	ListItem,
	Container,
	Card,
	CardItem,
	Body,
	Content,
	Header,
	Title,
	Left,
	Icon,
	Right
} from "native-base";

import { StackNavigator } from "react-navigation";

//firebase boiz
const existingNotifications = ["proccessing..."]

export default class LegalScreen extends React.Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button
			              transparent
			              onPress={() => this.props.navigation.navigate("DrawerOpen")}
			            >
			              <Icon name="menu" />
			            </Button>
					</Left>
					<Body>
						<Title>Legal</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<List
						dataArray={existingNotifications}
						contentContainerStyle={{ marginTop:10 }}
						renderRow={data => {
							return (
								<ListItem
								 button
								 onPress={() => this.props.navigation.navigate(data)}
								>
									<Text>{data}</Text>
								</ListItem>
							);

						}}
					/>
				</Content>
			</Container>
		);
	}
}
