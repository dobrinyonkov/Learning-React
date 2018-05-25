import React from "react";
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import { addSongs } from './../actions/songsAction';


class DragAndDrop extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                    <button onClick={() => this.props.addSongs(this.state.files)} className="btn btn-primary btn-lg">Upload</button>
                    <aside>
                        <h2>Dropped files</h2>
                        <ul>
                            {
                                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                            }
                        </ul>
                    </aside>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        song: state.song
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSongs: (files) => {
            dispatch(addSongs(files));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
