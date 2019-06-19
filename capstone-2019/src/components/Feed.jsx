import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


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
            playersInfo: []
        }

    }; // end of constructor


    componentDidMount = () => {

        this.getPlayerInfo();

    }; // end of componentDidMount


    getPlayerInfo = () => {

        const favorites = this.state.favorites;

        for(let i = 0; i < favorites.length; i++) {

            let curr = favorites[i];

            axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${curr}&per_page=100`)
                .then(res => {

                    const players = res.data.data.sort((a, b) => {

                        return new Date(b.game.date) - new Date(a.game.date);
                    });

                    let playerName = players[0].player.first_name + " " + players[0].player.last_name;

                    const newPlayer = {
                        playerName: playerName,
                        games: players
                    };

                    this.setState({
                        playersInfo: this.state.playersInfo.concat(newPlayer)
                    })

                })
                .catch(err => console.log(err));
        }

    } // end of getPlayerInfo


    render() {

        console.log(this.state.playersInfo)

        return (

            <div className='FeedRender'>

                <h1> Feed </h1>

                {this.props.user.id ? (

                    <div>

                        {this.state.playersInfo.map(player =>

                            <div key={player.games[0].player.id}>
                                <h1> {player.playerName} </h1>
                                {player.games.map(game =>

                                    <div key={game.game.id}>
                                        <h2> Against: </h2>
                                        <h4> Points Scored: {game.pts} </h4>
                                    </div>
                                )}
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
