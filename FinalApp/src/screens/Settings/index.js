import * as React from "react"; 
import {StyleSheet, TouchableOpacity, View, PixelRatio, Image} from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, TextInput } from "native-base";
import AwesomeAlert from 'react-native-awesome-alerts';
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
	showAlert: false,
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
    showAlert = () => {
	this.setState({
	    showAlert: true
	});
    };
    
    hideAlert = () => {
	this.setState({
	    showAlert: false
	});
    };
    
    submit() {
	this.hideAlert();
	this.props.submit(this.state);
	this.props.navigation.navigate("Home");
    }
    render() {
	
	const param = this.props.navigation.state.params;
	return (
	    <Container>
		<Header>
		<Left>
		<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
		<Icon
	    active
	    name="menu"		                
		/>
		</Button>
		</Left>
		<Body style={{ flex: 3 }}>
		<Title>Profile</Title>
		</Body>

		<Right />
		</Header>
		<View style={styles.contentContainer}>
		<Content padder>
	      <Text style={{top: 10, fontWeight: '600', color: 'grey'}}>Please enter your user information below: </Text>
		   
	       <Input
	    placeholder= {this.props.data.email}
	            label='Email'
	       	    onChangeText = {email => this.setState({email})}
	       	    value = {this.state.email}
				 />
	       	  <Input
	    placeholder= {this.props.data.firstName}
	            label='First Name'
	       	    onChangeText = {firstName => this.setState({firstName})}
	    value = {this.state.firstName} />
		<Input
	    placeholder={this.props.data.lastName}
	            label='Last Name'
	       	    onChangeText = {lastName => this.setState({lastName})}
	    value = {this.state.lastName} />

		<Container>
	       		<Button style={{top:25}}
	    onPress={() => this.showAlert()}>
	       		      <Text>Save </Text>
 		        </Button>
	    </Container>
				
			</Content>
		</View>
		<AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Confirmation"
          message="Are you sure you want to update the information?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No"
          confirmText="Yes"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.submit();
          }}
        />
		</Container>
		
	);
    }
}

export default SettingsScreen;
