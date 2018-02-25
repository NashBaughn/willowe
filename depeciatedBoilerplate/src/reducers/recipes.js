import Store from '../store/recipes';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVOURITES_REPLACE': {
      return {
        ...state,
        favourites: action.data || [],
      };
    }
    case 'MEALS_REPLACE': {
      return {
        ...state,
        error: null,
        loading: false,
        meals: action.data,
      };
    }
    case 'RECIPES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'RECIPES_REPLACE': {
      let recipes = [];

      // Pick out the props I need
      //console.log(recipes)
      //console.log(action)
      //console.log("here")
      if (action.data && typeof action.data === 'object') {
        for (var key in action.data){
          //console.log(key)
          if(action.data[key] != null){
            item = action.data[key];
            cutItem = 
              {
                id: item.id,
                title: item.itemName,
                body: item.itemDesc,
                category: "1",
                image: "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
                lastName: item.lastName,
                firstName: item.firstName,
                email: item.email
              }
            recipes.push(cutItem);
            }
          }
          //console.log(recipes)
        }
      

      return {
        ...state,
        error: null,
        loading: false,
        recipes,
      };
    }
    default:
      return state;
  }
}
