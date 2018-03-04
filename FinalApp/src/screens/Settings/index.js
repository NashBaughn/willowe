import * as React from "react";
import {StyleSheet, TouchableOpacity, View, PixelRatio, Image} from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, TextInput } from "native-base";
import Input from "../../components/Input.js";
import styles from "./styles";
export interface Props {
    navigation: any;
    submit: Function;
    data: any;
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
    submit() {
	this.props.submit(this.state);
	this.props.navigation.goBack();
    }
    render() {
	
	const param = this.props.navigation.state.params;
	return (
	    <Container>
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
		<Title>Setting</Title>
		</Body>

		<Right />
		</Header>
		<View style={styles.contentContainer}>
			<Content padder>
	      
		   
	       <Input
	    placeholder= {this.props.data.email}
	            label='email'
	       	    onChangeText = {email => this.setState({email})}
	       	    value = {this.state.email} />
	       	  <Input
	    placeholder= {this.props.data.firstName}
	            label='firstName'
	       	    onChangeText = {firstName => this.setState({firstName})}
	    value = {this.state.firstName} />
		<Input
	    placeholder={this.props.data.lastName}
	            label='lastName'
	       	    onChangeText = {lastName => this.setState({lastName})}
	    value = {this.state.lastName} />
		
	       		<Button onPress={() => this.submit()}>
	       		<Text> Save </Text>
 		</Button>
			</Content>
			</View>
		</Container>
		);
    }
}

export default SettingsScreen;
