const initialState = {
	list: [],
	fireList: [],
	fireLoading: true,
	isLoading: true,
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === "FIRE_IS_LOADING") {
		return {
			...state,
			fireLoading: action.fireLoading,
		};
	}
	if (action.type === "FIRELIST_IS_LOADING") {
		var lister = []
		for (var key in action.data){
			if (action.data.hasOwnProperty(key)){
				lister.push(action.data[key])
			}
		}
		return {
			...state,
			fireList: lister,
			fireLoading: false
		};
	}
	return state;
}
