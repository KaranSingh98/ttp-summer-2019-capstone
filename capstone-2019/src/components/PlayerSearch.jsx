/* Player Search Smart Component that will 
 *  handle the search bar form and 
 * will pass the form results to the Results Page
*/ 
import React, {Component} from 'react';

class PlayerSearch extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			searchResult : ''
		};
	};


	handeSubmit = (event) => {
		// handle submit should send the search text to
		// either the API or the database
		// Will be implemented with redux thunk?
	};

	handleChange = (event) => {
        this.setState({ 
        	[event.target.name]: event.target.value 
        })

	};

	render() {
		return(
		<div>
		<form name='PlayerSearch'>
            <input type='text' name='searchResult' placeholder='Search for a player' value={this.state.searchResult} onChange={this.handleChange}/>
        </form>
               <button type="submit" onClick={this.handleSubmit}> Submit </button>
      </div>
  			)}
};

export default PlayerSearch;