import React, { Component } from 'react';
import axios from "axios"
import jediSide from './../components/react-sound/jediside.jpg'
import sithSide from './../components/react-sound/darkside.jpg'
// import {Link } from "react-router-dom"


class UserListItem extends Component {
    state={
        user: {},
        name:'',
    }


    handleChange = event => {
        this.setState({name:event.target.value})
    }
    // async 
    componentDidMount(){
        axios.get(`/users/${this.props.match.params.userId}`).then((response)=>{
            this.setState({user: response.data})
        })
        .catch((e)=>{
            console.log(e)
        })
     
    }

    handleSubmit = async event => {
        event.preventDefault()
        try{
            await axios.patch(`/users/${this.props.match.params.userId}`,{name:this.state.name})
            const {data: user} = await axios.get(`/users/${this.props.match.params.userId}`)
            this.setState({user,name:''})
         }
        catch(e){

        }
    }

    render() {
        console.log("this",this.state)
         // const {user} = this.state
        return (
            <div className="overlay" style={{backgroundImage: this.state.user.jedi? "url(" + jediSide + ")":"url(" + sithSide + ")",backgroundSize:'cover'}}>
                {/* <h1><strong> name:</strong> {this.state.user.name} </h1>     

                <h1><strong>status: </strong> {this.state.user.jedi}</h1>
                
                <input onChange={this.handleChange}
                       value={this.state.name}/>  <button onClick={this.handleSubmit}> submit change </button>  */}


{/* <div className="container">
    <div className="row">
        <div className='col-12'> 
        <ul style={{float:'right',marginRight:'80px',marginTop:'25px'}}class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <Link class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
  </li>
  
</ul>
 
        </div>
    </div>
</div> */}



 <div className="container">
     <div className="row">
         <div className="col-4">
         <div className="card" style={{backgroundColor:this.state.user.sith? 'rgba(217, 30, 24, .4)':'rgba(63, 195, 128, .4)',color:'black'}}>
   <div className="card-body playerCard">
       <h3> Player Card</h3>
     <h5 className="card-title"> <strong> name:</strong> {this.state.user.name}</h5>
     <h5 className="card-title"> <strong> strength:</strong> {this.state.user.points*1000}</h5>
      <h6 ><strong> status: </strong> {this.state.user.sith? "Sith": "Jedi"}</h6>
     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      
     {/* <div> 
     <input onChange={this.handleChange}
                        value={this.state.name}/>  <button onClick={this.handleSubmit}> submit change </button>
                        </div> */}
   </div>
 </div>
            </div>
         </div>
     </div>
 </div>
 
 
 
        );
    }
}


export default UserListItem
