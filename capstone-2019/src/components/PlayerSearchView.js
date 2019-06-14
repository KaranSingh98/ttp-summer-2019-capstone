/* PlayerSearchView
 * The View component of the SearchBar to be displayed
 * on the navbar. 
*/ 

import PlayerSearch from './PlayerSearch'
const PlayerSearchView = props => {
    return(
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchResult" placeholder="Search for a player" />
      </form>}	
      )
}