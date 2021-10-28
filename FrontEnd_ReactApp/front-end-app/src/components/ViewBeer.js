import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import BeerService from '../services/BeerService'
import axios from "axios"


export default class ViewBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            beer: {},
            breweryInfo: []
        }

        this.editBeer = this.editBeer.bind(this);
        this.returnToList = this.returnToList.bind(this);
        // this.viewBrewery = this.viewBrewery.bind(this);

    }

    componentDidMount() {
        BeerService.getBeerById(this.state.id).then((res) => {
            this.setState({ beer: res.data })
            console.log("first log ", res.data)
            console.log("second log", res.data.brewery)
            console.log("third log ", this.state.beer.brewery)
        });
    }

    componentDidUpdate(){
        let options = {
            method: 'GET',
                url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries',
                params: { by_name: this.state.beer.brewery},
                headers: {
                    'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com',
                    'x-rapidapi-key': '<api key here>'
                }
            };

        axios.request(options).then(response => {
            // const breweryInfo = response.data;
            // this.setState({breweryInfo});
            console.log("Results: ", response.data);
            console.log("BreweryInfo ", response.data[0].city);            
        }).catch(function (error) {
            console.error(error, "Something went wrong.");
        });
}
    // componentDidUpdate(prevState){
    //     let options = {
    //         method: 'GET',
    //             url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries',
    //             params: { by_name: this.state.beer.brewery},
    //             headers: {
    //                 'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com',
    //                 'x-rapidapi-key': '97024a6684msh858963c77e4b29fp1f4aa4jsn1c6b3e1ccbaa'
    //             }
    //         };

    //     // axios.request(options).then(function (response) {
    //     //     console.log("Results: ", response.data);
    //     //     console.log("BreweryInfo ", response.data[0].city);
    //     // }).catch(function (error) {
    //     //     console.error(error, "Something went wrong.");
    //     // });
    //     if(prevState.breweryInfo !== this.state.breweryInfo){
    //         axios.request(options).then(response => {
    //             this.setState({breweryInfo: response.data});
    //             console.log("This.response?", this.state.breweryInfo[0]);
    //             console.log(this.state.breweryInfo[0].city);
    //             console.log(this.state.breweryInfo[0].state);
    //             console.log(this.state.breweryInfo[0].website_url);
    //         })
    //         .catch(error => {
    //             console.log("Error msg: ", error);
    //         })
    //     }
    // }

    editBeer() {
        this.props.history.push(`/update-beer/${this.state.id}`)
    }
    returnToList() {
        this.props.history.push('/allbeers')
    }

    // viewBrewery() {
    //     console.log(this.state.breweryInfo)
    // }

    render() {
        return (
            <div>
                <div className="testing">
                    <h1>Testing</h1>
                    <h2>{this.state.beer.city}</h2>
                </div>
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
                                        {/* <button onClick={() => this.viewBrewery()} className="btn btn-secondary">View Brewery</button> */}
                                    </div>
                                </form>
                            </div>
                            {/* <Modal show={false}>
                                <Modal.Header>More About {this.state.beer.brewery}</Modal.Header>
                                <Modal.Body>
                                </Modal.Body>
                            </Modal> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
