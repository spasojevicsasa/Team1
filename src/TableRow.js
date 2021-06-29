import React from "react";


export default class TableRow extends React.Component {
    render (){
        console.log(this.props.person);
        return(
            <tr>
                {/* <td>table row</td> */}
                <td>{this.props.person.first}</td>
                {/* <td>{this.props.person.name}</td>
                <td>{this.props.person.age}</td>
                <td>{(this.props.person.city === "") ? "No data" : this.props.person.city}</td>
                <td>{(this.props.person.city !== "") ? this.props.person.city : "No city"}</td> */}
            </tr>
        );
    }
}

//ternary operator (uslov) ? : - da li je npr. (1===1) ? "uslov je true" : "uslov je false"
                    //   isto sto i u JS if (1===1) {
                    //                     "uslov je true"
                    //                 else {
                    //                         "uslov je false"
                    //                 }