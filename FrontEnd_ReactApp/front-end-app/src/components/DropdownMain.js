import React, { Component } from 'react'

export default class dropdown extends Component {
    constructor() {
        super();
        this.state = {
            beerType: []
        }
    }

    componentDidMount() {
        this.setState({
            beerType: [
                { btype: "Ale" },
                { btype: "Hefeweizen" },
                { btype: "IPA" },
                { btype: "Lager" },
                { btype: "Pale Ale" },
                { btype: "Pilsner" },
                { btype: "Porter" },
                { btype: "Stout" },
            ]
        })
    }

    render() {
        return (
            <div>
                <select>
                    <option>-- Select --</option>
                </select>
                {this.state.beerType.map(i => {
                    return <option>{i.name}</option>
                })}
            </div>
        )
    }
}
