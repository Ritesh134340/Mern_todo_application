import React,{useEffect,useRef, useState} from 'react'
import {RiArrowDropDownLine} from "react-icons/ri";
import {RiArrowDropUpLine} from "react-icons/ri"
import { TodoListWrapper } from '../styles/todolist.style';
import {Link} from "react-router-dom"

const TodoList = ({data,handleDelete}) => {
  const [activeId,setActiveId]=useState(null)

  const onTitleClick = (id) => {
    setActiveId(id)
 };

  
  return (
       <TodoListWrapper>
        <div className="main-div">
          {
            data && data.map((ele,index)=>{
               return  <div  key ={ele._id} className="card-div">
                  
                        <div>
                          <h3>{ele.status.toUpperCase()}</h3>
                          <div><h5>{ele.date}</h5> <h5>{ele.time}</h5>
                         </div>


                        </div>
                        <div className="mid-div">
                        <label>TITLE</label>
                         <h4>{ele.title}</h4>
                         <label >CATEGORY</label>
                         <h4>{ele.category}</h4>

                         <div className="sub-div" >
                         <label >SUBTASK</label>
                         <RiArrowDropDownLine onClick={()=>onTitleClick(ele._id)} className="drop-d" style={{display:activeId!==ele._id? "block" : "none"}}/><RiArrowDropUpLine onClick={()=>setActiveId(null) }  style={{display: ele._id==activeId? "block" : "none"}} className="drop-u"/>
                         </div>

                        <div className='sub-task-mapper'  style={{display:ele._id===activeId ?"block":"none"}}>
                        {
                          ele.sub && ele.sub.map((data)=>
                            <h4 key={data.id}>{data.subtask.toUpperCase()}</h4>

                          )
                         }
                         {
                         ele.sub.length===0 &&<h3 className="alone"><span>You</span> have no  Subtask !</h3>
                         }
                        </div>
                        
                        </div>


                        <div>
                        <button onClick={()=>handleDelete(ele._id)}>DELETE</button>
                        <button><Link style={{color:"white",textDecoration:"none"}} to={`/todo/edit/${ele._id}`}>UPDATE</Link></button>
                        </div>

                       </div>
            })
          }
        </div>
       </TodoListWrapper>
    
  )
}

export default TodoList
