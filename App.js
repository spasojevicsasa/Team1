import React from "react";
import Drivers from "./Drivers";
import * as $ from "jquery";

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {

           driver: {}
           
        }

    }
    
    componentDidMount () {
        this.getDriver();
      }
 
    getDriver(){
        var url = "http://ergast.com/api/f1/drivers.json?callback=myParser";
        $.get(url,(data) => {
            console.log(data);
            this.setState({driver: data});
        })

        
    } 
     render(){
        return(
            <div>
               
            <Drivers driver ={this.state.driver} />

            </div>
        );
    }
  
}