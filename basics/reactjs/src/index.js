import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './componetns/Header'
import { Home } from './componetns/Home'

class App extends React.Component {
    render() {

        var user = {
            name: 'Ana',
            age: 27
        }
        
        return (
            <div>
                <Header user={user}/>

                <Home />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
