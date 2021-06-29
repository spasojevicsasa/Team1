import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>{this.props.headerState}</h2>
                <p>text</p>
            </div>
        );
    }
}