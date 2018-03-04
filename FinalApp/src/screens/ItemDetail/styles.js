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
	backgroundColor: '#FBFAFA',
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
    }
});
export default styles;
