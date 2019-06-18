import {ADD_FAVORITE, DELETE_FAVORITE} from '../actions/SignUpActions';

const initialState = {
	favorites:[]
}


function favoriteReducer(state = initialState, action {
	switch(action.type) {
		case ADD_FAVORITE: {
			return {
				...state,
				favorites: state.favorites.concat(action.item)
			}
		}
		case DELETE_FAVORITE: {
			return {
				...state,
				favorites: state.favoritess.filter(favorites => favorites !== action.payload),
			}
		}
	}
})