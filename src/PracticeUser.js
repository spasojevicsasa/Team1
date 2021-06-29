import React from 'react';

export default class PracticeUser extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <img src={this.props.user.avatar_url} />    
                </div>

                <p>Name: {this.props.user.name} </p>
                <p>Followers number: {this.props.user.followers}</p>
                
            </div>
        )
    }

}