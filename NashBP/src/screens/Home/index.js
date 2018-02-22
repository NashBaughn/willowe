import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  Card
} from "native-base";

import Item from "../../components/item.js"; 

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}

const itemList = [
  {
    route: "ItemDetail",
    caption: "Dope ass jacket",
    toWho: "Nash",
    date : "2019-03-06"
  },
  {
    route: "ItemDetail",
    caption: "Bike",
    toWho: "Tim",
    date : "2019-06-02"
  },
  {
    route: "ItemDetail",
    caption: "Bong",
    toWho: "Riise",
    date : "2019-01-09"
  },
  {
    route: "ItemDetail",
    caption: "My child",
    toWho: "James",
    date : "2019-03-06"
  },
  {
    route: "ItemDetail",
    caption: "Cool car",
    toWho: "Jim",
    date : "2019-06-02"
  },
  {
    route: "ItemDetail",
    caption: "Copmuter",
    toWho: "Jimothy",
    date : "2019-01-09"
  }
];

export interface State {}
class Home extends React.Component<Props, State> {

  
  render() {

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <Card>
            <List
              dataArray={itemList}
              renderRow={data => {
                return (
                  <Item navigation={this.props.navigation} data={data}/>
                );
              }}
            />      
          </Card>  
        </Content>
      </Container>
    );
  }
}

export default Home;
