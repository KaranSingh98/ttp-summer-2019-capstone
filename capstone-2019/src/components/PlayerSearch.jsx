/* Player Search Smart Component that will 
 *  handle the search bar form and 
 * will pass the form results to the Results Page
*/ 
import React, {Component} from 'react';
import PlayeSearchView from './PlayerSearchView';

class PlayerSearch extends Component {
	constructor(){
		super();
		
		this.state = {
			searchResult: ""
		}
		this.baseState = this.state;
	}


	handeSubmit = (event) =>
	{
		event.preventDefault();
		[event.target.name] = event.target.value;
	}

	render() {
		return(
			<PlayeSearchView search={this.state.searchResult} onSubmit={this.handleSubmit};
			)
	}

	}
};

export default PlayerSearch