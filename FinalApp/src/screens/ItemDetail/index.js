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
	console.log(param.data.image);
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
                	<Image source = {{url: param.data.image}} style={styles.imageStyle}/>
			<Text style={styles.textBlock}>
			<Text style={{fontWeight:"bold", flex:1}}> {param.data.caption} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> From {"\n"} </Text>
			<Text style={styles.text}> {param.data.sender} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> To{"\n"} </Text>
			<Text style={styles.text}> {param.data.toWho} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Date{"\n"} </Text>
			<Text style={styles.text}> {param.data.date} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Status{"\n"} </Text>
			<Text style={styles.text}> {param.data.status} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Date Accepted{"\n"} </Text>
			<Text style={styles.text}> {param.data.dateAccepted} </Text>
			</Text>
			</View>
		
			</Container>
		);
	}
}

export default ItemDetailScreen;
