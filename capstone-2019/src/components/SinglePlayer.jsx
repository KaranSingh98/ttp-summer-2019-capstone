import React, {Component} from 'react';
import axios from 'axios';
import {teamObject} from './teams.js'
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
			id: this.props.params.id, //no longer dummy data
			stats: [], //state for player game info per game
			gameID: "48760", //dummy gameID

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
			// console.log("game info", response.data.data)
			const result = response.data.data.map(gameInfo => {
				const visitorId = gameInfo.game.visitor_team_id
				const homeTeam = teamObject.data.find(elem => elem.id === gameInfo.game.home_team_id)
				const teamInfo = teamObject.data.find(elem => elem.id === visitorId)
				gameInfo.game.visitorInfo = teamInfo
				gameInfo.game.homeInfo = homeTeam
				return gameInfo;
			})
			console.log('Updated Game Info', result)

			const gameIDs = result.map(gameStats => gameStats.game.id) //specifies location of data to set 
			console.log(gameIDs)
			
			this.setState({stats: result}); //sets the state for result and gameIDs (gameIDs takes the mapped)
			
		})
	};

	//instead of double axios call to get game info from player stat
	//have a seperate state that stores all the teams with there approriate team ID

	render() {

		console.log("this is the state", this.state)

		return(
			<div>
				<button onClick={
					() =>{this.fetchSinglePlayerStats();}
				}>Lebron</button>
				
				{console.log(this.state.games, "games")}	
				

				{this.state.stats.map(pass => 
					(<div>
						<br></br>
						{/*
							https://www.balldontlie.io/api/v1/games/<ID>
							Need to passed by Database since it uses ID
							Home team vs Visitor team
							Score: Pts (Home) vs Pts (Visitor)
							UPDATE: Just call again with a different state
							To display Lebron stats, make another axios call and skip player after looping once
						*/}

						Game Date: {pass.game.date} <br></br>
						{pass.game.homeInfo.full_name}:	{pass.game.home_team_score} <br></br>
						{pass.game.visitorInfo.full_name}: {pass.game.visitor_team_score} <br></br>
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