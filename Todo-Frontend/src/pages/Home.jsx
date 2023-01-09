import React, { useEffect ,useState} from 'react'
import { getTodos,createTodos } from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from 'react-redux'
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CategoryWrapper, HomeBottomDiv, HomeTopDiv, HomeWrapper, MainHomeDiv } from '../styles/home.styled'
import {MdAddCircle} from "react-icons/md"
import {RiDeleteBin5Line} from "react-icons/ri"
import Navbar from '../components/Navbar';
const Home = () => {
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token
  const [todoTitle,setTodoTitle]=useState("")
  const [subTask,setSubTask]=useState([])
  const [subValue,setSubValue]=useState("")
  const [status,setStatus]=useState("pending")
  const [category,setCategory]=useState("official")
  const [description,setDescription]=useState("No description is added")

  const dispatch=useDispatch()

  const {isLoading}=useSelector((state)=>{return {isLoading:state.AppReducer.isLoading}})
  
  const handleAddTodo=()=>{
    const header={
      data: {Authorization:`Bearer ${token}`},
    }
    const payload={
       title:todoTitle,
       status:status,
       category:category,
       subtask:subTask,
       description:description,
       
       
    }
    if(todoTitle){
      dispatch(createTodos(payload,header)).then((res)=>{
        setTodoTitle("")
        setDescription("")
        toast.success(res.payload.mesg,{
          position: "top-center",
          autoClose: 0.900,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      })
    }
    else{
      toast.warn('Some  fields are empty !', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
     
   
  }
 
  const handleAddSub=()=>{
    if(subValue){
      let id=uniqid()
      const payload={
        subtask:subValue,
        id:id
      }
      setSubTask([...subTask,payload])
    }
    else{
      toast.warn('No subtask to add !', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
   
  }

  const handleSubDel=(idValue)=>{

    let result= subTask.filter((ele)=>
      
     ele.id!==idValue)

    setSubTask(result)
  }





 
  return (
    <>
    <Navbar/>
   
         {  isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img> :<MainHomeDiv >
               <div className='heading-todo'>
               <h1>Create New Task List</h1>
               </div>
              
              <HomeTopDiv>
              <div className="common-textArea"  >
                <label className='common-labels' >Title</label>
                <input type="text" placeholder='Enter title...' onChange={(e)=>setTodoTitle(e.target.value)}/><br/><br/>
                <label className='common-labels'  >Description</label>
                <textarea placeholder='No description is added....' onChange={(e)=>setDescription(e.target.value)}></textarea>
                <HomeBottomDiv>
          
           <div className='checkWrapper'>
              <label className='common-labels'>Category</label>
              <select onChange={(e)=>setCategory(e.target.value)} >
                <option value="official" >Official</option>
                <option value="personal" >Personal</option>
                <option value="home">Home</option>
                <option value="others" >Others</option>
              </select>
            </div>
           
           
            <div className="radioWrapper-main">
            <label className='common-labels'  >Status</label>
             <div className='radioWrapper'>

             <label>Progress</label>
               <input value="progress" name="status" type="radio"  onChange={(e)=>setStatus(e.target.value)}/>
               <label>Pending</label>
               <input name="status" value="pending" type="radio"  onChange={(e)=>setStatus(e.target.value)}/>
               <label>Completed</label>
               <input name="status" type="radio" value="completed" onChange={(e)=>setStatus(e.target.value)}/>
             </div>
            </div>
         

          
           </HomeBottomDiv>
              </div>

              <div className="common-addtask" >
              <label className='common-labels'  >Subtask</label>
                <input type="text" placeholder='Create Subtask..' onChange={(e)=>setSubValue(e.target.value)} /><br />
                <button className="task-del" onClick={handleAddSub}>Add Subtask</button>
                 <div className="sub-holder">
                  {
                    subTask && subTask.map((ele,index)=>
                      <div className="del-btn" key={index}>
                        <h5>{ele.subtask}</h5>
                        <button onClick={()=>handleSubDel(ele.id)}>
                        <RiDeleteBin5Line />
                        </button>
                        
                      </div>
                    )
                  }
                 </div>
              </div>
              <div className='common-date' >
                <div className="date-holder" ><h3>{new Date().toDateString()}</h3>
                </div>
                
               <button id='btn-holder' onClick={handleAddTodo}>Create New Task</button>
               </div>
              </HomeTopDiv>
             
          <ToastContainer/>
          </MainHomeDiv>
          
          }
          
    </>
  )
}

export default Home
