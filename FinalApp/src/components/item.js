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
class Item extends React.Component{
	constructor(props) {
 	    super(props)
 	    console.log(props)
 	}

	render() {		
		return (
		        <ListItem button onPress={() => this.props.navigation.navigate("ItemDetail", {data: this.props.data}) }>
		        <Card>			
			<Header style={{flex: 1}}>
                        <Text style={{textAlign:"center"}} >{this.props.data.caption} {'\n'} {this.props.data.status == "received" ? this.props.data.sender : this.props.data.toWho}</Text>
			</Header>
			<CardItem cardBody style={{flex:8}}>
			<Image source={{url: this.props.data.image}} style={{height: 100, width: null, flex: 1}}/>
                  </CardItem>
			<CardItem style={{flex:1}}>
			<Left>
			<Icon name={this.props.data.status == "received" ? "md-log-in" : "md-log-out"} />
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

export default Item;
