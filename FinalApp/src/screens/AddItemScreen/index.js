import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Form, Item, Input, Label, Icon, Left, Right, Body, View, TouchableOpacity, TextInput } from "native-base";
//import Input from "../../components/Input.js";

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

	constructor(props) {
		super(props)
		this.state ={
		itemDesc: 'Optional',
		itemName: '',
		firstName: '',
		lastName: '',
		itemPicture: '',
		receiverEmail: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	handleChange = (name, val) => {
		//console.log('change');
		//console.log(this.state);
		this.setState({
		  ...this.state,
		  [name]: val,
		});
	}

	submit = () => {
		//console.log('submitting');
		this.props.onSubmit(this.state);
		this.props.navigation.goBack();
	}


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
						<Title>Add Item</Title>
					</Body>

					<Right />
			</Header>
		<View style={styles.content}>

			<Content padder>

				<Text> Item Photo </Text>

				<Form>
					<Item stackedLabel>
					<Label>Item Name</Label>
					<Input onChangeText={v => this.handleChange('itemName', v)} />
					</Item>

					<Item stackedLabel>
					<Label>First Name of Recipient</Label>
					<Input onChangeText={v => this.handleChange('firstName', v)} />
					</Item>

					<Item stackedLabel>
					<Label>Last Name of Recipient</Label>
					<Input onChangeText={v => this.handleChange('lastName', v)} />
					</Item>

					<Item stackedLabel>
					<Label>Email of Recipient</Label>
					<Input
						autoCapitalize="none"
						keyboardType="email-address"
						onChangeText={v => this.handleChange('receiverEmail', v)}
					/>
					</Item>
					<Item stackedLabel>
					<Label>Item Description</Label>
					<Input
						multiline = {true}
						numberOfLines = {5}
						onChangeText={v => this.handleChange('itemDesc', v)}
					/>
					</Item>

					<Button block onPress={this.submit}>
					<Text>Submit</Text>
					</Button>

				</Form>
		  	</Content>
		</View>
		    </Container>
		);
	}
}

export default AddItemScreen;
