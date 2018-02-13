import React, { Component } from "react";
import AllItems  from "./AllItemsScreen.js";
import WillItems from "./WillItemsScreen.js";
import OwedItems from "./OwedItemsScreen.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default (HomesScreenNavigator = TabNavigator(
  {
    AllItems:  { screen: props => <AllItems  {...props} /> }, 
    WillItems: { screen: props => <WillItems {...props} /> },   
    OwedItems: { screen: props => <OwedItems {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>

            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("AllItems")}
            >
              <Icon name="bowtie" />
              <Text>All</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("WillItems")}
            >
              <Icon name="briefcase" />
              <Text>Will</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("OwedItems")}
            >
              <Icon name="headset" />
              <Text>Owed</Text>
            </Button>

          </FooterTab>
        </Footer>
      );
    }
  }
));


// import React from "react";
// import { StatusBar } from "react-native";
// import {
//   Button,
//   Text,
//   Container,
//   Card,
//   CardItem,
//   Body,
//   Content,
//   Header,
//   Title,
//   Left,
//   Icon,
//   Right
// } from "native-base";

// export default class HomeScreen extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}
//             >
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>HomeScreen</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content padder>
//           <Card>
//             <CardItem>
//               <Body>
//                 <Text>Chat App to talk some awesome people!</Text>
//               </Body>
//             </CardItem>
//           </Card>
//           <Button
//             full
//             rounded
//             dark
//             style={{ marginTop: 10 }}
//             onPress={() => this.props.navigation.navigate("Chat")}
//           >
//             <Text>Chat With People</Text>
//           </Button>
//           <Button
//             full
//             rounded
//             primary
//             style={{ marginTop: 10 }}
//             onPress={() => this.props.navigation.navigate("ProfileScreen")}
//           >
//             <Text>Goto Profiles</Text>
//           </Button>
           
//         </Content>
//       </Container>
//     );
//   }
// }
