import React, { Component } from 'react'
import {Link } from "react-router-dom"
import './../components/react-sound/index.css'
import ListItems from './ListItems'


export default class Results extends Component {
    render() {
        return (
            <div className="wrapper">

  

                <ListItems items={this.state.users} handleDelete={this.deleteUserById}/>


</div>


         )
    }
}