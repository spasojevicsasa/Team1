import React from 'react';

export default class Button extends React.Component {
    render() {
        return(
            <div>
                <input type="button" value= "click" onClick = {this.props.updateStateHandler} />
                <h3>{this.props.data}</h3> 
            </div>
        );
    }
}
