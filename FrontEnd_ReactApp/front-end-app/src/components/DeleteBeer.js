import React, { Component } from 'react'
import BeerService from '../services/BeerService';

export default class DeleteBeer extends Component {
    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            name: "",
            type: "",
            subtype: "",
            abv: 0,
            brewery: "",
            state: "",
            beerType: [],
            beerSubType: [],
            selectBT: "",
        }

        this.deleteBeer = this.deleteBeer.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
    }

    componentDidMount(){
        BeerService.getBeerById(this.state.id).then((res) =>{
            let beer = res.data;
            this.setState({
                name: beer.name,
                beerType: beer.type,
                subtype: beer.subtype,
                abv: beer.abv,
                brewery: beer.brewery,
                state: beer.state
            })
        })
    }

    deleteBeer = (e) => {
        e.preventDefault();
        let beer = {
            name: this.state.name, 
            type: this.state.type, 
            beerSubType: this.state.beerSubType, 
            abv: this.state.abv, 
            brewery: this.state.brewery, 
            state: this.state.state
        };

        console.log(beer);
        BeerService.deleteBeer(this.state.id).then(res => {
            
            this.props.history.push('/beers');
        })
      
        
    }

    cancelDelete() {
        this.props.history.push('/allbeers')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Delete Beer</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                      <label>Beer ID: </label>
                                      <input placeholder={this.state.id} readOnly={true} name="id" className="form-control"
                                         value={this.state.id}/>
                                   </div>   
                                    <div className="form-group">
                                        <label>Beer Name: </label>
                                        <input type="text" placeholder={this.state.name} name="name" readOnly={true} className="form-control"
                                            value={this.state.name}/>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Beer Type: </label>
                                            <input placeholder={this.state.type} value={this.state.selectBT} readOnly={true} >
                                            </input>
                                        </div>

                                        <div className="col">
                                            <label>Beer SubType: </label>
                                            <input placeholder={this.state.subtype} readOnly={true}>
                                            </input>
                                        </div>
                                    </div>
                                    <label>ABV%: </label>
                                    <input type="number" step="any" min="1.00" max="67.50" name="abv" readOnly={true} className="form-control" placeholder={this.state.abv}
                                        value={this.state.abv} />
                                    <label>Brewery Name: </label>
                                    <input type="text" name="brewery"readOnly={true} className="form-control"
                                        value={this.state.brewery} />
                                    <label>State: </label>
                                    <input type="text" maxLength="2" placeholder="OH" name="state" readOnly={true} className="form-control"
                                        value={this.state.state} />

                                    <button className="btn btn-success" onClick={this.deleteBeer}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancelDelete}> Cancel </button>                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
