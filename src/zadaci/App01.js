import { Footer } from "antd/lib/layout/layout";
import React from "react";
//import Header from "./Header";
//import Content from "./Content";
//import PropTypes from "prop-types";
import TableRow from "./TableRow";
import React from "react";

//vezba 4
import React from "react";
import "../assets/styles.css";


export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            num:0
        }
            
    this.setNumberHandler = this.setNumberHandler.bind(this);
    console.log("constructor metoda");
    }
    componentDidMount(){
        //izvrsava se nakon prvog renderovanja, ovde ce se pozivati AJAX zahtevi
        console.log("componentDidMount metoda");
    }

    componentDidUpdate(){
        //izvrsava se neposredno pre renderovanja
        console.log("componentDidUpdate metoda");    
    }

    componentWillUnmount(){
        //izvrsava se kada napusta komponenta, reset stata
        console.log("componentWillUnmount metoda");

    }
    setNumberHandler(){
        console.log("setNumberHandler metoda");
        this.setState({ num: this.state.num + 1});
    }


render() 

{

     return (
        <div>
           <h1 className ="red">Style with External css</h1>  {/*  klasa .red u css. fajlu, povezana sa index.html */}
           <h3 style={{border: "5px solid blue", color: "#888"}} className="blue">Style with Inline css</h3>
           <h3>{this.state.num}</h3>
           <input type="button" value = "Increment" onClick = {this.setNumberHandler} />       
           
        </div>
        );
    }
}



//vezba 3
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component{
    constructor(){
        super();
            
    }

    findElementHandler(){
        var myElement = document.getElementById("myElement");
        console.log(myElement);
        ReactDOM.findDOMNode(myElement).style.color = "red";
    }

    

  
render() {
    
     return (
        <div>
           <input type="button" value="Find element" onClick={this.forceUpdateHandler}/>
        
           <h1 id="myElement">Heading element</h1>
        </div>
    );
 }

}


//vezba 2
import React from "react";

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            randomNumber:0
        }
        
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler (){
        //this.forceUpdate(); //poziva render metodu
        var num = Math.random();
        this.setState({randomNumber: Math.random()}); //svaki setState pozivace render()
}
  
render() {
    
     return (
        <div>
           <input type="button" value="Force update" onClick={this.forceUpdateHandler}/>
           <h3>Random number: {Math.random()}</h3>
        </div>
    );
 }

}


//vezba 1 
export default class App extends React.Component{
    constructor(){
        super();
        this.state =  {
            num: 0,
            testString: "Hello Raect",
            testBool: false
        }
        this.incrementState = this.incrementState.bind(this);
    }

incrementState() {
    console.log(this.state.num);
    var newNumber = this.state.num + 5;
   // this.setState({ num: this.state.num + 1 });
   this.setState ({ num: newNumber });

}
    
render() {
    console.log(this.state.num);
     return (
        <div>
           <div>
               <input type="button" value="Increment" onClick={this.incrementState} />
           </div>
           <div>
               {this.state.num}
           </div>
        </div>
    );
 }

}

//constructor - this state 
var num = 1;
//this.state = 


//2. zadatak ( "map" je kao u JS "for" petlja, za prolazak kroz niz se koristi. Za rad sa nizovima uvek se koristiti neka petlja. "key" se koristi da bi se samo novi objekat renderovao, ne i svi prethodni koji su vec ucitani, na taj nacin je React brz
export default class App extends React.Component{
    constructor(){
        super();
        this.state =  {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age" : 10,
                    "city": "Novi Sad"
                },
                {
                    "id": 15,
                    "name": "Bar",
                    "age" : 20,
                    "city": "Novi Sad"
                },
                {
                    "id": 3,
                    "name": "Baz",
                    "age" : 30,
                    "city": "Beograd"
                },
                {
                    "id": 4,
                    "name": "Gaz",
                    "age" : 50,
                    "city": ""
                }
            ]
        }
    }

render () {
    console.log(this.state.data);
    return (
        <div>
            <table>
                <tbody>
                    {this.state.data.map((person, i)=> {  // parametri map-a: person -je objekat, i- je iterator (0,1,2)
                    return (<TableRow key={i} person = {person} />); //person ={person} prosledjuje se ceo objekat, prikazace se onoliko puta koliko se nalazi objekata u nizu. Ova komponenta se ponovo moze reusovati - iskoristiti ako negde zatreba. To moze kada su isti propertiji, ako neki property neki objekat nema (npr.city), onda se mora staviti prazan string.
                    //    return ( 
                    //     //<tr key={i}> //a ako name treba konkretan property...onda pon.id npr.
                    //      <tr key={person.id}> 
                    //         <td>{person.name}</td>
                    //         <td>{person.id}</td>
                    //         <td>{person.age}</td>
                    //        
                    //     </tr>
                    //    );

                      
                       
                    })}
                </tbody>
            </table>
        </div>
    );
 }

}

// 1. zadatak
export default class App extends React.Component {
    constructor (){
        super();
        this.state = {                      //definisemo state objekat sa propertijima
            header: "Header from state",
            content: "Content from state"
        }
        
    }

    render() {
        return(
            <div>
                <h1>{this.state.header}</h1>  {/*  cim unosimo JS moraju {} zagrade */}
                <p>{this.state.content}</p>
                <Header headerState={this.state.header}/>
                <Content content={this.state.content}/>
            </div>
        );
    }
}
// zadatak 4.
export default class App extends React.Component {
    constructor() {     //uvek da bude na 1. mestu
        super();
        this.state = {
            data:[]

        }   
        this.setStateHandler = this.setStateHandler.bind(this);
}

setStateHandler () {                    //neke metode...ova je asinhrona
    console.log("setStateHandler");
    var item = "setState";
    //I nacin
    var myArray = this.state.data.slice(); //nova kopija niza
    console.log(myArray);
    myArray.push(item);
    this.setState({data: myArray });
    //II nacin
    this.setState ({
        data: this.state.data.concat(item) //dodavanje item-a na prethodno stanje

});


}


render () 
{ 
    console.log("Poziva se render metoda");    //render () uvek na kraju
    console.log("state", this.state.data);                 
    // console.log(this.state.data);    
    return (
        <div>
            <input type="button" onClick = {this.setStateHandler} value="Set state" />
            <h4>State data: {this.state.data}</h4>
        </div>);
  }
}

//zadatak 3. ?
export default class App extends React.Component {
    render ()
    {
        return (
            <div>
                <h3>String: {this.props.propString}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>Bool: {this.props.propBool ? "True" : "False"}</h3>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
                <h3>Function: {this/this.props.propFunction}</h3>
            </div>);
        }       
    }
    App.propTypes = {
        propString: PropTypes.string,
        propNumber: PropTypes.number,
        propBool: PropTypes.bool.isRequired, //isRequired znaci da je obavezan
        propArray: PropTypes.array.isRequired,
        propObject: PropTypes.object
    }

    App.defaultProps = {
        propString: "String value",
        propNumber: 1,
        propBool: true,
        propArray: [1,2,3,4,5],
        propObject: {
            objectName1: "objectName1",
            objectName2: "objectName2",
            objectName3: "objectName3"
        },
        propFunction: function(e){return e}

    }



 export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: "My first state",
            newData: "My second state",
            peoples: [{
                "id": 1,
                "name": "Foo",
                "age": 20
            }, {
                "id": 2,
                "name": "Bar",
                "age": 30
            }, {
                "id": 3,
                "name": "Baz",
                "age": 40
            
            }, {
                "id": 4,
                "name": "Fiz",
                "age": 50
            }]
        }
    }

    render() 
    {
        console.log(this.state.peoples);//JS pre returna
        return (
            <div>
                <Header />
                <table>
                    <tbody>

                        {/* starija sintaksa */}
                         {/* {this.state.peoples.map(function(person){  //JS posle returna moraju {}
                             console.log("person", person);
                            return (
                            <tr>
                                <td>{person.id}</td>       
                                <td>{person.name}</td>       
                                <td>{person.age}</td>       
                            </tr> 
                             */}
                        

                         {/* novija sintaksa */}
                         {this.state.peoples.map((people)=> {
                             console.log("person", people);
                            return (
                            <tr>
                                <td>{people.id}</td>       
                                <td>{people.name}</td>       
                                <td>{people.age}</td>       
                            </tr>

                            );
                          }
                        )}
                    </tbody>
                </table>
                {/* <div>State: {this.state.data}</div>
                <div>{this.state.newData}</div> */}
            </div>
    );
            
    }
}

//export default App;