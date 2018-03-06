import * as React from "react";
import { Container, Thumbnail, View, Header, ListItem, Title, Content, Card, CardItem, Text, Button, Icon, Left, Right, Body } from "native-base";
import { StyleSheet } from "react-native";
import { Firebase, FirebaseRef } from '../boot/firebaseSetup';
import { AppRegistry, Image, StatusBar } from "react-native";
export interface Props {
    navigation: any;
    data: any;
}
export interface State {}
//import styles from "./styles";
class Item extends React.Component{
	constructor(props) {
 	    super(props);
	    //never called
 	}

    render() {	
		return (
		        <ListItem button onPress={() => this.props.navigation.navigate("ItemDetail", {data: this.props.data}) }>
		        <Card>			
			<Header style={{flex: 1}}>
                        <Text style={{textAlign:"center"}} >{this.props.data.itemName} {'\n'} {Firebase.auth().currentUser.email == this.props.data.senderEmail ? this.props.data.receiverEmail : this.props.data.senderEmail}</Text>
			</Header>
			<CardItem cardBody style={{flex:8}}>
			<Image source={{url: this.props.data.image}} style={{height: 100, width: null, flex: 1}}/>
                  </CardItem>
			<CardItem style={{flex:1}}>
			<Left>
			<Icon name={Firebase.auth().currentUser.email == this.props.data.senderEmail ? "md-log-out" : Firebase.auth().currentUser.email == this.props.data.receiverEmail ? "md-log-in" : ""} />
			<Text style={{textAlign: 'right'}}>{Firebase.auth().currentUser.email == this.props.data.senderEmail ? "sent" : Firebase.auth().currentUser.email == this.props.data.receiverEmail ? "received" : ""}</Text>
                    </Left>
                
                    <Right>
			<Text>{this.props.data.date}</Text>
                    </Right>
                  </CardItem>
                </Card>
		        </ListItem>
		);
	}
}

const styles: any = StyleSheet.create({
  // row: {
  //   justifyContent: 'center',
  //   height: 20,
  //   padding: 10,
  //   backgroundColor: '#FFFFFF',
  //   flex: 1
  // },
  // separator: {
  //   height: 1,
  //   backgroundColor: '#CCCCCC'
  // },
  // infoButton:{

  // },
  // text: {
  //   flex: 1,
  //   fontSize: 20
  // }
})

export default Item;
