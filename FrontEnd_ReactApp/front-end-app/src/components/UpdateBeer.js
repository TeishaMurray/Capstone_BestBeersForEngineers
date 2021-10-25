import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class UpdateBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: "",
            type: [],
            subtype: [],
            abv: 0,
            brewery: "",
            state: "",
            beerType: [],
            beerSubType: [],
            selectBT: "",
        }

        this.nameHandler = this.nameHandler.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.subSelectChange = this.subSelectChange.bind(this);
        this.abvHandler = this.abvHandler.bind(this);
        this.breweryHandler = this.breweryHandler.bind(this);
        this.locationHandler = this.locationHandler.bind(this);
        this.updateBeer = this.updateBeer.bind(this);
        this.cancelSave = this.cancelSave.bind(this);

    }

    componentDidMount() {
        BeerService.getBeerById(this.state.id).then((res) => {
            let beer = res.data;
            this.setState({
                name: beer.name,
                beerType: [
                    { btype: "Ale", beerSubType: ["Amber", "Berry", "Blonde", "Brown", "Citrus", "Golden", "Hefeweizen", "Pale", "Scotch", "Sour"] },
                    { btype: "IPA", beerSubType: ["Berry", "Black", "Citrus", "Coffee", "Double/Imperial", "East Coast", "Hazy", "Session", "West Coast", "Wet-Hopped", "Wood-Aged"] },
                    { btype: "Lager", beerSubType: ["Amber/Red", "American", "Bock", "Kolsch", "Pilsner"] },
                    { btype: "Porter", beerSubType: ["Baltic", "Blonde", "Coffee", "Mole", "Oatmeal", "Peanut Butter", "Robust", "Smokey"] },
                    { btype: "Stout", beerSubType: ["Barrel-Aged","Chocolate", "Coffee", "Dry Irish", "Imperial", "Milk", "Oatmeal", "Oyster", "Pastry"] },
                ],
                abv: beer.abv,
                brewery: beer.brewery,
                state: beer.state
            })
        })
    }

    selectChange(e) {
        this.setState({ type: e.target.value });
        this.setState({ beerSubType: this.state.beerType.find(i => i.btype === e.target.value).beerSubType });
    }    

    subSelectChange(e) {
        this.setState({subtype: e.target.value})
    }

    nameHandler(e) {
        this.setState({name: e.target.value});
    }

    abvHandler(e) {
        this.setState({abv: e.target.value});
    }

    breweryHandler(e) {
        this.setState({brewery: e.target.value});
    }

    locationHandler(e) {
        this.setState({state: e.target.value})
    }

    updateBeer(e) {
        e.preventDefault();
        let beer = {
            id: this.state.id,
            name: this.state.name, 
            type: this.state.type, 
            subtype: this.state.subtype, 
            abv: this.state.abv, 
            brewery: this.state.brewery, 
            state: this.state.state
        };

        BeerService.updateBeer(beer, this.state.id).then(res =>{
            this.props.history.push('/beers')
        })
    }

    cancelSave() {
        this.props.history.push('/allbeers')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Beer</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                      <label>Beer ID: </label>
                                      <input placeholder={this.state.id} readOnly={true} name="id" className="form-control"
                                         value={this.state.id}/>
                                   </div>   
                                    <div className="form-group">
                                        <label>Beer Name: </label>
                                        <input type="text" placeholder={this.state.name} name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Beer Type: </label>
                                            <select placeholder={this.state.type} value={this.state.type} onChange={this.selectChange}>
                                                <option>--Select Type---</option>
                                                {
                                                    this.state.beerType.map(i => {
                                                        return <option>{i.btype}</option>
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label>Beer SubType: </label>
                                            <select value={this.state.subtype} onChange={this.subSelectChange}>
                                                <option >--Select SubType--</option>
                                                {
                                                    this.state.beerSubType.map(i => {
                                                        return <option>{i}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <label>ABV%: </label>
                                    <input type="number" step="any" min="1.00" max="67.50" name="abv" className="form-control" placeholder={this.state.abv}
                                        value={this.state.abv} onChange={this.abvHandler} />
                                    <label>Brewery Name: </label>
                                    <input type="text" name="brewery" className="form-control"
                                        value={this.state.brewery} onChange={this.breweryHandler} />
                                    <label>State: </label>
                                    <input type="text" maxLength="2" placeholder="OH" name="state" className="form-control"
                                        value={this.state.state}  onChange={this.locationHandler} />

                                    <button className="btn btn-success" onClick={this.updateBeer}> Update </button>
                                    <button className="btn btn-danger" onClick={this.cancelSave}> Cancel </button>                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
