import React, { Component } from 'react'
import BeerService from '../services/BeerService'

export default class BeerByType extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

        this.selectChange = this.selectChange.bind(this);
        this.subSelectChange = this.subSelectChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            beerType: [
                { btype: "Ale", beerSubType: ["Amber", "Berry", "Blonde", "Brown", "Citrus", "Golden", "Hefeweizen", "Pale", "Scotch", "Sour"] },
                { btype: "IPA", beerSubType: ["Berry", "Black", "Citrus", "Coffee", "Double/Imperial", "East Coast", "Hazy", "Session", "West Coast", "Wet-Hopped", "Wood-Aged"] },
                { btype: "Lager", beerSubType: ["Amber/Red", "American", "Bock", "Kolsch", "Pilsner"] },
                { btype: "Porter", beerSubType: ["Baltic", "Blonde", "Coffee", "Mole", "Oatmeal", "Peanut Butter", "Robust", "Smokey"] },
                { btype: "Stout", beerSubType: ["Barrel-Aged", "Chocolate", "Coffee", "Dry Irish", "Imperial", "Milk", "Oatmeal", "Oyster", "Pastry"] },
            ]
        });
    }

    selectChange(e){
        this.setState({type: e.target.value})
        this.setState({beerSubType: this.state.beerType.find(i => i.btype === e.target.value).beerSubType});
    }

    subSelectChange(e){
        this.setState({subtype: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Search Beer By Name</h3>
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
                                    <button className="btn btn-success" onClick={this.saveBeer}> Add </button>
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
