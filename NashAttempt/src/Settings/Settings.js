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


const settings = [
	{
		route: "EditProfile",
		text:  "Edit Profile"
	},
	{
		route: "Privacy",
		text:  "Privacy"
	},
	{
		route: "Help",
		text:  "Help"
	},
]
export default class Settings extends React.Component {
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
						<Title>Settings</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<List
						dataArray={settings}
						contentContainerStyle={{ marginTop:10 }}
						renderRow={data => {
							return (
								<ListItem
								 button
								 onPress={() => this.props.navigation.navigate(data.route)}
								>
									<Text>{data.text}</Text>
								</ListItem>
							);

						}}
					/>
				</Content>
			</Container>
		);
	}
}
