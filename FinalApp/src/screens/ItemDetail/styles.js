import { StyleSheet } from "react-native";
import PixelRatio from "native-base";

const styles: any = StyleSheet.create({
    container: {
	backgroundColor: "#FBFAFA",
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
