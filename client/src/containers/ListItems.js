import React from "react" 
import { Link } from "react-router-dom"
import "./../components/react-sound/index.css"
import yoda from './../components/react-sound/yoda.png';
import darthvader from './../components/react-sound/darth.jpeg';
import luke from './../components/react-sound/Luke_Sky7.jpg'
import mace from './../components/react-sound/mace.jpg'
import darthmaul from './../components/react-sound/darthmaul.jpeg'
import darthsidi from './../components/react-sound/darthsidi.jpg'

const jediList = [luke,yoda,mace]
const sithList = [ darthmaul,darthvader,darthsidi]


 
// const jedis = jediList[Math.floor(Math.random()*jediList.length)]
// const siths = sithList[Math.floor(Math.random()*sithList.length)]
// let response = [0,1,2]
// let num = []
//  for(var i=0;i<response.length;i++){
//    num=response[i]
//  }

// var text = "";
// var i;
// const num = [0,1,2]
// for(var i=0;i<num.length;i++){
//   text+=i
// }

 const ListItems = props => (



  <div> 

  
 
{props.items.map((item,index,id,)=>(
 

    <div key={item.id} className="card" style={{width:'18rem',float:'left',backgroundImage: item.jedi? "url(" + jediList[1] + ")":"url(" + sithList[2] + ")",backgroundSize:'cover',border:'none'}}>
  
  <div className="card-body">

    <div style={{backgroundColor:'rgba(240,255,255,.4)',padding:'8px',marginBottom:'20px',borderRadius:'8px'}}>  
      <h5 className="card-title">Name: <span> {item.name}</span></h5>
      {/* <h6 className="card-subtitle mb-2 text-muted"> {item.jedi? '':''}   </h6> */}
      <p className="card-text">  <strong> status: </strong> {item.sith? "Sith": "Jedi"}
    </p>
  </div>
      
      
     
      
  <Link style={{marginRight:'10px'}}className="go-to-user"to={`users/${item.id}`} >
    <button className="btn btn-success"> details... </button>
    </Link>

  
       <button className="btn btn-danger deletebtn" onClick={()=> props.handleDelete(item.id)}>Delete</button>
  
   
    </div>
  </div>

 
 
  ))}
 
 
{/* </Link> */}
 
   
 

</div>



// <Link className="go-to-user"to={`users/${item.id}`}>
/* <button className="btn btn-success">
    </button>
   </Link>  */
  


   
//   <ul className="list-group"> 
//  {props.items.map((item)=>(



// <li className="list-group-item git"key={item.id}>
// <Link className="go-to-user"to={`users/${item.id}`}>
//   <button className="btn btn-success mybtn">
//   <strong> name : </strong> {item.name} <br/> <strong> Sith / Jedi: </strong> {item.sith? "Sith": "Jedi"}
//      </button>
//      </Link>

//  {/* <Link className="go-to-user"to={`/users/${item.id}`}> go to user </Link> */}

// <button className="btn btn-danger deletebtn" onClick={()=> props.handleDelete(item.id)}>Delete</button> */}

// </li>



//  ))}
   
//    </ul>

   

);

export default ListItems;
 