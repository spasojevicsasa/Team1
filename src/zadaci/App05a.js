//8. zadatak - Math.random() - nasumicno biranje broja 0-0.99 klikom

import React from 'react';


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            randomNumber: 0
     
       }
       this.forceUpdateHandler=this.forceUpdateHandler.bind(this);
    }  

    forceUpdateHandler(){
        var num = Math.random();
        this.setState({randomNumber: num});
    }

    render(){
       // console.log(this.state.comments);
        
        return (
            <div>
              <input type='button' value='Force updata' onClick = {this.forceUpdateHandler} />
              <h2>Random number: {Math.random()}</h2>
            </div>
        );
    }
}
 
//9. zadatak -ajax anotherJesse 

import React from 'react';
import * as $ from 'jquery';
import User from "./User";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {}
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getUser = this.getUser.bind(this);
    }
    componentDidMount (){
       this.getUser();
    }   
    
    getUser() {
        var url = "https://api.github.com/users/anotherjesse";
        $.get(url, (data) => {
            this.setState({user: data});
        })
    }
    

    render (){
        return (
            <div>
                <User user={this.state.user} />
            </div>
        )
    }
} 

//10 vezba : Datepicker

import React from 'react';
import * as $ from 'jquery';
import Post from "./Post";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            startDate: new Date()
        }

        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeDate(date){
        this.setState({startDate: date})
    }

    
    render(){
        var date = this.state.startDate;
        var day = date.getDate();
        var month = date. getMonth() + 1;
        var year = date.getFullYear();
        return (
            <div>
                <DatePicker startDate = {this.state.startDate} onChange = {this.handleChangeDate} dateFormat = "dd/MM/yy"/>
                <h1>selected date: {day}/{month}/{year}</h1>
            </div>
        )
            
        
    }
}
//12. vezba : ajax - getPost

import React from 'react';
import * as $ from 'jquery';
import Post from "./Post";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            isLoading: true,
            startDate: new Date()
        }

        
        this.getPost= this.getPost.bind(this);  
        this.componentDidMount = this.componentDidMount.bind(this);  
    }


    componentDidMount(){
        this.getPost();
    }

    getPost() {
        var url = "https://jsonplaceholder.typicode.com/posts";
        
        $.get(url, (data) => {
            console.log(data);
            this.setState({posts: data});
        })
      }

    
    render(){
        console.log(this.state.posts);
        return (
            <div>
                    {this.state.posts.map((post, i) =>{
                        return(
                            <Post post = {post} key = {i} />
                        )
                        
                    // return( <div key = {i}>
                    //      <h3>{post.title}</h3>
                    //      <p>{post.body}</p>
                    // </div>)
                    
                    })}
                </div>
        )    
    }
}


//11. zadatak: forma - vezba pred test
import React from 'react';
import * as $ from 'jquery';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            city: "Novi Sad",
            isFormVisible: false
        }

        this.handleChangefirstName = this.handleChangefirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.validationForm = this.validationForm.bind(this);
        this.showData = this.showData.bind(this);
        this.resetData = this.resetData.bind(this);

    
    }

    handleChangefirstName(e){
        console.log(e.target.value);
        this.setState({firstName:e.target.value});

    }

    handleChangeLastName(e){
        console.log(e.target.value);
        this.setState({lastName: e.target.value});
    }

    handleChangeCity (e){
        console.log(e.target.value);
        this.setState({city: e.target.value});

    }
    validationForm (){
        if(this.state.firstName === ""){
            alert("Please enter First name!");
        }
        if(this.state.lastName === ""){
            alert("Please enter Last name!");
        }

    }

    showData(){
        if(this.validationForm());
            this.setState({isFormVisible:true});
        
    }
     resetData() {
         this.setState({
            firstName: "",
            lastName: "",
            city: "Novi Sad",
            isFormVisible: false
         });
     } 

    render(){
        return(
            <div>
               <div>
                   <label>First name:</label>
                   <input type="text" value ={this.state.firstName} onChange= {this.handleChangefirstName} />
                </div>
                <div>
                   <label>Last name:</label>
                   <input type="text" value ={this.state.lastName} onChange={this.handleChangeLastName} />
                </div>
                <div>
                   <label>City:</label>
                   <select value = {this.state.city} onChange = {this.handleChangeCity}>
                       <option>Novi Sad</option>
                       <option>New York</option>
                       <option>London</option>
                   </select>
                </div>

                <input type = "button" value = "show data" onClick = {this.showData} />
                <input type = "button" value = "reset" onClick = {this.resetData} />
                {this.state.isFormVisible ?
                <div>
                    <h2>Data:</h2>
                    <h4>First name: {this.state.firstName}</h4>
                    <h4>Last name: {this.state.lastName}</h4>
                    <h4>City: {this.state.city}</h4> 
                    
                </div> : null}
            </div>
            
        )
    }
}

// 12.vezba - Loader

import React from 'react';
import * as $ from 'jquery';
import Post from "./Post";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            isLoading: true
            
        }

        
        this.getPost= this.getPost.bind(this);  
        this.componentDidMount = this.componentDidMount.bind(this);  
    }


    componentDidMount(){
        this.getPost();
    }

    getPost() {
        var url = "https://jsonplaceholder.typicode.com/posts";
        
        $.get(url, (data) => {
            console.log(data);
            this.setState({posts: data, isLoading: false});
        })
      }

    
    render(){
        console.log(this.state.posts);

        if(this.state.isLoading){
            return <ClipLoader size={80} />

        }
        return (
            <div>
                    {this.state.posts.map((post, i) =>{
                        return(
                            <Post post = {post} key = {i} />
                        )
                        
                    // return( <div key = {i}>
                    //      <h3>{post.title}</h3>
                    //      <p>{post.body}</p>
                    // </div>)

                    })}
                </div>
        )    
    }
}



