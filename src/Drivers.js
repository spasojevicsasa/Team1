import React from "react";


export default class Drivers extends React.Component {
    
    render (){
        return(
            <tr>
                <td>{this.props.MRData.DriverTable.Driver}</td>
                <td>{this.props.position}</td>
                <td>{this.props.givenName}</td>
                <td>{this.props.familyName}</td>
                <td>{this.props.constructor}</td>
                <td>{this.props.points}</td>
                
            </tr>
        );
    }
}