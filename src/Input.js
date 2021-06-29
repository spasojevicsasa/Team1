import React from 'react';

export default class Input extends React.Component {
    render (){
        return (
            <div>
                <input type="text" value = {this.props.dataProp} onChange = {this.props.updateStateProp}  />
                <h3>State value:{this.props.dataProp} </h3>
            </div>
        );
    }
}