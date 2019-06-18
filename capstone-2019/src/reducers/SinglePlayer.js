import React, {Component} from 'react';
import axios from 'axios';
//import {connect} from 'react-redux';

//database and redux store will handle calling this component
//this should be called as many times as a player needs to be called
//need to get player name/ID from SearchResult component
//take ID and fetch stats for player from latest season
//result should display the stats

class SinglePlayer extends Component {
	constructor() {
		super()
		this.state = {
			id: "237", //dummy data for now
			stats: ""
		}
	}

	//function for fetching statistics from API
	fetchSinglePlayerStats = async() => {

	const url = "https://www.balldontlie.io/api/v1/stats";
	const query = "?seasons[]=2018&player_ids=";

	//database passed id for a single specific player
	//let id = this.props.player
	let response = await axios.get(url + query + this.state.id);
	console.log(response);

	//get rid of this later too
	this.setState({stats: response.data})
	console.log(this.state);

	};

	render() {

		//function for displaying stats
			//fill in later

		return(
			<div>
				{this.state.stats}
			</div>
		)
	}
}

export default SinglePlayer;

//after setting up redux store
//export default connect() (SinglePlayer);