import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";
import { Image } from "react-native";

import styles from "./styles";
export interface Props {
    navigation: any;
    data: any;
    submit: Function;
}
export interface State {}
class NotificationDetailScreen extends React.Component<Props, State> {

    submit(action) {
	this.props.submit(action);
    }
    
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
						<Title>Notification</Title>
					</Body>

					<Right />
				</Header>
			<View style={styles.content}>
			<Content padder>
                	<Image source={{uri: param.data.image}} />
			<Text> {param.data.caption} </Text>
			<Text> From {param.data.sender} </Text>
			<Text> To {param.data.toWho} </Text>
			<Text> Date {param.data.date} </Text>
			<Text> Status: {param.data.status} </Text>
			{param.data.status === 'action required' ? 
			 <View style={styles.content}>
			 <Content padder>
			 <Button onPress={()=>this.submit("accept")}>
			 <Text> Accept </Text>
			 </Button>
			 <Button onPress={()=>this.submit("decline")}>
			 <Text> decline </Text>
			 </Button>
			 </Content>
			 </View>
			 : <Text>Date Accepted: {param.data.dateAccepted} </Text>}
			</Content>
			</View>
			</Container>
		);
	}
}


export default NotificationDetailScreen;
