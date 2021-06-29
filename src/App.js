import React from "react";
import "../assets/styles.css";
import "./scss/style.scss";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./navigation/Home";
import Drivers from "./navigation/Drivers";
import Races from "./navigation/Races";
import Teams from "./navigation/Teams";
import * as $ from "jquery";



export default class App extends React.Component{
   
    constructor(){
        super();
        this.state = {
            position:[]
        }
   

    }  
    
    componentDidMount(){
        this.getPosts();

    }

    getPosts(){
        var url = "http://ergast.com/api/f1/2013/driverstandings.json";
        $.get(url, (data) => {
            console.log(data);
            this.setState({position: data});

        }
        
        )


    }

     render(){
        return(
            <div>
               
               <h1>Formula 1</h1>
            
            <div className="menu"> 

        <Drivers position={this.state.position}/>
            
            <Router>
                <nav>
                    <div>
                        <Link to= "/">HOME</Link>
                    </div>
                    <div>
                        <Link to= "/drivers">Drivers</Link>
                    </div>
                    <div>
                        <Link to= "/teams">Teams</Link>
                    </div>
                    <div>
                        <Link to= "/races">Races</Link>
                    </div>
                        
                </nav>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/drivers" exact component={Drivers}/>
                    <Route path="/teams" exact component={Teams}/>
                    <Route path="/races" exact component={Races}/>
                </Switch>
            </Router>

            </div>
            
            <div className="mainScreen">
                
            </div>

            </div>
        );
    }
  
}