import React, { Component } from 'react'
// import DropdownMain from './DropdownMain'

export default class AddBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            type: "",
            subtype: "",
            abv: 0,
            brewery: "",
            state: "",
            beerType: [
                { btype: "Ale", beerSubType: ["Amber", "Blonde", "Brown", "Golden", "Hefeweizen", "Pale", "Scotch", "Sour"] },
                { btype: "IPA", beerSubType:["Black", "Coffee", "Double/Imperial", "East Coast", "Fruit", "Hazy", "Session", "West Coast", "Wet-Hopped", "Wood-Aged"] },
                { btype: "Lager", beerSubType:["Amber/Red", "American", "Bock", "Kolsch", "Pilsner"] },
                { btype: "Porter", beerSubTyp: ["Baltic", "Blonde", "Coffee", "Mole", "Oatmeal", "Peanut Butter", "Robust", "Smokey"] },
                { btype: "Stout", beerSubTyp: ["Barrel-Aged", "Coffee", "Dry Irish", "Imperial", "Milk", "Oatmeal", "Oyster", "Pastry"]},
            ]
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         beerType: [
    //             { type: "Ale" },
    //             { type: "Hefeweizen" },
    //             { type: "IPA" },
    //             { type: "Lager" },
    //             { type: "Pale Ale" },
    //             { type: "Pilsner" },
    //             { type: "Porter" },
    //             { type: "Stout" },
    //         ]
    //     })
    // }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Beer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Beer Name: </label>
                                        <input placeholder="Enter name of beer" name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="dropdowns">
                                        <select>
                                            <option>-- Select --</option>
                                        
                                        {this.state.beerType.map(i => {
                                            return <option>{i.btype}</option>
                                        })}
                                        </select>
                                        {/* <DropdownMain /> */}
                                    </div>
                                    {/* <div className="form-group">
                                        <label for="beer-type">Type of Beer: </label>
                                        <select className="type" id="beer-type">
                                            <option value={this.state.type} onChange={this.typeHandler}>Ale</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Hefeweizen</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>IPA</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Lager</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Pale Ale</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Pilsner</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Porter</option>
                                            <option value={this.state.type} onChange={this.typeHandler}>Stout</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Subtype: </label>
                                        <select className="subtype">
                                            <option value={this.state.subtype} onChange={this.subtypeHandler}></option>
                                        </select>
                                    </div> */}
                                    {/*     
                                    <button className="btn btn-success" onClick={this.saveStudent}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                     */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
