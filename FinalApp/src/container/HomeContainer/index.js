// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../screens/Home";
import datas from "./data";
import { fetchList } from "./actions";
import {getWillItems, getWillItems2} from '../../boot/firebaseFunctions'
import configureStore from "../../boot/configureStore";
export interface Props {
	navigation: any,
	fetchList: Function,
	getWillItems: Function,
	getWillItems2: Function,
	data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
		fetchRecipes();

		//returned = getWillItems();
		//console.log('returing:::');
		//console.log(returned);

	}

	/**
    * Fetch Data from API, saving to Redux
    */
	
	
	render() {
		return <Home 
				navigation={this.props.navigation} 
				list={this.props.data} 
				/>;
	}
}

async function fetchRecipes() {
	var result1 = await getWillItems()
	var result2 = await getWillItems2()
	console.log(result1)
	console.log(result2)
  }

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
