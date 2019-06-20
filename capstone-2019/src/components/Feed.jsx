import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {teamObject} from './teams';
import {fetchFavoritesThunk} from '../actions/FavoritesActions';


const mapStates = (state) => {

    return {
        playersInfo: state.favoriteReducer,
        user: state.loginReducer.user
    };

}; // end of mapStates

const mapDispatch = (dispatch) => {

    return {
        fetchFavorites: (id) => {
            dispatch(fetchFavoritesThunk(id));
        }
    };

} // end of mapDispatch


class Feed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playersInfo: []
        }

    }; // end of constructor


    componentDidMount() {
        // this.props.fetchFavorites(this.props.user.id)
        // const favorites = this.props.favorites;
        // const favorites = [274,238]
        // await this.getPlayerInfo(favorites);
        // console.log('user is ', this.props.user.id)
        console.log('Component did mount')
        this.props.fetchFavorites(this.props.user.id);
        this.setState({
            playersInfo: this.props.playersInfo
        })
    }; // end of componentDidMount

    componentDidUpdate = (prevProps) => {

        if(prevProps !== this.props) {
        this.setState({
            playersInfo: this.props.playersInfo
        })
    }
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log("Component UPDATEED")
    //     // if(prevProps.favorites !== this.props.favorites) {
    //     //     const favorites = this.props.favorites
    //     //     this.getPlayerInfo(favorites);
    //     // console.log('cur props', this.state.favorites);
    //     // console.log('prev props ', prevProps.favorites);
    //     // // this.getPlayerInfo()
    //     //
    //     // }
    //     console.log('STATE', this.state.favorites)
    //     console.log('PROPS',this.props.favorites);
    //     console.log("PREVPROPS",prevProps.favorites)
    //     if(this.state.favorites.length !== this.props.favorites.length) {
    //     this.setState({
    //         favorites: this.props.favorites
    //     })
    // }
    // }




    // fecthes the stats of the players favorited by the user
    //  getPlayerInfo = async () => {
    //     // console.log('USER ID', this.props.user.id)
    //     await this.props.fetchFavorites(this.props.user.id)
    //     // console.log('favs are ', this.props.favorites)
    //     console.log("Fetch player info")
    //     const favorites = this.props.favorites;
    //     const players = []
    //     // have to go through each favorites player ID individually due to API constraints
    //     for(let i = 0; i < favorites.length; i++) {
    //         console.log('THE LOOP IS RUNNING THE LOOP IS RUNNING THE LOOP IS RUNNING ')
    //         let curr = favorites[i];
    //
    //         // stats fetched are for the current (2018-19) season only
    //         axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${curr}&per_page=100`)
    //
    //             .then(res => {
    //                     console.log('RESULT OF API CALL =======>>>', res)
    //                 // stats are sorted by date because the stats come in with
    //                 // the games out of order
    //                 const stats = res.data.data.sort((a, b) => {
    //
    //                     return new Date(b.game.date) - new Date(a.game.date);
    //                 });
    //                 //stats[0] = {player: {first_name: 'Bob', last_name: 'Barker'}}
    //                 let playerName = stats[0].player.first_name + " " + stats[0].player.last_name;
    //
    //                 // an object is created to give each player their games stats
    //                 // so that when these stats are outputted, the name of the player
    //                 // is not displayed each time the stats are mapped
    //                 const newPlayer = {
    //                     playerName: playerName,
    //                     stats: stats
    //                 };
    //                 players.push(newPlayer)
    //                 this.setState({playersInfo: players})
    //             //
    //             //
    //             })
    //             .catch(err => console.log(err));
    //     }
    //     console.log('NEW PLAYERS', players)
    //     // await this.setState({
    //     //     playersInfo: players
    //     // });
    //
    // } // end of getPlayerInfo


    // returns the opposing team faced by the player in a particular game
    getTeam = (playerTeamId, homeTeamId, awayTeamId) => {

        const teams = teamObject.data;

        for(let i = 0; i < teams.length; i++) {
            if(playerTeamId == homeTeamId && teams[i].id == awayTeamId)
                return teams[i].full_name;
            else if(playerTeamId == awayTeamId && teams[i].id == homeTeamId)
                return teams[i].full_name;
        }

    } // end of getTeam


    // returns a nicer looking date, as opposed to the one from the API
    getDate = (date) => {
        const newDate = new Date(date);

        return newDate.toDateString();

    } // end of getDate


    render() {
        console.log('NEW RENDER', this.props)
        return (

            <div className='FeedRender'>

                <h1> Feed </h1>

                <hr/>

                {/* if the user is logged in or not */}
                {this.props.user.id && this.props.playersInfo[0] ? (

                    <div>
                    <p> FEED IS HERE </p>
                    {console.log('player info is ', this.props.playersInfo)}
                        {this.props.playersInfo[0].map(player =>
                            <div >
                            {console.log('player is ', player)}

                                <h3> {player.playerName} </h3>

                                <Link to= {`player/${player.stats[0].player.id}`}>
                                    View More
                                </Link>

                                {/* map only the 5 most recent games */}
                                {player.stats.slice(0, 5).map(stat =>

                                    <div key={stat.game.id}>

                                        <h4>
                                            Against: {this.getTeam(stat.team.id,
                                            stat.game.home_team_id, stat.game.visitor_team_id)} on
                                            {" "} {this.getDate(stat.game.date)}
                                        </h4>

                                        <p> Points Scored: {stat.pts} </p>

                                    </div>
                                )}
                                <hr/>

                            </div>
                        )}

                    </div>

                ) : (

                    <div>
                        <h3> PLEASE LOGIN TO SEE YOUR FEED </h3>
                        <h4> If you don't have an account, you can click here to
                            <Link to='/signUp'> sign up </Link>
                        </h4>
                    </div>
                )}
            </div>
        );

    } // end of render

}; // end of Feeds

export default connect(mapStates, mapDispatch)(Feed);
