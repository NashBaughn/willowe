// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../screens/Home";
import datas from "./data";
import { fetchList } from "./actions";
import {getWillItems} from '../../boot/firebaseFunctions'
import configureStore from "../../boot/configureStore";
export interface Props {
	navigation: any,
	fetchList: Function,
	fetchFire: Function,
	getWillItems: Function,
	data: Object
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {

	componentDidMount() {
		this.props.fetchList(datas);
		this.props.fetchFire();
		//fetchWillItems(this.props.loadItems);
		//console.log('props')
		//console.log(this.props)
		//console.log(this.props.fireList)

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
/*
async function fetchWillItems(callback) {
	var result = await getWillItems()
	//console.log(result)
	//callback(result)
	 }
*/

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
		fetchFire: url => dispatch(getWillItems())
	};
}



const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
	fireList: state.homeReducer.fireList,
	fireLoading: state.homeReducer.fireLoading
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
