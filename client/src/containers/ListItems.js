import React from "react" 
import { Link } from "react-router-dom"
import "./../components/react-sound/index.css"
// import yodahd from './../components/react-sound/yoda.png';
import darthvader from './../components/react-sound/darth.jpeg';
// import luke from './../components/react-sound/Luke_Sky7.jpg'
import mace from './../components/react-sound/mace.jpg'
import darthmaul from './../components/react-sound/darthmaul.jpeg'
import darthsidi from './../components/react-sound/darthsidi.jpg'
import rey from './../components/react-sound/rey.jpg'
import lukeSkywalker from './../components/react-sound/lukeskywalkerhd.jpg'
import yoda from './../components/react-sound/yodahd.jpg'

const jediList = [lukeSkywalker,yoda,rey]
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
 

    <div key={item.id} className="card" style={{width:'18rem',float:'left',backgroundImage:  item.points == 8 || item.points == 9 || item.points == 10? "url(" + jediList[1] + ")":item.points == 7 || item.points == 6? "url(" + jediList[0] + ")":item.points ==5?"url(" + jediList[2] + ")":item.points ==4 || item.points ==3?"url(" + sithList[1] + ")":item.points ==2?"url(" + sithList[0] + ")":item.points==1||item.points==0?"url(" + sithList[2] + ")":''
    ,backgroundSize:'cover',border:'none'}}>
  
 
  <div className="card-body">

    <div style={{backgroundColor:'rgba(240,255,255,.4)',padding:'8px',marginBottom:'20px',borderRadius:'8px'}}>  
      <h5 className="card-title">Name: <span> {item.name}</span></h5>

      {/* <h2> {item.points}</h2> */}
      {/* <h6 className="card-subtitle mb-2 text-muted"> {item.jedi? '':''}   </h6> */}
      <p className="card-text">  <strong> status: </strong> {item.sith? "Sith": "Jedi"}
      <p><strong> strength: </strong> {item.points*1000} </p>
     </p>
  </div>
      
      
     
  
  
    </div>
<div style={{backgroundColor:item.jedi?'#006400':'#8B0000',paddingTop:'10px',paddingBottom:'10px',borderBottomRightRadius:'.25rem',borderBottomLeftRadius:'.25rem'}}>

         
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
 