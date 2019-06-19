import axios from 'axios';
export const ADD_FAVORTIE = 'ADD_FAVORTIE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES'


const addFavorite = (playerID) => {
	return {
		type: ADD_FAVORTIE,
		payload: [] 
	}
};

const deleteFavorite = (playerID) => {
	return {
		type:DELETE_FAVORITE,
		payload: []
	}
}

const fetchFavorites = () => {
	return {
	type:FETCH_FAVORITES,
	payload: []
	}
}
// thunks

export const addFavoriteThunk = (playerID) => (dispatch) => {
	// 
	return dispatch(addFavorite(playerID));
}

export const deleteFavoriteThunk = (playerID) => (dispatch) => {
	return dispatch(deleteFavorite(playerID));
}

export fetchFavoritesThunk = () => (dispatch) => {
	return dispatch(fetchFavorites());
}