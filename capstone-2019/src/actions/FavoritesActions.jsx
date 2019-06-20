import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES'


const addFavorite = (playerID) => {
	return {
		type: ADD_FAVORITE,
		payload: playerID
	}
};

const deleteFavorite = (playerID) => {
	return {
		type: DELETE_FAVORITE,
		payload: playerID
	}
}

const fetchFavorites = (data) => {
	return {
	type: FETCH_FAVORITES,
	payload: data
	}
}
// thunks

export const addFavoriteThunk = (playerID, userId) => (dispatch) => {
	//
		return axios
		.post(`http://localhost:5000/api/users/${userId}/players/${playerID}`, playerID)
		.then(res => res.data)
		.then(playerID => dispatch(addFavorite(playerID)))
        .catch(err => console.log(err));
};

export const deleteFavoriteThunk = (playerID, userId) => (dispatch) => {
	console.log(userId);
	return axios
	.delete(`http://localhost:5000/api/users/${userId}/players/${playerID}`, playerID)
	.then(res => res.data)
	.then(playerID => dispatch(deleteFavorite(playerID)))
	.catch(err => console.log(err));
};

export const fetchFavoritesThunk = (userId) => (dispatch) => {
	console.log('user id ',userId)
	return axios
	.get(`http://localhost:5000/api/users/${userId}/favorites/`)
	.then(res => {

		const favorites = res.data.map(({id}) => id);

		let players = [];

		for(let i = 0; i < favorites.length; i++) {
            console.log('THE LOOP IS RUNNING THE LOOP IS RUNNING THE LOOP IS RUNNING ')
            let curr = favorites[i];

            // stats fetched are for the current (2018-19) season only
            axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${curr}&per_page=100`)

                .then(res => {
                        console.log('RESULT OF API CALL =======>>>', res)
                    // stats are sorted by date because the stats come in with
                    // the games out of order

					console.log('stats is ', res.data.data);
                    const stats = res.data.data.sort((a, b) => {

                        return new Date(b.game.date) - new Date(a.game.date);
                    });
                    //stats[0] = {player: {first_name: 'Bob', last_name: 'Barker'}}
                    let playerName = stats[0].player.first_name + " " + stats[0].player.last_name;

                    // an object is created to give each player their games stats
                    // so that when these stats are outputted, the name of the player
                    // is not displayed each time the stats are mapped
                    const newPlayer = {
                        playerName: playerName,
                        stats: stats
                    };
                    players.push(newPlayer)

					return players;

                })
				.then(players => dispatch(fetchFavorites(players)))
                .catch(err => console.log(err));
        }
	})
	// .then(data => dispatch(fetchFavorites(data)))
	.catch(err => console.log(err));



}
