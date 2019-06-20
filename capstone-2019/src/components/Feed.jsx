import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {teamObject} from './teams';


const mapStates = (state) => {

    return {
        //favorites: state.favoritesReducer.favorites,
        user: state.loginReducer.user
    };

}; // end of mapStates


class Feed extends Component {

    constructor(props) {
        super(props);

        this.state = {

            favorites: [274, 237, 238],
            playersInfo: [],
        }

    }; // end of constructor


    componentDidMount = () => {

        this.getPlayerInfo();

    }; // end of componentDidMount


    // fecthes the stats of the players favorited by the user
    getPlayerInfo = () => {

        const favorites = this.state.favorites;

        // have to go through each favorites player ID individually due to API constraints
        for(let i = 0; i < favorites.length; i++) {

            let curr = favorites[i];

            // stats fetched are for the current (2018-19) season only
            axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${curr}&per_page=100`)

                .then(res => {

                    // stats are sorted by date because the stats come in with
                    // the games out of order
                    const stats = res.data.data.sort((a, b) => {

                        return new Date(b.game.date) - new Date(a.game.date);
                    });

                    let playerName = stats[0].player.first_name + " " + stats[0].player.last_name;

                    // an object is created to give each player their games stats
                    // so that when these stats are outputted, the name of the player
                    // is not displayed each time the stats are mapped
                    const newPlayer = {
                        playerName: playerName,
                        stats: stats
                    };

                    this.setState({
                        playersInfo: this.state.playersInfo.concat(newPlayer)
                    });

                })
                .catch(err => console.log(err));
        }

    } // end of getPlayerInfo


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

        console.log(this.state.playersInfo);

        return (

            <div className='FeedRender'>

                <h1> Feed </h1>

                <hr/>

                {/* if the user is logged in or not */}
                {this.props.user.id ? (

                    <div>

                        {this.state.playersInfo.map(player =>

                            <div key={player.stats[0].player.id}>

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

export default connect(mapStates, null)(Feed);
