import React, {Component} from 'react';
import axios from 'axios';
import {teamObject} from './teams'

//passes in ID through react-routing, which will be used as a state and passes as a parameter

class SinglePlayer extends Component {
	constructor() {
		super()
		this.state = {
			id: this.props.params.id, //no longer dummy data
			stats: [], //state for player game info per game
			info:[], //player info
			gameID: "48760" //dummy gameID
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

	fetchPlayerInformation = () => {
		const url = "https://www.balldontlie.io/api/v1/players/"

		axios.get(url + this.state.id)
			.then(response => {
				console.log(response)
				let result = response.data
				this.setState({info: [result]});

			})

	}

	//instead of double axios call to get game info from player stat
	//have a seperate state that stores all the teams with there approriate team ID

	render() {

		console.log("this is the state", this.state)

		return(
			<div>

				{this.fetchSinglePlayerStats()} {/* fetches player stats for games*/}
				{this.fetchPlayerInformation()} {/* fetches general player information */}

				{this.state.info.map(pass => 
					<div>
						
						{pass.first_name} {pass.last_name} <br></br>
						Height: {pass.height_feet}' {pass.height_inches}" <br></br>
						Weight: {pass.weight_pounds} <br></br>
						<br></br>
						Team: {pass.team.full_name} | {pass.team.conference} Conference <br></br>
						Position: {pass.position} <br></br>

					</div>
				)}

				{this.state.stats.map(pass => 
					(<div>
					
						<br></br>
						Game Date: {pass.game.date} <br></br>
						{pass.game.homeInfo.full_name}:	{pass.game.home_team_score} <br></br>
						{pass.game.visitorInfo.full_name}: {pass.game.visitor_team_score} <br></br>
						Points: {pass.pts}<br></br>
						Rebounds: {pass.dreb}<br></br>
						Assists: {pass.ast}<br></br>
						Field Goal %: {pass.fg_pct}<br></br>
						Blocks: {pass.blk}<br></br>
						Free Throw %: {pass.ft_pct} <br></br>

					</div>)
				)}
			</div>
		)
	}
}

export default SinglePlayer;