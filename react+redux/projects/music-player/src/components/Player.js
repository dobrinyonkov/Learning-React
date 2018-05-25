import React from 'react';
import { connect } from 'react-redux';

import './Home.css';
import { fetchSongs } from '../actions/songsAction';

class Player extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSongs());
    }
    render() {
        const songs = this.props.song.songs;
        return (
            <div className="container">
                <div className="background-image"></div>

                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search Song Name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <div className="mt-5 list-group">
                    {console.log(songs[0])}
                    {

                        songs.map((song) => {
                            return (
                                <a key={song._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{song.data.Key}</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <audio controls>
                                        <source src={song.data.Location} type="audio/mp3" />
                                        Your browser does not support the audio element.
                                    </audio>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        song: state.song
    };
}

export default connect(mapStateToProps)(Player);
