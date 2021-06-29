import React from 'react';

export default class Numbers extends React.Component {
    render (){
        return (
            <div>
                <input type="number" value = {this.props.num1} onChange = {this.props.changeNumber1}  />
                <input type="number" value = {this.props.num2} onChange = {this.props.changeNumber2}  />
                <h3>State value:{this.props.summ} </h3>
            </div>
        );
    }
}