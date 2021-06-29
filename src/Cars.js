import React from "react";

export default class Cars extends React.Component {

    render() {
        console.log(this.props.car);
        return (
            <table>
                <td>{this.props.car.marka}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.tip}</td>
                <td>{this.props.car.cena}</td>
       
            </table>
        );
    }

}