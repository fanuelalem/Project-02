import React, { Component } from 'react'
import axios from 'axios'
import ListItems from './ListItems'
 
 
// import Questions from "./questions"
 
// import "./../../../App.css"

class UserForm extends Component {

    state = {
        name:'',
        users:[],
        status: "good",
        result:0,
        visible: false,
        points:0
 

      }

      componentDidMount=()=>{
          this.getUsers()
      }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
 
    }




submitAnswers = (event) => {
event.preventDefault()
    // let total = 5;
        

        if(this.state.name == ''){




            
            alert('you must enter a name')
        }else{
           
            
            let score = 0;
            const q1 = document.forms["quizForm"]["q1"].value;
            const q2 = document.forms["quizForm"]["q2"].value;
            const q3 = document.forms["quizForm"]["q3"].value;
            const q4 = document.forms["quizForm"]["q4"].value;
            const q5 = document.forms["quizForm"]["q5"].value;
            const q6 = document.forms["quizForm"]["q6"].value;
            const q7 = document.forms["quizForm"]["q7"].value;
            const q8 = document.forms["quizForm"]["q8"].value;
            const q9 = document.forms["quizForm"]["q9"].value;
            const q10 = document.forms["quizForm"]["q10"].value;
    
            let answers = ['a','b','c','d','e','f','g','h','i','j']
    
            if(q1 === answers[5] || q1 === answers[6] || q1 === answers[7] || q1 === answers[8] || q1 === answers[9]){
                score++
            }
            if(q2 === answers[5] || q2 === answers[6] || q2 === answers[7] || q2 === answers[8] || q2 === answers[9]){
                score++
            }
            if(q3 === answers[5] || q3 === answers[6] || q3 === answers[7] || q3 === answers[8] || q3 === answers[9]){
                score++
            }
            if(q4 === answers[5] || q4 === answers[6] || q4 === answers[7] || q4 === answers[8] || q4 === answers[9]){
                score++
            }
            if(q5 === answers[5] || q5 === answers[6] || q5 === answers[7] || q5 === answers[8] || q5 === answers[9]){
                score++
            }
            if(q6 === answers[5] || q6 === answers[6] || q6 === answers[7] || q6 === answers[8] || q6 === answers[9]){
                score++
            }
            if(q7 === answers[5] || q7 === answers[6] || q7 === answers[7] || q7 === answers[8] || q7 === answers[9]){
                score++
            }
            if(q8 === answers[5] || q8 === answers[6] || q8 === answers[7] || q8 === answers[8] || q8 === answers[9]){
                score++
            }
            if(q9 === answers[5] || q9 === answers[6] || q9 === answers[7] || q9 === answers[8] || q9 === answers[9]){
                score++
            }
            if(q10 === answers[5] || q10 === answers[6] || q10 === answers[7] || q10 === answers[8] || q10 === answers[9]){
                score++
            }
            // this.setState({result:score,points:score})
  
            this.setState({result:score,points:score})
            

            if(score>=5){
                axios.post("http://localhost:8000/jedi", {name:this.state.name,points:score})
                .then((response)=>{
                    this.getUsers()
                    this.setState({name:""})
                    
                })
                .catch((e)=>{
                    console.log(e)
                }) 
             }
            else{
                axios.post("http://localhost:8000/sith", {name:this.state.name,points:score})
                .then((response)=>{
                    this.getUsers()
                    this.setState({name:""})
                    
                })
                .catch((e)=>{
                    console.log(e)
                })
            
            }




            this.setState({
                visible:true,
             })

        }


 }
 

getUsers = () => {
     axios.get('http://localhost:8000/users')
    .then((response)=>{
        this.setState({
            users: response.data.reverse()
        }, ()=>{
            console.log(response.data,'this is test')
        })
    })
    .catch((e)=>{
        console.log(e)
    })
}

// postSith = () => {
    

//     axios.post("http://localhost:8000/sith", {name:this.state.name,points:this.state.points})
//     .then((response)=>{
//         this.getUsers()
//         this.setState({name:""})
        
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
// }

// postJedi = () => {
//     console.log(this.state.points,'klk')
//     axios.post("http://localhost:8000/jedi", {name:this.state.name,points:this.state.points})
//     .then((response)=>{
//         this.getUsers()
//         this.setState({name:""})
        
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
// }

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
        
            <div className="container">
                <div className="row">
                    <div className="col-12"> 

                    <div style={{borderRadius:'25px'}}>

 
                    <p className="Title-Description">
  The Jedi Code
</p>

  <div className="Descripton">A Jedi or Sith Personality Test </div>
                    

                    {/* <div className="class-form">  */}
                {/* <h1 className="form-title"> </h1> */}
                {/* </div> */}
                <section>
<form name="quizForm" onSubmit={this.submitAnswers}>



<div className="Questions">



    <p>Han shot first?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div style={{textAlign:'center'}} className="container">
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
    <input className="form-check input" id="q3a"value="a" name="q3"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3b"value="b" name="q3"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3c"value="c" name="q3"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3d"value="d" name="q3"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3e"value="e" name="q3"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3f"value="f" name="q3"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q2g"value="g" name="q3"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3h"value="h" name="q3"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3i"value="i" name="q3"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q3j"value="j" name="q3"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Would you help someone being mugged on the streets of Coruscant?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q4a"value="a" name="q4"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4b"value="b" name="q4"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4c"value="c" name="q4"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4d"value="d" name="q4"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4e"value="e" name="q4"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4f"value="f" name="q4"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4g"value="g" name="q4"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4h"value="h" name="q4"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4i"value="i" name="q4"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q4j"value="j" name="q4"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You think Ewoks are cute and cuddly?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q5a"value="a" name="q5"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5b"value="b" name="q5"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5c"value="c" name="q5"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5d"value="d" name="q5"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5e"value="e" name="q5"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5f"value="f" name="q5"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5g"value="g" name="q5"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5h"value="h" name="q5"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5i"value="i" name="q5"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q5j"value="j" name="q5"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Force Choke is NOT an acceptable way to settle an argument?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q6a"value="a" name="q6"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6b"value="b" name="q6"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6c"value="c" name="q6"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6d"value="d" name="q6"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6e"value="e" name="q6"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6f"value="f" name="q6"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6g"value="g" name="q6"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6h"value="h" name="q6" type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6i"value="i" name="q6"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q6j"value="j" name="q6"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Patiencs and Loyalty are your defining traits?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q7a"value="a" name="q7"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7b"value="b" name="q7"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7c"value="c" name="q7"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7d"value="d" name="q7"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7e"value="e" name="q7"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7f"value="f" name="q7"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7g"value="g" name="q7"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7h"value="h" name="q7"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7i"value="i" name="q7"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q7j"value="j" name="q7"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You Believe JarJar Binks is really a Sith Lord? (Google it)</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q8a"value="a" name="q8"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8b"value="b" name="q8"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8c"value="c" name="q8"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8d"value="d" name="q8"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8e"value="e" name="q8"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8f"value="f" name="q8"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8g"value="g" name="q8"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8h"value="h" name="q8"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8i"value="i" name="q8"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q8j"value="j" name="q8"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>Endor is a great place to Visit?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q9a"value="a" name="q9"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9b"value="b" name="q9"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9c"value="c" name="q9"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9d"value="d" name="q9"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9e"value="e" name="q9"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9f"value="f" name="q9"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9g"value="g" name="q9"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9h"value="h" name="q9"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9i"value="i" name="q9"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q9j"value="j" name="q9"type="radio"></input>10<br></br>
    </div>


    
    
</div>
</div>
</div>

<div className="Questions"><p>You see an injured Porg, Do you help it?</p></div>

    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <div className="form-check form-check-inline center">

    <div >
    <input className="form-check input" id="q10a"value="a" name="q10"type="radio"></input>1 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10b"value="b" name="q10"type="radio"></input>2<br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10c"value="c" name="q10"type="radio"></input>3 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10d"value="d" name="q10"type="radio"></input>4 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10e"value="e" name="q10"type="radio"></input>5 
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10f"value="f" name="q10"type="radio"></input>6 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10g"value="g" name="q10"type="radio"></input>7 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10h"value="h" name="q10"type="radio"></input>8 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10i"value="i" name="q10"type="radio"></input>9 <br></br>
    </div>

    <div className="form-check">
    <input className="form-check input" id="q10j"value="j" name="q10"type="radio"></input>10<br></br>
    </div>
 

 
    
    
</div>
</div>
</div>

 

<div style={{textAlign:'center'}}className="input-name">

<form style={{paddingTop:'18px',paddingBottom:'10px'}}class="form-inline">
  <div class="form-group">
     <input onChange={this.onChangeHandler} value={this.state.name} placeholder="name.." type="text" name="name" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
      <input className="btn btn-danger submit" 
onClick={this.submitAnswers}
onClick={this.getResult}
type="submit" 
 value="submit">
     
     </input> 

 
  </div>

</form>

{this.state.visible?<h1 style={{textAlign:'center',color:'white',marginBottom:'0',paddingBottom:'8px',paddingTop:'8px'}}>Your score: {this.state.result}/10 

 
</h1>:null }

 
{this.state.visible? <h5 style={{color:this.state.result<5?'red':'green'}} className="card-text">  {this.state.result<5? `Do you feel it? Do you feel the power of the dark side? The only real power! The only thing worth living for!`: "The Force Is Strong With This One..."}

</h5>:null}
 
 

</div>

{/* <input placeholder="name" onChange={this.onChangeHandler} value={this.state.name} type="text" name="name"></input> */}
 
 {/* <button value="Submit Answers" className="btn btn-primary submit"onClick={this.submitAnswers}>signup</button> */}

</form>

</section>
  

         
<div> 
    
    <ListItems key={this.state.users.id} score={this.state.result} items={this.state.users} handleDelete={this.deleteUserById} />
    </div>
 

 

 
                    {/* </div> */}
                    </div>


                    </div>
                </div>

             </div>  

         );
    }
}


export default UserForm







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