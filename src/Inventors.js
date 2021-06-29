import React from "react";


export default class Inventors extends React.Component {
    render (){
        console.log(this.props.person);
        return(
            <tr>
                <td>{this.props.person.first}</td>
                <td>{this.props.person.last}</td>
                <td>{this.props.person.year}</td>
                <td>{this.props.person.passed}</td>   
            </tr>
        );
    }
}