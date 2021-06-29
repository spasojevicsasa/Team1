
//1. nesto moje

import React from 'react';
import '../assets/styles.css';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
                    
            ime: 'Monika',
            prezime: 'Dragovic',
            tel: '0638088022'
        }

        this.personName=this.personName.bind(this);
        this.personLastName=this.personLastName.bind(this);
        this.personTel=this.personTel.bind(this);
        
    }
    personName(e)
    {
        this.setState({ime:e.target.value});
        return(e);

    }
    personLastName(e)
    {
        this.setState({prezime:e.target.value});
        return(e);

    }
    personTel(e)
    {
        this.setState({tel:e.target.value});
        return(e);

    }

    
    render(){
        return(
            <div>
                <table style={{border:"1px solid black"}}>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>tel</th>
                    
                    <tbody>
                    <tr>
                        <td>{this.state.ime}</td>
                        <td>{this.state.prezime}</td>
                        <td>{this.state.tel}</td>
                    </tr>
                         
                    </tbody>
                </table>
                <form>
                     <input type="text" value={this.state.ime} onChange={this.personName}></input>
                     <input type="text" value={this.state.prezime} onChange={this.personLastName}></input>
                     <input type="text" value={this.state.tel} onChange={this.personTel}></input>
                     
                </form>
               
            </div>
        )
    }
}