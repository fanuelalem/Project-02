import React from "react" 
import { Link } from "react-router-dom"
import "./../components/react-sound/index.css"
import Background from './../components/react-sound/yoda.png';
import Background2 from './../components/react-sound/darth.jpeg';


 

const ListItems = props => (

  <div>







  
 {props.items.map((item)=>(
    <div class="card" style={{width:'18rem',float:'left',backgroundImage: item.jedi? "url(" + Background + ")":"url(" + Background2 + ")",backgroundSize:'cover'}}>
  
  <div class="card-body">

    <div style={{backgroundColor:'rgba(240,255,255,.4)',padding:'8px',marginBottom:'20px',borderRadius:'8px'}}>  
      <h5 className="card-title">Name: <span> {item.name}</span></h5>
      {/* <h6 className="card-subtitle mb-2 text-muted"> {item.jedi? '':''}   </h6> */}
      <p className="card-text">  <strong> Sith / Jedi: </strong> {item.sith? "Sith": "Jedi"}

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
 