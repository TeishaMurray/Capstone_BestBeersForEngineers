import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class ViewBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            beer: {}
        }

        this.editBeer = this.editBeer.bind(this);
        this.returnToList = this.returnToList.bind(this);

    }

    componentDidMount() {
        BeerService.getBeerById(this.state.id).then((res) => {
            this.setState({ beer: res.data })
            console.log(res.data)
        });
    }

    editBeer() {
        this.props.history.push(`/update-beer/${this.state.id}`)
    }
    returnToList() {
        this.props.history.push('/allbeers')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">All About {this.state.beer.name} </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        {/* add accessibility!!!! */}
                                        <label>Brewery: </label>
                                        <span><h3>{this.state.beer.brewery}</h3></span>
                                        <label>State: </label>
                                        <span><h3>{this.state.beer.state}</h3></span>
                                        <label>Type:</label>
                                        <span><h2>{this.state.beer.type}</h2></span>
                                        <label>Taste: </label>
                                        <span><h3>{this.state.beer.subtype}</h3></span>
                                        <label>ABV%</label>
                                        <h4>{this.state.beer.abv}</h4>
                                        <label></label>
                                    </div>
                                    <div>
                                    <button onClick={() => this.editBeer(this.state.beer.id)} className="btn btn-primary">Update</button>
                                    <button onClick={() => this.returnToList()} className="btn btn-secondary">Done</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
