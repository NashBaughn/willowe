import * as React from "react";
import { Container, Thumbnail, View, Header, ListItem, Title, Content, Card, CardItem, Text, Button, Icon, Left, Right, Body } from "native-base";
import { StyleSheet } from "react-native";
import { AppRegistry, Image, StatusBar } from "react-native";
export interface Props {
	navigation: any;
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
		        <ListItem button onPress={() => this.props.navigation.navigate("ItemDetail") }>
		            <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail />
                      <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                      </Body>
                    </Left>
                    <Right />
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>Confirmed</Text>
                      </Button>
                    </Left>
                
                    <Right>
                      <Text>11h ago</Text>
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