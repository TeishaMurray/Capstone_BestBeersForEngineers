import React, { Component } from 'react'
import {Image} from 'react-bootstrap'
// import {beerbackground} from '../images/beerbackground'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="p-5 rounded-fluid m-3">
                <Image src="barleyfield.js/100px250" fluid/>
                <p classname="lead">Imagine you and your team just finished a god-awful sprint (or maybe it was a Capstone Project, who knows?)...</p>
                <hr className="my-4"/>
                <p>I mean everything that could possibly go wrong went wrong. What you thought were simple fixes crashed the whole application.</p>
                
                <p>At some point you were pretty sure that all of the features were bugs. But you guys pulled through. You don't throw these people a pizza party.</p> 
                
                <p>Hard working devs deserve more than just pizza. They deserve delicious, flavorful, potentially high ABV craft beers.
                </p>
                <h1 className="display">Cheers,</h1>
                <h3>Murray</h3>
                
            </div>
        )
    }
}
