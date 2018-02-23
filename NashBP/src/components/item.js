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
                  <CardItem>
			<Left>
			{/*the other person's profile pic if possible, or just the item pic and shrink size*/}
                      <Thumbnail /> 
                      <Body>
                        <Text>{this.props.data.sender}</Text>
                        <Text note>{this.props.data.caption}</Text>
                      </Body>
                    </Left>
                    <Right />
                  </CardItem>
                  <CardItem cardBody>
			<Image source={{url: this.props.data.image}} style={{height: 100, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Left>
			<Text>{this.props.data.status}</Text>
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
