import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo from "expo";

import * as FirebaseModule from 'firebase';
import firebaseConfig from './src/constants/firebase.js';

import HomeScreen from "./src/HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount(){
    const {
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId,
    } = firebaseConfig;
    
    let firebaseInitialized = false;
    
    if (
      apiKey !== 'null' &&
      authDomain !== 'null' &&
      databaseURL !== 'null' &&
      storageBucket !== 'null' &&
      messagingSenderId !== 'null'
    ) {
      FirebaseModule.initializeApp({
        apiKey,
        authDomain,
        databaseURL,
        storageBucket,
        messagingSenderId,
      });
    
      firebaseInitialized = true;
    }
    
    const FirebaseRef = firebaseInitialized ? FirebaseModule.database().ref() : null;
    const Firebase = firebaseInitialized ? FirebaseModule : null;
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}
