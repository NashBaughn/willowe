import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
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

const owedItems = [
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

export default class OwedItemsScreen extends React.Component {
  render() {
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
            <Title>Owed Items</Title>
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
          {/*<List
            dataArray={owedItems}
            contentContainerStyle={{ marginTop:10 }}
            renderRow={data => {
              return (
                <ListItem
                 button
                 onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />*/}
          <List>
            {
              owedItems.map((item, i) => (
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
