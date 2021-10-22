import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class ListBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beer: []
            //est empty array where i will store my list
        }
    }

    componentDidMount(){
        BeerService.getAllBeers().then((res) => {
            this.setState({beer: res.data});
        })
    }

    render() {
        return (
            <div>
                <h2>Craft Beer List</h2>  
                <div className = "row">
                  <table className = "table">

                      <thead>
                          <tr>
                            {/* <th>ID</th> */}
                            <th>Beer Name</th>
                            <th>Type</th>
                            <th>Sub-Type</th>
                            <th>ABV%</th>
                            <th>Brewery Name</th>
                            <th>State</th>
                            <th>Options</th>
                          </tr>
                      </thead>

                      <tbody>
                        {
                            this.state.beer.map(
                                beer => 
                                <tr key = {beer.id}>
                                    <td>{beer.name}</td>
                                    <td>{beer.type}</td>
                                    <td>{beer.subtype}</td>
                                    <td>{beer.abv}</td>
                                    <td>{beer.brewery}</td>
                                    <td>{beer.state}</td>
                                    <td></td>
                                </tr>
                            )
                        }

                      </tbody>
                  </table>
              </div>


            </div>
        )
    }
}
