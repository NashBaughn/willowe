import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import AddItemScreen from "./AddItem.js";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  List,
  ListItem,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

const allItems = [
  {
    title: "Item5"
  },
  {
    title: "Item4"
  },
  {
    title: "Item3"
  }
]

export default class AllItemsScreen extends React.Component {

 render() {
    console.log(allItems)
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>All Items</Title>
          </Body>
          <Right> 
            <Button
                transparent
                onPress={() => this.props.navigation.navigate("AddItem")}
              >
                <Icon name="ios-add" />
              </Button>
          </Right>
        </Header>
        <Content padder>
          <List>
            {
              allItems.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}      
                >
                  <Text>{item.title}</Text>
                </ListItem>
              ))
            }
          </List>

        </Content>
      </Container>
    );
  }
}
