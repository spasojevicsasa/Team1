import React from 'react';


export default class Persons extends React.Component {
    render(){
        
        return (
            <table className = "persons">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Website</th>
                           <th>City</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.props.datas.map((data , i) => {
                           return(
                            <tr key ={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.website}</td>
                            <td>{data.address.city}</td>
                            </tr>
                           );
                       })}
                   </tbody>
               </table>
        )
            
    }

}