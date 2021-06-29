import React from "react";
import Cars from "./Cars";
import Inventors from "./Inventors";

export default class App extends React.Component{
    constructor(){
        super();
        this.state =  {
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
    
            ],
            inventors : [
                { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
                { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
                { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
                { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
                { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
                { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
                { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
                { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
                { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
                { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
                { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
                { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
            ]
        }
    }

    styleBorder = {
        border: "1px solid black"
    };

render () {
    console.log(this.state.automobili);
    return (
        <div>
            <caption>Cars</caption>
            <table style={this.styleBorder}>
                <tbody>
                    {this.state.automobili.map((car, i)=> {  // parametri map-a: person -je objekat, i- je iterator (0,1,2)
                    return (<Cars key={i} car = {car} />); //person ={person} prosledjuje se ceo objekat, prikazace se onoliko puta koliko se nalazi objekata u nizu. Ova komponenta se ponovo moze reusovati - iskoristiti ako negde zatreba. To moze kada su isti propertiji, ako neki property neki objekat nema (npr.city), onda se mora staviti prazan string.
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
            <br />
            <br />  
            <caption>Inventors</caption>
            <table style={this.styleBorder}>
                <tbody>
                    {this.state.inventors.map((person, j) =>{
                        return ( <Inventors key={j} person = {person} />)
                    })}
                </tbody>
            </table>
        </div>
    );
 }

}


