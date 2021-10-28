import React from 'react';
import axios from 'axios';
import BeerService from '../services/BeerService'

const ViewABeer = () => {
    const [id, setID] = useState(this.props.match.params.id)
    const [beer, setBeer] = useState({})
    const [breweryInfo, setBreweryInfo] = useState({})

    const getBeer = () => {
        BeerService.getBeerById(this.state.id)
    }
}