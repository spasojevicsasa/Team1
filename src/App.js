import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "../sass/style.scss";
import Home from "./navigation/Home";
import Drivers from "./navigation/Drivers";
import Races from "./navigation/Races";
import Teames from "./navigation/Teams";
// import * as $ from "jquery";



export default class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         driversState: {}
    //     }
    // }
    // componentDidMount(){
    //     this.getPosts();
    // }


    // getPosts(){
    //     var url ="http://ergast.com/api/f1/2013/driverStandings.json";
    //     $.get(url, (data) =>{
    //         console.log(data);
    //         this.setState({driversState: data});
    //     });

    // }
   
    render(){

        return(
            <div>
                <div className="menu">
                    <Router>
                        <nav>
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/drivers" >Drivers</Link></div>
                            <div><Link to="/teams" >Teams</Link></div>
                            <div><Link to="/races" >Races</Link></div>
                        </nav>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/drivers" exact component={Drivers} />
                            <Route path="/teams" exact component={Teames} />
                            <Route path="/races" exact component={Races} />
                        </Switch>
                    </Router>

                </div>
                <div className="mainScreen">
                  
                </div>
            </div>
        )
    }
}