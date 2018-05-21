import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './componetns/Header'
import { Home } from './componetns/Home'

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            name: 'Dobrin',
            user: {
                name: 'Ana',
                age: 27,
                hobbies: [
                    "runnig",
                    "coding",
                    'eating'
                ]
            }
        }
    }


    onGreet() {
        console.log(this);
        this.setState({
            user: {
                ...this.state.user,
                age: this.state.user.age + 3
            }
        })
        console.log(this.state.user);
    }

    onChangeLinkName(newName) {
        console.log(newName)
        console.log(this);
        this.setState({
            name: newName
        })
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Header name={this.state.name} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Home
                            user={this.state.user} 
                            greet={this.onGreet} 
                            changeLinkName={this.onChangeLinkName.bind(this)}
                            initialName={this.state.name}>
                            <p>I'm a child paragraph</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
