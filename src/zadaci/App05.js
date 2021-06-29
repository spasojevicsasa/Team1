//moje vezbanje:

// 1. napraviti tabelu sa elementima niza

import React from 'react';
import Cars from "./Cars";
import Inventors from "./Inventors";
import "../assets/styles.css";

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            automobili: [

                {  marka:   'Honda' ,  model:   'CR-V' ,  tip:   'suv' ,  cena:   24045  },
    
                {  marka:   'Honda' ,  model:   'Accord' ,  tip:   'sedan' ,  cena:   22455  },
    
                {  marka:   'Mazda' ,  model:   'Mazda 6' ,  tip:   'sedan' ,  cena:   24195  },
    
                {  marka:   'Mazda' ,  model:   'CX-9' ,  tip:   'suv' ,  cena:   31520  },
    
                {  marka:   'Toyota' ,  model:   '4Runner' ,  tip:   'suv' ,  cena:   34210  },
    
                {  marka:   'Toyota' ,  model:   'Sequoia' ,  tip:   'suv' ,  cena:   45560  },
    
                {  marka:   'Toyota' ,  model:   'Tacoma' ,  tip:   'truck' ,  cena:   24320  },
    
                {  marka:   'Ford' ,  model:   'F-150' ,  tip:   'truck' ,  cena:   27110  },
    
                {  marka:   'Ford' ,  model:   'Fusion' ,  tip:   'sedan' ,  cena:   22120  },
    
                {  marka:   'Ford' ,  model:   'Explorer' ,  tip:   'suv' ,  cena:   31660  }
            ]
        }

    }



    render() {
        console.log(this.state.automobili);
        return (
             <div>
                
                    <table className="tbody">
                   
                        <tbody>
                        {this.state.automobili.map((car, i) => {
                        return(<Cars key={i} car={car} />);
                    
                    
                        })}
                
                        </tbody>
                    </table>
            </div>
    )
  }
}

//ispis objekata niza

import React from 'react';
import Item from "./Item";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
        data:[
            {id: 1, component:"Prva komponenta"},
            {id: 2, component:"Druga komponenta"},
            {id: 3, component:"Treca komponenta"},

        ]
    }
}

render () {
    return(
        <div>
            {this.state.data.map((item,i)=>{
                return(<Item key={i} item={item} />);
            }
            
            )}
        </div>
    )
}
}

//3. input polje sa brisanjem unosa
import React from 'react';
import Form from './Form';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data:''
  
        }
        this.changeDataHandler = this.changeDataHandler.bind(this);
        this.clearData = this.clearData.bind(this);
}

changeDataHandler(e) {
    console.log("changeDataHandler");
 this.setState({data: e.target.value});
}

clearData (){
    this.setState({data:''})
}

render(){
    return(
        <div>
            <Form data = {this.state.data}
            changeDataHandler = {this.changeDataHandler}
            clearData = {this.clearData}/>
        </div>
    );
}
}

//4. ucitavanje podatka iz child komponente
import React from 'react';
import Button from './Button';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: 'initial data'
        }
       this.updateStateHandler = this.updateStateHandler.bind(this); 
    }

   updateStateHandler() {
       this.setState({data : "Data updated from child component h3"});
   } 

render (){
    return(
        <div>
            <Button data = {this.state.data} updateStateHandler = {this.updateStateHandler} />
        </div>
    )
}

}

//5. ucitavanje podatka clikom bez posebnog fajla
import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this. state = {
            data: ''
        }

        this.changeClickHandler = this.changeClickHandler.bind(this);
    }

    changeClickHandler(){
        this.setState({data: "Data update with click"});
    }

render () {
    return(
        <div>
            <input type='button' value='click' onClick = {this.changeClickHandler}/>
            <h3>{this.state.data}</h3>
        </div>
    )
}


}

//6. prosledjivanje metode

import React from 'react';
import Input from "./Input";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data:"initial data"
        }
        this.updateStateHandler = this.updateStateHandler.bind(this);
    }
  
    updateStateHandler(e){
        this.setState({data: e.target.value});

    }
    render (){
        return (
            <div>
                <Input dataProp = {this.state.data}  updateStateProp ={this.updateStateHandler} />
           </div>
        )
    }   
}

//7. povezivanje sa css fajlom i Did/Will  metode

import React from 'react';
import "../assets/styles.css";

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            num:0
        }
        this.setNumberHandler = this.setNumberHandler.bind(this);
        this.clearIncrement = this.clearIncrement.bind(this);
    }

    
    componentDidMount(){                //odmah se pojavi nakon ucitavanaj u konsoli
        console.log('componentDidMouth');
    }
    componentDidUpdate(){                   //pojavi se nakon klika na dugme
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmouth"); //pojavi se kad se napusta komponenta, reset stata    }

    } 
    setNumberHandler() {
        this.setState({num: this.state.num + 1});
    }

    clearIncrement(){
        this.setState({num: 0});
    }
    
    render(){
        return(
            <div className="blue">
                <h1 className="red">Style with External css</h1>
                <h3 style = {{border: "1px solid white", padding:"10px"}} >Style with Inline css</h3>
               
            <input type='button' value = 'Increment' onClick={this.setNumberHandler} />
            <input type="reset" value = "reset" onClick = {this.clearIncrement} />              
            <h3>{this.state.num}</h3>
            </div>
        )
    }
}


