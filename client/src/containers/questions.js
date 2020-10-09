import React, { Component } from 'react'
import './../components/react-sound/index.css'

export default class StarWarsQuestions extends Component {


    submitAnswers = (e) => {
        let total = 5;
        let score = 0;
        const q1 = document.forms["quizForm"]["q1"].value;

        alert(q1)
    }
    render() {
        return (
            <div>

<div className="App">
 
 <p className="Title-Description">
  The Jedi Code
</p>

  <div className="Descripton">A Jedi or Sith Personality Test </div>

{/* <Music/> */}

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


<input type="submit" value="Submit Answers"></input>



</form>

</section>



 </div>
  
             </div>
        )
    }
}
