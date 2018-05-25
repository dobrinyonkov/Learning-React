import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { User } from '../components/User';
import { Main } from '../components/Main';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { setName } from '../actions/userAction'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Header />
                        <Main />
                        {/* <Footer /> */}
                    </div>
                </div>
            </BrowserRouter>
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
        setName: (name) => {
            dispatch(setName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

