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
    }
];

export interface State {   
}
class Home extends React.Component<Props, State> {
    state = {
	displayData: "all"
    }

    updateItems(items){
      console.log('working')
      console.log(items)
    }

    

    renderList() {
      console.log(this.props)
  return 
  (
    
	  <Card>
            <List
        dataArray={this.props.fireLoading ? this.props.fireList : itemList}
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
            <Title>Home: {this.props.fireLoading}</Title>
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
const mapStateToProps = state => ({
  fireList: state.homeReducer.fireList,
	fireLoading: state.homeReducer.fireLoading
});



export default connect(mapStateToProps)(Home);
