import * as React from "react";
import { Container, View, Header, ListItem,Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { StyleSheet } from "react-native";

//import styles from "./styles";

class ItemDetail extends React.Component{
	constructor(props) {
 		super(props)
		
 	}

	render() {		
		return (
		    <Container style={styles.container}>
				<Header>	
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
			              <Icon
			                active
			                name="menu"		                
			              />
			            </Button>
					</Left>	
					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Settings"}</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesom . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

const styles: any = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  infoButton:{

  },
  text: {
    flex: 1,
    fontSize: 20
  }
})

export default ItemDetail;