import * as React from "react";
import ItemDetailScreen   from "../../screens/ItemDetail";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ItemDetailContainer extends React.Component<Props, State> {
	render() {
		return <ItemDetailScreen navigation={this.props.navigation} />;
	}
}

