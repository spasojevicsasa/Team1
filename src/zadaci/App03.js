
//koriscenje jquery-ja u Reactu je samo uz ajax, ni za sta drugo. Zadatak: Prikazi postove na nasoj stranici.

import React from "react";
import * as $ from "jquery";
import Post from './Post';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            posts: [],
        isLoading: true,
        startDate: new Date()
        
    }

    this.changeStartDateHandler = this.changeStartDateHandler.bind(this);

    }

    


    componentDidMount() {    
        this.getPosts();        
  
    }
    getPosts(){                             //ova se ucitava odmah posle rendera i treba nam da odmah nakon rendera ucita nase trazene podatke
        console.log("componentDidMount");
        var url = "https://jsonplaceholder.typicode.com/posts";
        $.get(url, (data) => {
            console.log(data);
            this.setState({
            posts: data,
            isLoading: false,
            
            
        });

      })

    } 

      changeStartDateHandler(date) {
          console.log(date);
          this.setState({startDate: date});

       
      }
     render() {
         console.log(this.state.posts);
         var date = this.state.startDate;
         var day = date.getDate();
         var month = date.getMonth() + 1;
         var year = date.getFullYear();

         if(this.state.isLoading === true){
             return <ClipLoader size={80}/>
         }
         return(
            //  <div>
            //      {this.state.posts.map((post, i)=> {
            //          return (
            //         <Post post = {post} key={i}/>
            //          )
            //      })}
            //  </div>
            <div>
            <DatePicker selected = {this.state.startDate} onChange= {this.changeStartDateHandler} dateFormat = "dd/MM/yyyy"/>
            <h3>Selected date: {day}/{month}/{year}</h3>
            </div>
         );

     }
} 


//vezba 1. domaci
import React from "react";
import Input from "./Input";

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data1: "data1",
            data2: "data2"
        }

        this.updateDataHandler1 = this.updateDataHandler.bind(this);
        this.updateDataHandler2 = this.updateDataHandler2.bind(this);
    }
    updateDataHandler() {
        this.setState({data1 : e.target.value})
    }
    updateDataHandler2() {
        this.setState({data2 : e.target.value})
    }
    
    render () {
        return (
            <div>
                <Input dataProp={this.state.data1} updateDataHandler1 = {this.updateDataHandler} stateTitle = "First state"/> 
                <Input dataProp={this.state.data2} updateDataHandler2 = {this.updateDataHandler2} stateTitle = "Second title" />
                
                
                <h3>{this.state.data}</h3>
            </div>
        );
    }
}
//vezba 2. - navigacioni meni

import React from "react";
import "../assets/styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';


export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data1: "data1",
            data2: "data2"
        }

    }
    
    
    render () {
        return (
            <div>
                <Router>
                    <nav className = "top-navigation">
                        <ul>
                            <li><Link to = "/">Home</Link></li> {/* ne radimo sa  a tagom nego Linkom iz paketa, index je pocetna pa se ne pise nakon kose crte, ali je zato i uvek podrazumevana i prikazuje u kliku pored drugih linkova, da bi se to izbeglo mora da se unese exact */}
                            <li><Link to = "/about">About</Link></li>
                            <li><Link to = "/contact">Contact</Link></li>
                        </ul>
                    </nav>
                <Switch>
                    <Route path="/" exact component = {Home} />
                    <Route path="/about" exact component = {About} />
                    <Route path="/contact" exact component = {Contact} /> {/*  exact da se ne duplira sa /contact/details , zato ga je uvek dobro staviti*/}
                    {/* <Route path="/contact/details" exact component = {Contact} /> */}
                </Switch>
                </Router>
            </div>
        );
    }
}

class Home extends React.Component {
    render(){
        return(
            <div>Index component</div>
        );
    }
}
class About extends React.Component {
    render(){
        return(
            <div>About component</div>
        );
    }
}
class Contact extends React.Component {
    render(){
        return(
            <div>Contact component</div>
        );
    }
}