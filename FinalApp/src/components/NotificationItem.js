import * as React from "react";
import { Container, Thumbnail, View, Header, ListItem, Title, Content, Card, CardItem, Text, Button, Icon, Left, Right, Body } from "native-base";
import { StyleSheet } from "react-native";
import { AppRegistry, Image, StatusBar } from "react-native";
export interface Props {
    navigation: any;
    data: any;
}
export interface State {}
//import styles from "./styles";
class NotificationItem extends React.Component{
	constructor(props) {
 		super(props)
 	    console.log(props)
 	}

	render() {		
		return (
		        <ListItem button onPress={() => this.props.navigation.navigate("NotificationDetail", {data: this.props.data}) }>
		            <Card>
			<Header style={{flex: 1}}>
                        <Text style={{textAlign:"center"}} >{this.props.data.caption} {'\n'} {this.props.data.status == "action required" ? this.props.data.sender : this.props.data.toWho}</Text>
			</Header>
                  <CardItem cardBody>
			<Image source={{url: this.props.data.image}} style={{height: 100, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem style={{flex:1}}>
			<Left>
			<Icon name={this.props.data.status == "action required" ? "md-notifications" : this.props.data.status == "item accepted" ? "md-checkmark" : "md-close"} />
			<Text style={{textAlign: 'right'}}>{this.props.data.status}</Text>
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

export default NotificationItem;
