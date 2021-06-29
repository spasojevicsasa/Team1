import React from 'react';

export default class Item extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.item.id}</p>
                <p>{this.props.item.component}</p>
            </div>
        );
    }
}
