import React, { Component } from 'react'
import '../css/custom.css'
import Container  from 'react-bootstrap/Container'
// import beerbackground from '../images/beerbackground.jpg'

export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <Container className="strip">
                    {/* <figure className='position-relative'>
                        <img src={beerbackground} alt='beer' className='img-fluid' />
                        <figcaption>
                            Close-up of beer.
                        </figcaption>
                    </figure> */}

                </Container>
            </div>
            // <MDBContainer fluid>
            //     <img src='https://images.unsplash.com/photo-1613946515176-904e3e38ed6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80' className='img-fluid shadow-4' alt='...'/>
            //     <div>
            //         <p classname="lead text-dark">Imagine you and your team just finished a god-awful sprint (or maybe it was a Capstone Project, who knows?)...</p>
            //         <hr className="my-4" />
            //         <p>I mean everything that could possibly go wrong went wrong. What you thought were simple fixes crashed the whole application.</p>

            //         <p>At some point you were pretty sure that all of the features were bugs. But you guys pulled through. You don't throw these people a pizza party.</p>

            //         <p>Hard working devs deserve more than just pizza. They deserve delicious, flavorful, potentially high ABV craft beers.
            //         </p>
            //         <h1 className="display">Cheers,</h1>
            //         <h3>Murray</h3>

            //     </div>
            // </MDBContainer>
        )
    }
}
