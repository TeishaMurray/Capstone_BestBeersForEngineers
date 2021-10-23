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
            beerType: [],
            beerSubType: [],
            selectBT: "",
           
        }
    }

    componentDidMount() {
        this.setState({
            beerType: [
                { btype: "Ale", beerSubType: ["Amber", "Berry", "Blonde", "Brown", "Citrus", "Golden", "Hefeweizen", "Pale", "Scotch", "Sour"] },
                { btype: "IPA", beerSubType:["Berry", "Black", "Citrus", "Coffee", "Double/Imperial", "East Coast", "Hazy", "Session", "West Coast", "Wet-Hopped", "Wood-Aged"] },
                { btype: "Lager", beerSubType:["Amber/Red", "American", "Bock", "Kolsch", "Pilsner"] },
                { btype: "Porter", beerSubType: ["Baltic", "Blonde", "Coffee", "Mole", "Oatmeal", "Peanut Butter", "Robust", "Smokey"] },
                { btype: "Stout", beerSubType: ["Barrel-Aged", "Coffee", "Dry Irish", "Imperial", "Milk", "Oatmeal", "Oyster", "Pastry"]},
            ]
        });
    }

    selectChange(e) {
        this.setState({selectBT: e.target.value});
        //^^set the value to whatever beer type is selected
        this.setState({beerSubType: this.state.beerType.find(i => i.btype === e.target.value).beerSubType});
        //^^find the beer type selected and display dorresponding sub menu

    }

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
                                        <select value={this.state.selectBT} onChange={this.selectChange.bind(this)}>
                                            <option>--Select Type---</option>
                                            {
                                            this.state.beerType.map(i => {
                                                return <option>{i.btype}</option>
                                            })
                                            }
                                        </select>

                                        <select >
                                            <option >--Select SubType--</option>
                                            {
                                                this.state.beerSubType.map(i => {
                                                    return <option>{i}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                       
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
