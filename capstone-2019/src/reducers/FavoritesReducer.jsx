import {ADD_FAVORITE, DELETE_FAVORITE, FETCH_FAVORITES} from '../actions/FavoritesActions';

// const initialState = [];


function favoriteReducer(state = [],
	action)
{
	//console.log("received action", action.type)

	switch(action.type) {
		case ADD_FAVORITE:
			return [...state, action.payload.playerId]
		case DELETE_FAVORITE:
			return state = state.filter(state => state !== action.payload.playerId)
		case FETCH_FAVORITES:
			return [
				...state,
				action.payload
			];

	default:
		return state
}
}
export default favoriteReducer;