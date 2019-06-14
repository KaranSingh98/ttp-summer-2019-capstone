/* Player Search Smart Component that will 
 *  handle the search bar form and 
 * will pass the form results to the Results Page
*/ 
import React, {Component} from 'react';

class PlayerSearch extends Component {
	constructor(){
		super();
		
		this.state = {
			searchResults: ""
		}
		this.baseState = this.state;
	}


	handeSubmit = (event) =>
	{
		event.preventDefault();
		[event.target] = event.target.value
	}

	}

	render() {
		return()



	}







};

export default PlayerSearch