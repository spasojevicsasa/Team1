import React from 'react';


export default class Comments extends React.Component {
    render(){
        //console.log(this.props.comment);
        return (
            <table className = "comments">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Email</th>
                           <th>Name</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.props.comments.map((comment , i) => {
                           return(
                            <tr key ={i}>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                            <td>{comment.name}</td>
                            </tr>
                           );
                       })}
                   </tbody>
               </table>
        )
            
    }

}