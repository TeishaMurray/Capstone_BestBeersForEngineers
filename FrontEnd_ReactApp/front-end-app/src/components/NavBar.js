import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/allbeers">Check the List</Link></li>
                    <li><Link to="/beer-by-type">Search by Type</Link></li>
                </ul>
            </div>
        )
    }
}
