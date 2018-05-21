import React from 'react'

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            user: props.user,
            greet: props.greet,
            initialName: props.initialName
        };
    }

    onMakeHerOlder() {
        this.setState({
            user: {
                ...this.state.user,
                age: this.state.user.age + 3
            }
        })
        console.log(this.state.user);
    }

    onChangeLink() {
        console.log(this.state.initialName)
        this.props.changeLinkName(this.state.initialName)
    }

    onChangeName(event) {
        var newName = event.target.value
        this.setState({
            initialName: newName
        })
    }

    render() {
        return (
            <div>
                <p>Hello {this.state.user.name}</p>
                <p>age: {this.state.user.age}</p>
                <ul>
                    {this.state.user.hobbies.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
                <hr />
                {this.props.children}
                <button onClick={() => this.onMakeHerOlder()} className="btn btn-primary">Make her older</button>
                <button onClick={this.state.greet.bind(this)} className="btn btn-primary ml-3">Greet</button>
                {/* <button onClick={this.onMakeHerOlder.bind(this)} className="btn btn-primary">Make her older</button> */}
                <hr/>
                <input
                    className="form-control" 
                    value={this.state.initialName} 
                    onChange={(event) => {this.onChangeName(event)}}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Name</button>
                
            </div>
        );
    }
}

