import React from 'react';
import "../assets/styles.css";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0
            
     
       }
    this.changeNumber1 = this.changeNumber1.bind(this);
    this.changeNumber2 = this.changeNumber2.bind(this);
    this.summ =this.summ.bind(this);
    this.clearData = this.clearData.bind(this);    
       
    }

    changeNumber1(e){
        console.log(e.target.value);
        this.setState({num1: e.target.value});
        return(e);
        
    }
    changeNumber2(e){
        console.log(e.target.value);
        this.setState({num2: e.target.value});
        return(e);
        
        }

       
    summ(){

        this.setState({sum:(Number(this.state.num1) + Number(this.state.num2))});             
        const interval = setInterval(() => {
        this.clearData()
        }, 2000);
        return () => clearInterval(interval);
                          
        }

    clearData(){
            this.setState({
            num1: 0,
            num2: 0,
            sum: 0
            });
        }

        

       render(){

           return(
            <div className ="mainDiv">
                <div className="inputs">
                <input type="text" value = {this.state.num1} onChange = {this.changeNumber1}  />
                </div>
                
                <div className="inputs">
                <input type="text" value = {this.state.num2} onChange = {this.changeNumber2}  />
                </div>
            
                <div className="inputs">
                <input type="button" value = "Saberi" onClick={this.summ} className= "btn" />
                <h3>Rezultat: {this.state.sum} </h3>
                </div>
            
            </div>
           )
       }
    }
