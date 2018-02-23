import * as React from "react";
import NotificationDetailScreen   from "../../screens/NotificationDetail";
export interface Props {
    navigation: any,
}
export interface State {}
export default class NotificationDetailContainer extends React.Component<Props, State> {
    submit(action){
	{/*user accept/decline the item*/}
	console.log(action);
    }
    render() {
	return <NotificationDetailScreen navigation={this.props.navigation} submit={this.submit}/>;
    }
}
