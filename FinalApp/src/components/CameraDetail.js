import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body } from "native-base";
import { FileSystem, FaceDetector } from 'expo';

const pictureSize = 150;

export interface State {}
export default class CameraDetails extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
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
          <Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
        </Content>
      </Container>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#FBFAFA",
  },
});