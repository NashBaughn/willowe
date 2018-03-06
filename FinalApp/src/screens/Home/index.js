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


import { connect } from 'react-redux';
import store from "../../boot/configureStore"
import Item from "../../components/item"; 
import { Firebase, FirebaseRef } from '../../boot/firebaseSetup';

import styles from "./styles";
export interface Props {
  navigation: any;
}

const testList = [
    {
	route: "ItemDetail",
	caption: "Dope ass jacket",
	toWho: "Nash",
	date : "2019-03-06",
	image: "https://cf.ltkcdn.net/garden/images/std/214031-675x450-weeping-willow-tree.jpg",
	sender: "weichi",
	status: "received"
    }
];
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
    itemList: [];
}
class Home extends React.Component<Props, State> {
    state = {
	displayData: "all"
    }

    updateItems(items){
      console.log('working')
      console.log(items)
    }
    constructor(props) {
	super(props);
	this.state.itemList = this.props.fireList;
    }
    
    changeList(list) {
	this.setState({displayList: {list}});
	console.log(Firebase.auth().currentUser.email);
	this.state.itemList = [];
	if (list == "all") {
	    this.state.itemList = this.props.fireList;
	} else {
	    for (let index = 0; index < this.props.fireList.length; index++) {
		if(list == "received" &&
		   this.props.fireList[index].receiverEmail == Firebase.auth().currentUser.email ||
		  list == "sent" &&
		   this.props.fireList[index].senderEmail == Firebase.auth().currentUser.email) {
		    this.state.itemList.push(this.props.fireList[index]);
		}
	    }
	}
    }
    renderList() {

	return (
		<Card>
		<List
            dataArray={this.state.itemList}
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
	onPress={() => this.props.navigation.navigate("Camera")} />
	    </Button>
	    </Right>
        </Header>
        
            <Content style={{flex:1}}>
            {this.renderList()}
            </Content>
	    <Footer>
	    <FooterTab>

            <Button
              vertical
        onPress={() => this.changeList("all")}
            >
              <Icon name="bowtie" />
              <Text>All</Text>
            </Button>
            <Button
              vertical
        onPress={() => this.changeList("received")}
            >
              <Icon name="briefcase" />
              <Text>Will</Text>
            </Button>
            <Button
              vertical
        onPress={() => this.changeList("sent")}
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
const mapStateToProps = state => ({
    fireList: state.homeReducer.fireList,
    fireLoading: state.homeReducer.fireLoading
});



export default connect(mapStateToProps)(Home);
