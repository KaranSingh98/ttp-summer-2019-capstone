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
			stats: [],
			gameID: "48760",
			games: []

		}
	}

	//function for fetching statistics from API
	fetchSinglePlayerStats = () => {

	const url = "https://www.balldontlie.io/api/v1/stats";
	const query = "?seasons[]=2018&player_ids[]=";

	//database passed id for a single specific player
	//let id = this.props.player
	axios.get(url + query + this.state.id)
		.then(response => {
			//console.log(response.data)
			const result = response.data.data // ./data
			//const gameIDs = response.data.data.game 
			this.setState({stats: result});
			//this.setState({games: gameIDs});

			//console.log(this.state.games);
		})
	};

	//double axios call to get gameid from player stats axios call
	fetchGameStats = () => {
		
		const url = "https://www.balldontlie.io/api/v1/games/";

		axios.get(url)
			.then(response => {
				//console.log(response.data)
				const result = response.data.data
				this.setState({games: result});
			})


	}

	render() {

		//function for displaying stats
			//fill in later

		return(
			<div>
				<button onClick={
					() =>{this.fetchSinglePlayerStats(); this.fetchGameStats();}
				}>Lebron</button>
				
				{console.log(this.state.games, "games")}	
				
				{this.state.games.map(pass => 
					(<div>
						{pass.home_team.full_name}:	{pass.home_team_score} <br></br>
						{pass.visitor_team.full_name}: {pass.visitor_team_score} <br></br>
					</div>)
				)}

				{this.state.stats.map(pass => 
					(<div>
						<br></br>
						Game Date: {pass.game.date}<br></br>
						{/*
							https://www.balldontlie.io/api/v1/games/<ID>
							Need to passed by Database since it uses ID
							Home team vs Visitor team
							Score: Pts (Home) vs Pts (Visitor)

							UPDATE: Just call again with a different state

							To display Lebron stats, make another axios call and skip player after looping once

						*/}
						Points: {pass.pts}<br></br>
						Rebounds: {pass.dreb}<br></br>
						Assists: {pass.ast}<br></br>
						Field Goal %: {pass.fg_pct}<br></br>  
						Blocks: {pass.blk}<br></br>
					</div>)
				)}
			</div>
		)
	}
}

export default SinglePlayer;

//after setting up redux store
//export default connect() (SinglePlayer);