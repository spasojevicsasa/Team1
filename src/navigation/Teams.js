import React from "react";
import * as $ from "jquery";
import { timesSeries } from "async";

export default class Teames extends React.Component{
    constructor(){
        super();
        this.state = {
            teamsState : []
        }
    }
    componentDidMount(){
        this.getTeamPosts();
    }

    getTeamPosts(){
        var url = "http://ergast.com/api/f1/2013/constructorStandings.json"
        $.get(url, (data) => {
            console.log(data);
            this.setState({teamsState: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings})
        })

    }
    
    render (){
            
            console.log(this.state.teamsState);
        return(
            <div className="mainScreen">
                <table>
                    <thead>
                        <tr>
                            <th colSpan = "4">Constructors Championshim Standings -2013</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teamsState.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td>{item.position}</td>
                                    <td>{item.Constructor.name}</td>
                                    <td><a href= {item.Constructor.url}>Details</a></td>
                                    <td>{item.points}</td>
                                </tr>
                            )
                            
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}