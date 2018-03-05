import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Container, Header, Title, Content, Button, Form, Item, Label, Input, Icon, Left, Right, Body } from "native-base";
import { FileSystem, FaceDetector } from 'expo';
import {addItem} from "../../boot/firebaseFunctions";
import AwesomeAlert from 'react-native-awesome-alerts';

const pictureSize = 150;


export interface State {}
export default class CameraDetails extends React.Component<Props, State> {
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
    state = {
	showAlert: false,
	faces: {},
	images: {},
	photos: [],
    };
  
  _mounted = false;
  
  componentDidMount() {
    console.log("did mount")
    this._mounted = true;
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory + 'photos').then(photos => {
      if (this._mounted) {
        this.setState(
          {
            photos,
          },
          this.detectFaces
        );
      }
    });
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  getImageDimensions = ({ width, height }) => {
    if (width > height) {
      const scaledHeight = pictureSize * height / width;
      return {
        width: pictureSize,
        height: scaledHeight,

        scaleX: pictureSize / width,
        scaleY: scaledHeight / height,

        offsetX: 0,
        offsetY: (pictureSize - scaledHeight) / 2,
      };
    } else {
      const scaledWidth = pictureSize * width / height;
      return {
        width: scaledWidth,
        height: pictureSize,

        scaleX: scaledWidth / width,
        scaleY: pictureSize / height,

        offsetX: (pictureSize - scaledWidth) / 2,
        offsetY: 0,
      };
    }
  };

  detectFaces = () => this.state.photos.forEach(this.detectFace);

  detectFace = photoUri =>
    FaceDetector.detectFacesAsync(`${FileSystem.documentDirectory}photos/${photoUri}`, {
      detectLandmarks: FaceDetector.Constants.Landmarks.none,
      runClassifications: FaceDetector.Constants.Classifications.all,
    })
      .then(this.facesDetected)
      .catch(this.handleFaceDetectionError);

  facesDetected = ({ image, faces }) => {
    if (!this._mounted) return;
    this.setState({
      faces: { ...this.state.faces, [image.uri]: faces },
      images: { ...this.state.images, [image.uri]: image },
    });
  }

  handleFaceDetectionError = error => console.warn(error);

  renderFaces = photoUri =>
    this.state.images[photoUri] &&
    this.state.faces[photoUri] &&
    this.state.faces[photoUri].map(this.renderFace(this.state.images[photoUri]));

  renderFace = image => (face, index) => {
    const { scaleX, scaleY, offsetX, offsetY } = this.getImageDimensions(image);
    const layout = {
      top: offsetY + face.bounds.origin.y * scaleY,
      left: offsetX + face.bounds.origin.x * scaleX,
      width: face.bounds.size.width * scaleX,
      height: face.bounds.size.height * scaleY,
    };

    return (
      <View
        key={index}
        style={[styles.face, layout]}
        transform={[
          { perspective: 600 },
          { rotateZ: `${(face.rollAngle || 0).toFixed(0)}deg` },
          { rotateY: `${(face.yawAngle || 0).toFixed(0)}deg` },
        ]}>
      </View>
    );
  };

  

	handleChange = (name, val) => {
		//console.log('change');
		//console.log(this.state);
		this.setState({
		  ...this.state,
		  [name]: val,
		});
	}

    submit = () => {
	this.hideAlert();
		//console.log('submitting');
    addItem(this.state);
    console.log(this.props.navigation)
    this.props.navigation.navigate("Home");
    
	}

  render() {
    const param = this.props.navigation.state.params;
    console.log(this.state.photos[0]);
    const photoUri = this.state.photos[0];
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
              <Text> Retake</Text>
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Photo Detail</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <View>           

            <View style={styles.pictures}>
              <View style={styles.pictureWrapper} >
                <Image
                  key={photoUri}
                  style={styles.picture}
                  source={{
                    uri: `${FileSystem.documentDirectory}photos/${photoUri}`,
                  }}
                />
                <View style={styles.facesContainer}>
                  {this.renderFaces(`${FileSystem.documentDirectory}photos/${photoUri}`)}
                </View>
              </View>
              <View style={styles.content}>

      <Content padder>
     
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

            <Button block onPress={() => this.showAlert()}>
          <Text>Submit</Text>
          </Button>

        </Form>
        </Content>
    </View>
            </View>

          </View>          
            </Content>
	    <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Confirmation"
          message="Are you sure the information is correct?"
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

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#FBFAFA",
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width : 300,
    height: 300,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    fontSize: 20,
    backgroundColor: 'transparent',
  },
});
