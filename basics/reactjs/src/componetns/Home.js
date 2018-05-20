import React from 'react'

export class Home extends React.Component {
    render () {
        var user = this.props.user;
        console.log(this.props)
        return (
            <div>
                <p>Hello {user.name}</p>
                <p>age: {user.age}</p>
                <ul>
                    {user.hobbies.map(element => <li>{element}</li>)}
                </ul>

            </div>
        );
    }
}