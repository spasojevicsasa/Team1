import React from 'react';

export default class Drivers extends React.Component {
    constructor(){
        super();
        this.state = {
            position:[]
        }
   

    }  
    
    componentDidMount(){
        this.getPosts();

    }

    getPosts(){
        var url = "http://ergast.com/api/f1/2013/driverstandings.json";
        $.get(url, (data) => {
            console.log(data);
            this.setState({driverState: data.MRData.StandingsTable.StandingsLists[0].DriverStandings});

        }
        
        )


    }
    render (){
        console.log("User componenet",this.props.position);
        return (
            <div>
              <table>
                  <tbody>
                  <tr>
                      <th colSpan="4">Drivers Championship Standings 2013.</th>
                  </tr>
               
                   <tr>
                       <td>{this.props.position.position}</td>
                    </tr>
                  </tbody>
                  
    

              </table>

              
            </div>
        );
    }
}