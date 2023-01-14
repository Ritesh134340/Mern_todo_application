import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import { googleAuthentication } from '../Redux/AuthReducer/action';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoogleCheck = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();


 
useEffect(()=>{

  dispatch(googleAuthentication()).then((res)=>{
 if(res.payload.data.token){
  const user_token=res.payload.data.token;
  const first_name=res.payload.data.name
  const last_name=res.payload.data.title
  const user_email=res.payload.data.email
  const user_image=res.payload.data.image

  const data={
     name:first_name,
     title:last_name,
     email:user_email,
     token:user_token,
     image:user_image
  }

  localStorage.setItem("profile",JSON.stringify(data))

  toast.success(res.payload.data.mesg,{
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })

    setTimeout(()=>{
      navigate("/")
    },2000.5)
    
 }
 else{

  toast.error(res.payload.data.mesg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })

    setTimeout(()=>{
      navigate("/login")
    },2000.5)
 }
   }).catch((err)=>{
    console.log(err)
  
   })
},[])


 return (
  <>
  <div style={{width:"100%",marginTop:"50px",textAlign:"center"}}>
    <h3 style={{fontSize:"18px",fontWeight:"700"}}>
      Please wait...
    </h3>
  </div>
  <ToastContainer/>
  </>
 )
}

export default GoogleCheck
