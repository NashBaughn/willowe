import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';



export default class App extends React.Component {
  state = {
      email: '',
      password: '',
      authenticating: false,
      user: null,
      uid: null,
      error: ''

    }

    componentWillMount() {
      const firebaseConfig = {
        apiKey: "AIzaSyAKGLo91z79OolsDdrDtb50rdNuLmZEKZA",
        authDomain: "willowtest-dffcf.firebaseapp.com",
        databaseURL: "https://willowtest-dffcf.firebaseio.com",
        projectId: "willowtest-dffcf",
        storageBucket: "willowtest-dffcf.appspot.com",
        messagingSenderId: "1051606962410"
      }

      firebase.initializeApp(firebaseConfig);
      this.setState({
      authenticating: true,
    });



    }
    onPressLogin(){
     const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => this.setState({
          authenticating: false,
          user,
          error: '',
          status:'1'
        }))
        .catch(() => {
          error: 'Authentication Failure'
        })

    }

    onPressCreateAcc(){
      this.setState({
        status : '2'
      })
    }

    onPressCreate(){


    }
  renderCurrentState() {

        if(this.state.status == '1'){
          return (
        <View style={styles.form}>
        <Text>"HI"</Text>

        </View>
        )
      }
      if(this.state.status == '2'){




        <Button onPress = {() => this.onPressCreate()}>Create Account</Button>

      }


         return (
        <View style={styles.form}>
          <Input
            placeholder='Enter your email'
            label='email'
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <Input
            placeholder='Enter your password'
            label='password'
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <Button onPress={() => this.onPressLogin()}>Login</Button>

          <Button onPress={() => this.onPressCreateAcc()}>Create Account</Button>


        </View>
      )
}
  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});
