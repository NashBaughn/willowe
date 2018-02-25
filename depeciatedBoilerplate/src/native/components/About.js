import React from 'react';
import { Container, Text, ListItem, Body, Left, Content, H1, H2, H3, Button, Icon } from 'native-base';
import { AppRegistry, TextInput, View } from 'react-native';
import Spacer from './Spacer';
import { Actions } from 'react-native-router-flux';
//const ActionButton = require('./components/ActionButton');

const About = () => (
  <Content padder>
    <Spacer size={30} />
    <H1>Who Are We</H1>
    <Spacer size={5} />
    <Text>We are students who decided it should be easier to promise someone to give them shit. This is a project for CMPS 119 Software for Society</Text>

    <Spacer size={30} />
    <H2>What Are You Doing Here</H2>
    <Spacer size={5} />
    <Text>In this app you will be able to promise to give items to other users in the future. This is not a binding contract.</Text>

    <Spacer size={30} />
    <H2>Legal</H2>
    <Spacer size={5} />
    <Text>Willowe is not a law firm, we are not responsible for any damages of use or misuse of this software.  Willowe is meant to provide a statement of final wishes, we do not make any claims of legality of service.  We recommend you see an attorney to create a legal will, the law is highly complex and professionals should be sought out to make decisions on the law.  Willowe is not intended for public or commercial use and should not be released, it does not provide any guarantee of services.  Willowe is part of an educational exercise and should not be mistaken for a marketable product.  All lawful responsibilities lay with the user of this software.</Text>
    <Spacer size={20} />
  </Content>
);

export default About;
