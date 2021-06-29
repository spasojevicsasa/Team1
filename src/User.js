import React from 'react';

export default class User extends React.Component {
    render(){
        console.log("User componenet",this.props.user)
        return(
            <div>
                <div>
                    <img src={this.props.user.avatar_url} />
                </div>
                <p>Name: {this.props.user.name}</p>
                <p>Login: {this.props.user.login}</p>
                <p>Location: {this.props.user.location}</p>
            </div>
        )
    }
}