
import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
    container: {
	flex:1,
	backgroundColor: "#FBFAFA",
    },
    content: {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F0F8FF',
    },
    textTitle: {
	textAlign: "center",
	fontWeight: "bold"
    },
    text: {
	textAlign: "center"
    },
    textBlock: {
	flex:1,
	textAlign: "center",
    },
    imageStyle: {
	flex: 4,
	height:undefined,
	width: undefined,
	alignSelf: 'stretch'
    },
    buttonsBlock: {
	flex: 2,
	flexDirection: 'row',
	justifyContent: 'space-around',
    }
});
export default styles;
