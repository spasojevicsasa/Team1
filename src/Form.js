import React from 'react';

export default class Form extends React.Component {
    render (){
        return (
            <div>
                <input type="text" value = {this.props.data} onChange = {this.props.changeDataHandler} />
                <input type="button" value = "Clear" onClick = {this.props.clearData} />
                <h2>State: {this.props.data}</h2>
            </div>
        )
    }
}