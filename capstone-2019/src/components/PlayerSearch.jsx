/* Player Search Smart Component that will
 *  handle the search bar form and
 * will pass the form results to the Results Page
*/
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class PlayerSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {
		//	query: '',
			results: []
		};

		this.fetchSearch = this.fetchSearch.bind(this);
	};

	async fetchSearch(query) {
		let url = "https://www.balldontlie.io/api/v1/players?search=" + query;

		try
		{
			let { data }  = await axios.get(url);
			this.setState({results: data.data});
		}
		catch(err)
		{
			console.log(err);
		}
	}


	handleChange = (event) => {

		// if the search bar is empty request gibberish from the api, so that
		// the api is not sending its default data
		if(event.target.value === '')
			this.fetchSearch('ababababababab');
		else
        	this.fetchSearch(event.target.value);
	};

	// All of these individual list items representing player objects
	// should link to the Single Player container/view and pass down props
	render() {

		const playerObj = this.state.results;
		const list = playerObj.map((playerObj) =>
			<Link to ={`/player/${playerObj.id}`} key={playerObj.id}>
			<li> {playerObj.first_name + "\n"} {playerObj.last_name + "\n" } </li>
			</Link>
			);

		return (
			<div>
				<form name='PlayerSearch'>
            		<input type='text' name='query' placeholder='Search for a player' onChange={this.handleChange}/>
        		</form>

        		<ul>
					{list}
				</ul>
      		</div>

  		);
	}
};

export default PlayerSearch;
