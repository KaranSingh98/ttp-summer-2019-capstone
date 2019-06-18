import axios from 'axios';
export const ADD_FAVORTIE = "ADD_FAVORTIE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";


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

// thunks