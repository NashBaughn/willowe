import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
	},
	contentContainer: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	    flex: 1
	},
	avatarContainer: {
	    borderColor: '#9B9B9B',
	    borderWidth: 1 / PixelRatio.get(),
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	avatar: {
	    borderRadius: 775,
	    width: 150,
	    height: 150
	}
});
export default styles;
