
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {getById,updateTodos} from "../Redux/AppReducer/action"
import { EditTodoWrapper } from '../styles/edittodo.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";

const EditTodo = () => {
  const dispatch=useDispatch()
  const params=useParams();
  const User=JSON.parse(localStorage.getItem("profile")) || "";
  const token=User.token;
  const [data,setData]=useState({})
  const [title,setTitle]=useState("")
  const [status,setStatus]=useState("")
  const [show,setShow]=useState(false)
  const {isLoading}=useSelector((state)=>{return {isLoading:state.AppReducer.isLoading}})
  



 const handleUpdate=(e)=>{
  const id=params.id
  e.preventDefault()
  setTitle(data.title)
  setStatus(data.status)
  setShow(!show)
 
  if(title!=="" && show){
   
    const payload={
      data: {Authorization:`Bearer ${token}`},
      updat:{title:title,
             status:status
     },
  
      id:id
     }
     dispatch(updateTodos(payload)).then((res)=>{
  
       const id=params.id;
        const payload={
        data:{Authorization:`Bearer ${token}`},
        id:id
  }

  dispatch(getById(payload)).then((res)=>{
   setData(res.payload.data)
  }).catch((err)=>{
   console.log(err)
  })   
  
       setShow(false)
       toast.success('Updated Successfully !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
     })
  }
  
 }
 useEffect(()=>{
   
  const id=params.id;
  const payload={
   data:{Authorization:`Bearer ${token}`},
   id:id
  }

  dispatch(getById(payload)).then((res)=>{
   setData(res.payload.data)
  }).catch((err)=>{
   console.log(err)
  })

},[params.id])

  return (
   
     <>
     <Navbar/>
     <EditTodoWrapper status={status} show={show}>
      
         
      <div className='main-edit-div'>
      
     {  isLoading? <img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{ objectFit:"cover",width:"80px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"50px"}}></img> : <div className="form-div">
       <form className="edit-form">
        <label className="editTitle">Title</label><br/>
        {!show?<h1 className="status-heading">{data.title}</h1> : <input value={title} onChange={(e)=>setTitle(e.target.value)} ></input>}
        <br/>
         <div className="status-wrapper-div">
         <label className="editTitle">Status</label><br/>
          <div>
        
          <input value="pending" name='stat'type="radio" onChange={(e)=>setStatus(e.target.value)} defaultChecked={(data && data.status) && data.status==="pending"} />
          <label >Pending</label>
          <input value="progress" name='stat' type="radio"   onChange={(e)=>setStatus(e.target.value)}defaultChecked={(data && data.status) && data.status==="progress"} />
          <label >Progress</label>
          <input  value="completed" name='stat' type="radio"   onChange={(e)=>setStatus(e.target.value)} defaultChecked={(data && data.status) && data.status==="completed"}/>
          <label >Completed</label>
          </div>
        
         </div>
       
        </form>
         </div>}
         <div className="button-div">

        <button onClick={handleUpdate}  className="edit-button" id="edit-button-show">{!show? "Edit" : "Save Changes"}</button>
        </div>
      </div>
      <ToastContainer/>
     </EditTodoWrapper>
     </>
      
   
  )
}

export default EditTodo