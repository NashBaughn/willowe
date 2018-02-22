import React from "react";
import { Image, View, xsAppRegistry, Alert, TextInput, StyleSheet, PixelRatio, TouchableOpacity } from "react-native";
import { Input } from '../Components/Input';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';


import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  List,
  ListItem,
  Title,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";



export default class AddItem extends React.Component {
static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add Item</Title>
        </Body>
        <Right />
      </Header>
    )
});
    sendItem() {
	this.props.navigation.navigate("AllItems");
    }
    selectPhotoTapped() {
	const options= {
	    quality: 1.0,
	    maxWidth: 500,
	    maxHeight: 500,
	    storageOptions: {
		skipBackup: true
	    }
	};
    }
    state ={
	itemDescription: 'Optional',
	itemName: '',
	itemPicture: null,
	receiverEmail: ''
    }
  
 render() {
     return (
	 
	     <View style={styles.container}>
	     <Text> Item Photo </Text>
	    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
	     <View style={[styles.itemPicture, styles.itempPictureContainer, {marginBottom:20}]}>
	     {this.state.itemPicture === null ? <Text> Select a Photo </Text> :
	      <Image style={styles.itemPicture} source={this.state.itemPicture} /> }
	 </View>
	     </TouchableOpacity>
	     <Input
	 placeHolder='name of the item'
	 label='item name'
	 onChangeText = {itemName => this.setState({itemName})}
	 value = {this.state.itemName}
	     />
	     <Input
	 placeHolder='example@gmail.com'
	 label='Receivers email'
	 onChangeText = {receiverEmail => this.setState({receiverEmail})}
	 value = {this.state.receiverEmail}
	     />
	     <Text> Optional item description or note for the receiver </Text>
	     <TextInput
	 multiline = {true}
	 autoGrow = {true}
	 placeHolder="optional"
	 style={{height:50, width:900, borderBottomWidth:1 }}
         onChangeText={itemDescription => this.setState({itemDescription})}
         value={this.state.itemDescription}
	     />
	     <Button onPress={() => this.sendItem()}>
	     <Text> Submit </Text>
	     </Button>
	     </View>
     );
 }
}
var styles = StyleSheet.create({
	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	    flex: 1
	},
	itempPictureContainer: {
	    borderColor: '#9B9B9B',
	    borderWidth: 1 / PixelRatio.get(),
	    justifyContent: 'center',
	    alignItems: 'center'
	},
    itemPicture: {
	
	    width: 200,
	    height: 200
	}
      });
