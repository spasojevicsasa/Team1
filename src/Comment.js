import React from 'react';

export default class Comment extends React.Component {
    render(){
        //console.log(this.props.comment);
        return (
            <tr>
                <td>{this.props.comment.email}</td>
                <td>{this.props.comment.body}</td>
                <td>{this.props.comment.name}</td>
                
            </tr>
        )
    }

}