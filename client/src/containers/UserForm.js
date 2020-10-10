// import React from 'react';
// import "./../../components/App/index.css"
// // import "./../../src/"
// import axios from 'axios';
// import "./../../components/App/index.css"
// // import "./../../src/"
// // import UserListItem from "../UserListItem"

// class UserForm extends React.Component {
//     state = {
//         id: 0,
//         name: "",
//         jedi: {},
//         sith: {},
//         status: "good",

//     }

//     componentDidMount() {

//         this.fetchJediUsers();

//         this.fetchSithUsers();
//     }
//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({ name: value });
//     };




//     handleSubmit = (e) => {
//         e.preventDefault();
//         // evaluate the response doing the average and if is > 70 === good else ===bad
//         let numRandom = Math.random() * 100
//         let status = numRandom > 50 ? "good" : "bad";
//         console.log(status, numRandom)
//         if (status === "good") {
//             this.postJediData()
//         }
//         else {
//             this.postSithData()
//         }
//         this.props.onSubmit({
//             id: this.state.id++,
//             name: this.state.name,
//             sith: "false",
//             jedi: "false",
//         })

//         this.setState({
//             name: ""
//         });

//     }



//     postJediData = () => {

//         axios.post('/jedi/users', { jedi: this.state.name })
//             .then((res) => {
//                 this.setState({ users: res.data, name: "" })
//             })
//             .catch((e) => {
//                 console.log(e)
//             })

//     }
//     postSithData = () => {

//         axios.post('/sith/users', { sith: this.state.name })
//             .then((res) => {
//                 this.setState({ users: res.data, name: "" })
//             })
//             .catch((e) => {
//                 console.log(e)
//             })

//     }


//     fetchJediUsers = () => {
//         console.log("fetchJedi")
//         axios.get('/jedi/users')
//             .then((res) => {
//                 // console.log(res);
//                 console.log(res.data)
//                 this.setState({ jedi: res.data })
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//     }

//     fetchSithUsers = () => {
//         console.log("fetchSith")
//         axios.get('/sith/users')
//             .then((res) => {
//                 console.log(res.data);
//                 this.setState({ sith: res.data })
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//     }


//     deleteJediById = (id) => {

//         axios.delete(`/jedi/users/${id}`)
//             .then(() => {
//                 this.fetchJediUsers()

//             })
//             .catch((e) => {
//                 console.log(e)
//             })

//     }


//     deleteSithById = (id) => {

//         axios.delete(`/sith/users/${id}`)
//             .then(() => {
//                 this.fetchSithUsers();
//             })
//             .catch((e) => {
//                 console.log(e)
//             })

//     }

//     deleteUsersById = () => {

//         this.deleteSithById()
//         this.deleteJediById()

//     }
    
//     render() {

//         return (
//             <div>

//                 {/* <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div> */}


// <form>
//     <div className="form-group">
// <br />
// <input className="input-form-lg; " name="name"
//      placeholder ="Whats Your Name"
//     value={this.state.name} onChange={this.handleChange} />
//     <button className="add-player" onClick={this.handleSubmit}> <strong> + Add Player</strong>   </button>
// </div>
// </form>
//                 {/* <UserListItems items={this.state.users} handleDelete={this.deleteUsersById}
//          /> */}
//             </div>
//         );
//     }
// }

// export default UserForm;




 

import React, { Component } from 'react'
import axios from 'axios'
import ListItems from './ListItems'
import Questions from "./questions"
// import "./../../../App.css"

class UserForm extends Component {

    state = {
        name:'',
         users:[],
         status: "good",

      }

      componentDidMount=()=>{
          this.getUsers()
      }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
 
    }




submitAnswers = (event) => {

    let total = 5;
        let score = 0;
        const q1 = document.forms["quizForm"]["q1"].value;

        alert(q1)
        
// event.preventDefault()
// let numRandom = Math.random() * 100
// let status = numRandom > 50 ? "good" : "bad";
// console.log(status, numRandom)
// if(status === "good"){
//     this.postJedi()
// }
// else{
//     this.postSith()

// }
 }


getUsers = () => {
     axios.get('http://localhost:8000/users')
    .then((response)=>{
        this.setState({
            users: response.data
        }, ()=>{
            console.log(response.data)
        })
    })
    .catch((e)=>{
        console.log(e)
    })
}

postSith = () => {
    axios.post("http://localhost:8000/sith", {name:this.state.name})
    .then((response)=>{
        this.getUsers()
        this.setState({name:""})
        
    })
    .catch((e)=>{
        console.log(e)
    })
}

postJedi = () => {
    axios.post("http://localhost:8000/jedi", {name:this.state.name})
    .then((response)=>{
        this.getUsers()
        this.setState({name:""})
        
    })
    .catch((e)=>{
        console.log(e)
    })
}

deleteUserById = (id) => {
    axios.delete(`http://localhost:8000/users/${id}`)
    .then((response)=>{
        this.getUsers();
    })
    .catch((e)=>{
        console.log(e)
    })
}

    render() {
        return (
            // <div>
            //     <Questions 
                
            //     />
        
            <div className="form-container">
                <div className="row">
                    <div className="col-12"> 


                    

                    {/* <div className="class-form">  */}
                {/* <h1 className="form-title"> </h1> */}
                {/* </div> */}
                <section>
<form name="quizForm" onSubmit={this.submitAnswers}>

<div className="Questions">



    <p>Han shot first?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q1a"value="a" name="q1"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1b"value="b" name="q1"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1c"value="c" name="q1"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1d"value="d" name="q1"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1e"value="e" name="q1"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1f"value="f" name="q1"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1g"value="g" name="q1"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1h"value="h" name="q1"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1i"value="i" name="q1"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q1j"value="j" name="q1"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You knew those were the droids they were looking for?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Would you ever kick a puppy?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Would you help someone being mugged on the streets of Coruscant?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You think Ewoks are cute and cuddly?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Force Choke is NOT an acceptable way to settle an argument?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Patiencs and Loyalty are your defining traits?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You Believe JarJar Binks is really a Sith Lord? (Google it)</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Endor is a great place to Visit?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>"You see an injured Porg, Do you help it?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2f"value="f" name="q2"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q2"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2h"value="h" name="q2"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2i"value="i" name="q2"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2j"value="j" name="q2"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<input placeholder="name" onChange={this.onChangeHandler} value={this.state.name} type="text" name="name"></input>


<input className="btn btn-primary submit" onClick={this.submitAnswers} type="submit" value="Submit Answers"></input>

{/* <input placeholder="name" onChange={this.onChangeHandler} value={this.state.name} type="text" name="name"></input> */}
 
 {/* <button value="Submit Answers" className="btn btn-primary submit"onClick={this.submitAnswers}>signup</button> */}

</form>

</section>
  

                 


                

                <ListItems items={this.state.users} handleDelete={this.deleteUserById}/>

                    {/* </div> */}


                    </div>
                </div>

             </div>  

         );
    }
}


export default UserForm

