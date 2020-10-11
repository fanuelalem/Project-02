import React from "react" 
import { Link } from "react-router-dom"
import "./../components/react-sound/index.css"
 

const ListItems = props => (

  <div>


  
 {props.items.map((item)=>(
    <div class="card" style={{width:'18rem',float:'left',backgroundColor:item.sith? 'red':'green'}}>
  
  <div class="card-body">
      <h5 className="card-title">Name: <span> {item.name}</span></h5>
      {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
      <p className="card-text">  <strong> Sith / Jedi: </strong> {item.sith? "Sith": "Jedi"}
  </p>
      
      
     
      
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
 