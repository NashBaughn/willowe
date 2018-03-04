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
	this.props.navigation.goBack();
    }
    
    render() {
	
	const param = this.props.navigation.state.params;
	console.log(param);
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
                	<Image source={{url: param.data.image}} style={styles.imageStyle} />
			
			<Text style={styles.textBlock}>
			<Text style={{fontWeight: "bold"}}> {param.data.caption} </Text>
			</Text>
			
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> From {'\n'} </Text>
			<Text style={styles.text}> {param.data.sender} </Text>
			</Text>
			
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> To {'\n'}</Text>
			<Text style={styles.text}> {param.data.toWho} </Text>
			</Text>
			
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Date {'\n'} </Text>
			<Text style={styles.text}> {param.data.date} </Text>
			</Text>
			
			<Text style={styles.textBlock}>
			<Text style={styles.textTitle}> Status {'\n'} </Text>
			<Text style={styles.text}> {param.data.status} </Text>
			</Text>
			
			{param.data.status === 'action required' ? 
			 <View style={styles.buttonsBlock}>
			 <Button onPress={()=>this.submit("accept")}>
			 <Text> Accept </Text>
			 </Button>
			 <Button onPress={()=>this.submit("decline")}>
			 <Text> Decline </Text>
			 </Button>
			 </View>
			 : <Text style={styles.textBlock}>
			 <Text style={styles.textTitle}> Date {"\n"} </Text>
			 <Text style={styles.text}> {param.data.dateAccepted} </Text>
			 </Text>
			}
			</View>
			</Container>
		);
	}
}


export default NotificationDetailScreen;
