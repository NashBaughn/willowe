import * as React from "react";
import {StyleSheet, TouchableOpacity, View, PixelRatio, Image} from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, TextInput } from "native-base";
import Item from "../../components/item.js";
import Input from "../../components/Input.js";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class SettingsScreen extends React.Component<Props, State> {
    saveChange() {};
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
	var avatarStyles = StyleSheet.create({
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
	const param = this.props.navigation.state.params;
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
					<Body style={{ flex: 1 }}>
						<Title>{param ? param.name.item : "Settings"}</Title>
					</Body>
					<Right />
				</Header>

			<Content padder>
	      
			 <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={[styles.avatar, styles.avatarContainer, {marginBottom:20}]}>
	       		<Image style={styles.avatar} source={this.state.avatarSource} /> 
	       </TouchableOpacity>
	       <Input>
	            placeholder='current email' //current email
	            label='Email'
	       	    onChangeText = {email => this.setState({email})}
	       	    value = {this.state.email}
	       	    </Input>
	       	    
	       		<Button onPress={() => this.saveChange()}>
	       		<Text> Save </Text>
 		</Button>
		</Content>
		</Container>
		);
    }
}

export default SettingsScreen;
