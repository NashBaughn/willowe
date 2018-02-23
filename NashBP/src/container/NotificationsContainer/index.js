import * as React from "react";
import NotificationsScreen from "../../screens/Notifications";
import { connect } from "react-redux";
import { fetchList } from "./actions";
export interface Props {
    navigation: any,
    fetchList: Function,
    data: Object,
}
export interface State {}
export class NotificationsContainer extends React.Component<Props, State> {

    render() {
	return <NotificationsScreen navigation={this.props.navigation}/>;
    }
    componentDidMount() {
	{/*fetchlist url*/}
	this.props.fetchList('');
    }
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
export default connect(mapStateToProps, bindAction)(NotificationsContainer);




