import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
    container: {
	backgroundColor: "#FBFAFA",
    },
    buttonContent: {
	flex:1,
	flexDirection: 'column',
	justifyContent: 'center'
    }, 
    content: {
	flex:1,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#FBFAFA'
    },
    textTitle: {
	textAlign: "center",
	fontWeight: "bold"
    },
    text: {
	textAlign: "center"
    }
});
export default styles;
