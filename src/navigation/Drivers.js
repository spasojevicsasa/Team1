import React from "react";
import * as $ from "jquery";

export default class Drivers extends React.Component {
    constructor() {
        super();
       
        this.state = {
            driversState: []
        }
        
     }

    componentDidMount() {
        this.getPosts();
    }
     

    // getPosts() {
    //     var url = "http://ergast.com/api/f1/2013/driverStandings.json";
    //     $.get(url, (data) => {
    //         // console.log(data)
    //         const {MRData: {StandingsTable : {StandingsLists : [first]}}} = data;
    //         // console.log(first);
    //         const{DriverStandings : driversData} = first;
    //         this.setState({ driversState: driversData});
    //     });

    // }
    getPosts() {
            var url = "http://ergast.com/api/f1/2013/driverStandings.json";
            $.get(url, (data) => {
               
                this.setState({ driversState: data.MRData.StandingsTable.StandingsLists[0].DriverStandings});
            });
    
        }


    render() {
        // console.log(this.state.driversState);
       
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">Drivers Championshim Standings -2013 </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.driversState.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td>{item.position}</td>
                                    <td>{item.Driver.givenName + " " + item.Driver. familyName}</td>
                                    <td>{item.Constructors[0].name}</td>
                                    <td>{item.points}</td>
                                </tr>
                            )
                        })
                            
                        }
                        
                    </tbody>
                </table>


            </div>
        )
    }
}