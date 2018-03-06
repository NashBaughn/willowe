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
			<Text style={{fontWeight:"bold", flex:1}}> {param.data.itemName} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> From {"\n"} </Text>
			<Text style={styles.text}> {param.data.senderEmail} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> To{"\n"} </Text>
			<Text style={styles.text}> {param.data.receiverEmail} </Text>
			</Text>
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Item Description{"\n"} </Text>
			<Text style={styles.text}> {param.data.itemDesc} </Text>
			</Text>
			</View>
		
			</Container>
		);
	}
}

export default ItemDetailScreen;
