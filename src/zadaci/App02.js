
//vezba 7.
import React from "react";
import Item from "./Item";


export default class App extends React.Component{
    constructor(){
        super();

        this.state= {
           data: [
               { id: 1, component:"First..."},
               { id: 2, component:"Second..."},
               { id: 3, component:"Third..."}
           ]
        }  
        
    } 

    

    
    render () {
        return (
            <div>

               {this.state.data.map((item, i)=> {
                   return (<Item key={i} item={item} />)    
               
               })}

            </div>
        );
    }
}

//domaci: dva inputa na nivou child komponente

//vezba 6. 
//ovo se koristi kod promene valute, brzine...

import React from "react";
import Form from "./Form";

export default class App extends React.Component{
    constructor(){
        super();

        this.state= {
           data: ""
        }
        
     this.changeDataHandler = this.changeDataHandler.bind(this);
     this.clearData = this.clearData.bind(this);
        
    } 

    changeDataHandler (e) {
        console.log("changeDataHandler");
        this.setState({data: e.target.value});

    }

    clearData () {
        console.log("clearData");
        this.setState({ data: ""});
    }
    
    render () {
        return (
            <div>
               <Form data = {this.state.data} 
               changeDataHandler = {this.changeDataHandler} 
               clearData = {this.clearData} />
            </div>
        );
    }
}




//vezba 5. ovako nesto ce biti
import React from "react";
import Button from "./Button";



export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data:"Initial data"
        }

        this.updateStateHandler = this.updateStateHandler.bind(this);
        
    } 

    updateStateHandler() {
        this.setState({ data: "Data updated from child component"});
    }
    
    render () {
        return (
            <div>
               <Button data = {this.state.data} updateStateHandler = {this.updateStateHandler}/>
            </div>
        );
    }
}

//vezba 4. izmena podatka klikom
import React from "react";



export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data:"Initial data"
        }
        this.handleClickHandler = this.handleClickHandler.bind(this);
    } 

    handleClickHandler(e){
        console.log("handleClickHandler");
        this.setState({ data: "Data update..."});
    }
    render () {
        
        
        return (
            <div>
               <input type="button" value= "click" onClick = {this.handleClickHandler} />
               <h3>{this.state.data}</h3>
            </div>
        );
    }
}

// vezba 3. prosledjivanje metode

import React from "react";
import Input from "./Input";


export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data:"Initial data"
        }
        
        this.updateStateHandler = this.updateStateHandler.bind(this);

    } 

    updateStateHandler (e) {
        console.log("updateStateHandler", e.target.value);
        this.setState({ data: e.target.value })
    }

    render () {
        var handleClickbtn = 1;
        console.log("handleClickbtn", handleClickbtn);
        return (
            <div>
               <Input dataProp = {this.state.data} updateStateProp = {this.updateStateHandler}/> {/*  // prosledjivanje metode preko propa */}
            </div>
        );
    }

}

//vezba 2. //svaki input ima svoj state i svoju metodu, tako da se posebno pravi za svaki input
import React from "react";



export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data:""
        }
        this.updateStateHandler = this.updateStateHandler.bind(this);//ukoliko se koristi this unutar metode onda obavezno mora da se bind-uje
    }

    updateStateHandler(event){      //e.
        console.log("metoda updateStateHandler", event.target.value);   //e.target.value
        this.setState({data: event.target.value});
    }

    handleClickbtn (event){
        //ne treba bind metoda jer nismo koristili this, this is undefined
        alert("Kliknuto dugme");
         //this.setState({data: event.target.value});

    }
    render () {
        return (
            <div>
                <input type="text" value = {this.state.data} onChange = {this.updateStateHandler} />
                {/*  kod input type text-a ide metoda onChange(poziva se prilikom kucanja na tastaturi), a kod button-a ide onClick */}
                <input type="button" value= "click me" onClick = {handleClickbtn} /> {/*  //ovde ne treba bind, jer nema this. Inace, samo se constructor() i render() ne bind-uju */}
                <h3>{this.state.data}</h3>
            </div>
        );
    }
}


//vezba stara 1
import React from "react";
import Header from "../Header";
import Content from "../Content";

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            header: "Header from state",
            content: "Hello from content"
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <p>{this.state.content}</p>

                <Header header = {this.state.header} />
                <Content content = {this.state.content} />
            </div>
        );

    }
}