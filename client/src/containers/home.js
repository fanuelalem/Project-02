import React, { Component } from 'react'
import {Link } from "react-router-dom"
import './../components/react-sound/index.css'

export default class home extends Component {
    render() {
        return (
            <div className="wrapper">

                <div>


<Link to="/quiz"><button className="btn-lg get-started">Get Started</button></Link>

</div>


            </div>
        )
    }
}