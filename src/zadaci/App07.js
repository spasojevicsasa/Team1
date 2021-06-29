// vezbanje pred test
import React from 'react';
import * as $ from "jquery";
import User from './User';


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {}
     
       }
     }  

     componentDidMount () {
       this.getUser();
     }

     getUser(){
        var url = "https://api.github.com/users/anotherjesse";
        $.get(url,(data) => {
            //console.log(data);
            this.setState({user: data});
        })

    }
  
    
    render(){
        //console.log(this.state.user);
        return (
            <div>
                <User user={this.state.user} />
            </div>
        );
    }
}
//2. 

import React from 'react';
import "../assets/styles.css";
import * as $ from "jquery";
import Comment from "./Comment";
import Comments from "./Comments";



export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            comments: []
     
       }
    }  

    componentDidMount () {
       this.getComments();
       
    }

    getComments(){
        var url = "https://jsonplaceholder.typicode.com/comments";
        $.get(url, (data)=> {
            //console.log(data);
            this.setState({comments: data});
        })
        

    }
  
    
    
    render(){
       // console.log(this.state.comments);
        
        return (
            <div>
               <Comments comments = {this.state.comments} />
            </div>
        );
    }
}

//3. forma

import React from 'react';
import "../assets/styles.css";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName: "",
            city: "Novi Sad",
            isFormVisible: false
     
       }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.showData = this.showData.bind(this);
    this.resetData = this.resetData.bind(this);
    this.validateForm = this.validateForm.bind(this);
    }  

    handleChangeFirstName(event){
        console.log(event.target.value);
        this.setState({ firstName: event.target.value});
    }
  
    handleChangeLastName(event){
        this.setState({ lastName: event.target.value })

    }

    handleChangeCity(event){
        console.log(event.target.value);
        this.setState({ city: event.target.value })

    }

    validateForm (){
        if(this.state.firstName === "") {
            alert('Please enter first name!')
            return false;
        }
        if(this.state.lastName === "") {
            alert('Please enter last name!');
            return false;
        }

        
    }

    showData (){
        if(this.validateForm());
        this.setState({isFormVisible: true});
    }
    resetData(){
        this.setState({
            firstName:"",
            lastName: "",
            city: "",
            isFormVisible: false
        });
    }
    
    render(){

        return (
            <div className="main-container">
                <div className="form-element-container">
                <label>First  name:</label>
                <input type="text" value = {this.state.firstName}  onChange={this.handleChangeFirstName}/>

            </div>
                <div className="form-element-container">
                <label>Last name:</label>
                <input type="text" value = {this.state.lastName} onChange={this.handleChangeLastName}/>

            </div>
            <div className="form-element-container">
                <label>City:</label>
                <select value={this.state.city} onChange={this.handleChangeCity}>
                    <option>Novi Sad</option>
                    <option>Beograd</option>
                    <option>Nis</option>

                </select>

            </div>
            <input type='button' value ="show data" onClick= {this.showData} />
            <input type='button' value= "reset" className="btn-reset" onClick={this.resetData}/>
            {this.state.isFormVisible ? 
            <div>
                <h2>Data:</h2>
                <h4>First name: {this.state.firstName}</h4>
                <h4>Last name: {this.state.lastName}</h4>
                <h4>City: {this.state.city}</h4>
            </div> : null}
        
            </div>
            
            
        );
    }
}

