import React from "react";
import ImagePicker from 'react-image-picker';
import { Image, View, xsAppRegistry, Alert, StyleSheet, PixelRatio, TouchableOpacity } from "react-native";
import { Input } from '../Components/Input';

import {
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
  Title,
  Button,
  H1
} from "native-base";
export default class EditProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>EditProfileScreen</Title>
        </Body>
        <Right />
      </Header>
    )
  });
    saveChange() {    } //save changes
    state = {
	email: '',
	firstName: '',
	lastName: '',
	avatarSource: null
    };
    selectPhotoTapped() {
	const options= {
	    quality: 1.0,
	    maxWidth: 500,
	    maxHeight: 500,
	    storageOptions: {
		skipBackup: true
	    }
	};
	ImagePicker.showImagePicker(options, (response) => {
	    if (response.didCancel) {
	    } else if (response.error) {
		console.log('ImagePicker Error: ', response.error);
	    } else if (response.customButton) {
	    } else {
		let source = {uri: response.uri};
		this.setState({
		    avatarSource: source
		});
	    }
	});
    }
  render() {
      var styles = StyleSheet.create({
	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	    flex: 1
	},
	avatarContainer: {
	    borderColor: '#9B9B9B',
	    borderWidth: 1 / PixelRatio.get(),
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	avatar: {
	    borderRadius: 775,
	    width: 150,
	    height: 150
	}
      });
	    return (
	  <View style={styles.container}>
	      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
	          <View style={[styles.avatar, styles.avatarContainer, {marginBottom:20}]}>
	              {this.state.avatarSource === null ? <Text>Select a Photo</Text> :
	              <Image style={styles.avatar} source={This.state.avatarSource} /> }
	          </View>
	      </TouchableOpacity>
	      <Input
	           placeholder='current email' //current email
	           label='Email'
		onChangeText = {email => this.setState({email})}
		value = {this.state.email}
		    />
		    <Input
	           placeholder='current first name' //current email
	           label='First name'
		onChangeText = {firstName => this.setState({firstName})}
		value = {this.state.firstName}
		    />
		    <Input
	           placeholder='current email' //current email
	           label='Last name'
		onChangeText = {lastName => this.setState({lastName})}
		value = {this.state.lastName}
		   
	      />
		    <Button onPress={() => this.saveChange()}>
		    <Text> Save </Text>
		    </Button>
	  </View>

      );
   
  }
}
