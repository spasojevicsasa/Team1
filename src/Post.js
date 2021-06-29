import React from 'react';

export default class Post extends React.Component{
    render(){
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}