import React from "react";

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Header content</h1>
                <h2>{this.props.content}</h2>
                <p>Content text</p>
            </div>
        );
    }
}