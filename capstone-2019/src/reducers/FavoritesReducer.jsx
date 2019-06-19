import {ADD_FAVORITE, DELETE_FAVORITE,FETCH_FAVORITES} from '../actions/FavoritesActions';

const initialState = {
	favorites:[]
};


function favoriteReducer(state = initialState, action)
{
	switch(action.type) {
		case ADD_FAVORITE: {
			return {
				...state,
				favorites: state.favorites.concat(action.payload)
			}
		}
		case DELETE_FAVORITE: {
			return {
				...state,
				favorites: state.favorites.filter(favorites => favorites !== action.payload),
			}
		}
		case FETCH_FAVORITES: {
			return {
			...state,
			favorites: action.payload
		}
	}
}
}
export default FavoritesReducer;