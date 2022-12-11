import React,{useEffect, useState} from 'react'
import { TodoListWrapper } from '../styles/todolist.style';
import {FaEdit} from "react-icons/fa"
import {useParams,Link} from "react-router-dom"
import { NavLink } from '../styles/signup.style';
import { getTodos } from '../Redux/AppReducer/action';
import { useDispatch } from 'react-redux';
import {MdPendingActions} from "react-icons/md"
import {BiTask} from "react-icons/bi"

const TodoList = ({data,handleDelete}) => {
 
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  
  console.log(data)
  return (
       <TodoListWrapper>
      
       <table className="big">
        <thead>
        <tr>
         <th>Title</th>
         <th>Time</th>
         <th>Date</th>
         <th>Status</th>
       
       </tr>
        </thead>

         <tbody>
         
            {data && data.map((ele)=>
             
             <tr key={ele._id} >
             <td className="list-title">{ele.title}</td>
             <td>{ele.time}</td>
             <td>{ele.date}</td>
             <td>{!ele.status ? <MdPendingActions id="task-pending"/> :<BiTask id="task-done"/>}</td>
             <td>
             <button id="list-update-button"><Link id="update-link"  to={`/todo/edit/${ele._id}`}>Update</Link></button>
             <button id="list-delete-button" onClick={()=>handleDelete(ele._id)}>Delete</button>

             </td>
            
             </tr>
             
            )}
           
        
         </tbody>
     
         
      </table>



      <div className="small">
         <div className="head">
          <div className="heading">
          <h3>TASK</h3>
          <h3>STATUS</h3>
          </div>
          
         </div>

         <div>
         
            {data && data.map((ele)=>
             <div key={ele._id}  >
             <div className="small-title">
             <h3 className="small-list-title">{ele.title}</h3>
             
             <h3>{!ele.status ? <MdPendingActions id="small-task-pending"/> :<BiTask id="small-task-done"/>}</h3>
             </div>

              <div  className="small-button">
               
                <button id="small-list-update-button"><Link id="small-update-link"  to={`/todo/edit/${ele._id}`}>Update</Link></button>
             <button id="small-list-delete-button" onClick={()=>handleDelete(ele._id)}>Delete</button>
              
              
              </div>
          
             </div>
             
            )}
           
        
         </div>
     
         
      </div>









      </TodoListWrapper>
    
  )
}

export default TodoList
