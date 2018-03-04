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
    FooterTab,
  Footer, 
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
    owed: any;
    will: any;
}

const testList = [];
const itemList = [
    {
	route: "ItemDetail",
	caption: "Dope ass jacket",
	toWho: "Nash",
	date : "2019-03-06",
	image: "https://cf.ltkcdn.net/garden/images/std/214031-675x450-weeping-willow-tree.jpg",
	sender: "weichi",
	status: "received"
    },
    {
	route: "ItemDetail",
	caption: "Bike",
	toWho: "Tim",
	date : "2019-06-02",
	image: "",
	sender: "weichi",
	status: "sent"
    },
    {
	route: "ItemDetail",
	caption: "Bong",
	toWho: "Riise",
	date : "2019-01-09",
	image: "",
	sender: "",
	status: ""
    },
    {
	route: "ItemDetail",
	caption: "My child",
	toWho: "James",
	date : "2019-03-06",
	image: "",
	sender: "",
	status: ""
    },
    {
	route: "ItemDetail",
	caption: "Cool car",
	toWho: "Jim",
	date : "2019-06-02",
	image: "",
	sender: "",
	status: ""
    },
    {
	route: "ItemDetail",
	caption: "Copmuter",
	toWho: "Jimothy",
	date : "2019-01-09",
	image: "",
	sender: "",
	status: ""
    }
];

export interface State {   
}
class Home extends React.Component<Props, State> {
    state = {
	displayData: "all"
    }
    renderList() {
	console.log(this.state.displayData);
	return (
	    <Card>
            <List
        dataArray={this.state.displayData == "all" ? itemList : testList}
              renderRow={data => {
                return (
			<Item navigation={this.props.navigation} data={data} />
                );
              }}
            />      
          </Card>  
	);
    }
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
            <Right>
	    <Button transparent>
	    <Icon
	active
	name="ios-add"
	onPress={() => this.props.navigation.navigate("AddItem")} />
	    </Button>
	    </Right>
        </Header>
        
        <Content>
            {this.renderList()}
            </Content>
	    <Footer>
	    <FooterTab>

            <Button
              vertical
        onPress={() => this.setState({displayData: "all"})}
            >
              <Icon name="bowtie" />
              <Text>All</Text>
            </Button>
            <Button
              vertical
        onPress={() => this.setState({displayData: "received"})}
            >
              <Icon name="briefcase" />
              <Text>Will</Text>
            </Button>
            <Button
              vertical
        onPress={() => this.setState({displayData: "sent"})}
            >
              <Icon name="headset" />
              <Text>Owed</Text>
            </Button>
	    
        </FooterTab>
	    </Footer>
      </Container>
    );
  }
}

export default Home;
