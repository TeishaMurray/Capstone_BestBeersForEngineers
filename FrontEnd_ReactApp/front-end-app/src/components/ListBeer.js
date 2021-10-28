import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class ListBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beer: []
            //est empty array where i will store my list
        }

        this.addBeer = this.addBeer.bind(this);
        this.editBeer = this.editBeer.bind(this);
        this.viewBeer = this.viewBeer.bind(this);
        //passing data as argument in the function of this component
    }

    componentDidMount(){
        BeerService.getAllBeers().then((res) => {
            this.setState({beer: res.data});
        })
    }

    addBeer(){
        this.props.history.push('/addbeer')
    }

    viewBeer(id){
        this.props.history.push(`/view-beer/${id}`)
    }

    deleteBeer(id){
        this.props.history.push(`/delete-beer/${id}`);
    }

    editBeer(id){
        this.props.history.push(`/update-beer/${id}`)
    }

    render() {
        return (
            <div>
                <h2>Craft Beer List</h2>  
                <div className="row">
                    <button onClick={this.addBeer} className="btn btn-primary">Add Beer</button>
                </div>
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
                                    <td>
                                        <button onClick={() => this.viewBeer(beer.id)} className="btn btn-primary">View</button>
                                        <button onClick={() => this.editBeer(beer.id)} className="btn btn-primary">Update</button>
                                        <button onClick={() => this.deleteBeer(beer.id)} className="btn btn-primary">Delete</button>
                                        </td>
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
