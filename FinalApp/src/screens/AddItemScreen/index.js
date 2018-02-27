import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View, TouchableOpacity, TextInput } from "native-base";
import Input from "../../components/Input.js";

import styles from "./styles";
export interface Props {
    navigation: any;
    onSubmit: Function;
}
export interface State {}
class AddItemScreen extends React.Component<Props, State> {
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
    submit() {
	this.props.onSubmit(this.state);
    }
    state ={
	itemDescription: 'Optional',
	itemName: '',
	itemPicture: null,
	receiverEmail: ''
    };
    render() {
	
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Transaction</Title>
					</Body>

					<Right />
			</Header>
			<View style={styles.content}>

			<Content padder>
			
			<Text> Item Photo </Text>
			
			<Input
		    placeHolder='name of the item'
		    label='item name'
		    onChangeText = {itemName => this.setState(itemName)}
		    value = {this.state.itemName}
			/>
			<Input
		    placeHolder='example@gmail.com'
		    label='Receivers email'
		    onChangeText = {receiverEmail => this.setState(receiverEmail)}
		    value = {this.state.receiverEmail}
			/>
			<Text> Optional item description or note for the receiver </Text>
			
			<Button onPress={() => this.submit()}>
			<Text> Submit </Text>
			</Button>

		    </Content>
			</View>
		    </Container>
		);
	}
}

export default AddItemScreen;
