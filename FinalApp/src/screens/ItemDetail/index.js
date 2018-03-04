import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";
import { Image } from "react-native";

import styles from "./styles";
export interface Props {
    navigation: any;
    data: any;
}
export interface State {}
class ItemDetailScreen extends React.Component<Props, State> {
    render() {
	console.log(this.props);
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Item Detail</Title>
					</Body>

					<Right />
				</Header>
			<View style={styles.content}>
			<Content padder>
                	<Image source={{uri: param.data.image}} />
			<Text style={styles.text}> {param.data.caption} </Text>
			
			<Text style={styles.textTitle}> From </Text>
			<Text style={styles.text}> {param.data.sender} </Text>
			<Text style={styles.textTitle}> To </Text>
			<Text style={styles.text}> {param.data.toWho} </Text>
			<Text style={styles.textTitle}> Date </Text>
			<Text style={styles.text}> {param.data.date} </Text>
			<Text style={styles.textTitle}> Status: </Text>
			<Text style={styles.text}> {param.data.status} </Text>
			<Text style={styles.textTitle}> Date Accepted: </Text>
			<Text style={styles.text}> {param.data.dateAccepted} </Text>
			</Content>
			</View>
			</Container>
		);
	}
}

export default ItemDetailScreen;
