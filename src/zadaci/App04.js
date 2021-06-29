//Zadatak 3
import React from "react";
import "../assets/styles.css";
import * as $ from "jquery";
import "./scss/app.scss";



export default class App extends React.Component {
   
    render(){
        return(
            <div>
                <h1 className="title">My h1 element</h1>
            </div>
        );
    }
}
//Zadatak 2. ovaj paket sluzi za animacije
import React from "react";
import "../assets/styles.css";
import * as $ from "jquery";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ["item 1", "item 2", "item 3"]
        }
        this.handleAddItem = this.handleAddItem.bind(this); //didMounth i metode te vrste ne treba bind, samo kod custom metoda
    }
    handleAddItem (){
        var newItems = this.state.items.concat([prompt("Add new item")]);
        console.log(newItems);
        this.setState({items: newItems});
    }
    render(){

        return(
            <div>
                <input type="button" value="Add item" onClick={this.handleAddItem}/>               <ReactCSSTransitionGroup
                    transitionName="example"               /* propsi unutar ReactCSSTransitionGroup komponente, 
                                                               koja se zatvara kod poslednjeg propsa */
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>        
                    {this.state.items.map((item, i) => {
                        return (
                            <div key = {i}>
                            {item}
                            </div>
                        )

                    }
                    )}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

//Zadatak 1.  ovaj znak =>  je error function
import React from "react";
import "../assets/styles.css";
import * as $ from "jquery";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class App extends React.Component {
    render(){
        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <h1>My H1 element</h1>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
