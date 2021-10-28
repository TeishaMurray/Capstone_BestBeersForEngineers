import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class BeerByType extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            type: "",
            subtype: "",
            abv: 0,
            brewery: "",
            state: "",
            beerType: [],
            beerSubType: [],
            selectBT: "",
            beer: [],
            displayedBeer: []
        }

        this.selectChange = this.selectChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.addBeer = this.addBeer.bind(this);
        this.editBeer = this.editBeer.bind(this);
        this.viewBeer = this.viewBeer.bind(this);
    }

    componentDidMount() {
        BeerService.getAllBeers().then((res) => {
            this.setState({ beer: res.data });
            console.log(this.state.beer)
        })

        this.setState({
            beerType: [
                { btype: "Ale" },
                { btype: "IPA" },
                { btype: "Lager" },
                { btype: "Porter" },
                { btype: "Stout" },
            ]
        });
    }

    selectChange(e) {
        this.setState({ type: e.target.value });
        this.setState({ beerSubType: this.state.beerType.find(i => i.btype === e.target.value).beerSubType });
    }

    submitSearch(e) {
        e.preventDefault();
        this.setState({ displayedBeer: this.state.beer.filter(selection => selection.type === this.state.type) });
    }

    addBeer() {
        this.props.history.push('/addbeer')
    }

    viewBeer(id) {
        this.props.history.push(`/view-beer/${id}`)
    }

    editBeer(id) {
        this.props.history.push(`/update-beer/${id}`)
    }

    render() {
        console.log("search results: ", this.state.displayedBeer);
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Search Beer By Type</h3>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <label>Beer Type: </label>
                                        <select value={this.state.type} onChange={this.selectChange}>
                                            <option>--Select Type---</option>
                                            {
                                                this.state.beerType.map(i => {
                                                    return <option>{i.btype}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-success" onClick={this.submitSearch}> Search </button>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
                <div>
                    <table className="table">
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
                            {this.state.displayedBeer.map(
                                displayedBeer =>
                                    <tr key={displayedBeer.id}>
                                        <td>{displayedBeer.name}</td>
                                        <td>{displayedBeer.type}</td>
                                        <td>{displayedBeer.subtype}</td>
                                        <td>{displayedBeer.abv}</td>
                                        <td>{displayedBeer.brewery}</td>
                                        <td>{displayedBeer.state}</td>
                                        <td>
                                        <button onClick={() => this.viewBeer(displayedBeer.id)} className="btn btn-primary">View</button>
                                        <button onClick={() => this.editBeer(displayedBeer.id)} className="btn btn-primary">Update</button>
                                        <button onClick={() => this.deleteBeer(displayedBeer.id)} className="btn btn-primary">Delete</button>
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
