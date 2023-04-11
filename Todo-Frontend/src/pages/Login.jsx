import React, { useEffect, useState } from "react";
import {FcGoogle} from "react-icons/fc";
import { SiTodoist } from "react-icons/si";
import {
  HeadingWrapper,
  InputWrapper,
  LoginWrapper,
} from "../styles/login.style";
import { SubmitWrapper } from "../styles/login.style";
import { MainDiv, NavLink, } from "../styles/login.style";
import {login} from "../Redux/AuthReducer/action"
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const dispatch=useDispatch();
  const [email,setEmail]=useState("")
  const {REACT_APP_URL}=process.env;
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const {isLoading}=useSelector((state)=>{return {isError:state.AuthReducer.isError,isLoading:state.AuthReducer.isLoading,token:state.AuthReducer.token}})

 


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      const payload={
        email:email,
        password:password
       }
       dispatch(login(payload)).then((res)=>{
      
       if(res.status===200){
        const user_token=res.payload.token;
        const first_name=res.payload.name
        const last_name=res.payload.title
        const user_email=res.payload.email
        const user_image=res.payload.image

        const data={
           name:first_name,
           title:last_name,
           email:user_email,
           token:user_token,
           image:user_image
        }

        localStorage.setItem("profile",JSON.stringify(data))
        
        toast.success(res.payload.mesg,{
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
        toast.error(res.mesg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
       }
      
       
       }).catch((err)=>{
        console.log(err)
       })
    }
  }

  const handleGoogleLogin=(e)=>{
    e.preventDefault()
      window.open(`${REACT_APP_URL}/auth/google`,'_self');

  }

 
  return (
    isLoading ?<img src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif" style={{height:"150px" ,display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:"200px"}}></img>  : <LoginWrapper>
      <div className="logo-in-log">
      
        <SiTodoist className="logo-sign"/>
   
        <h1>Todo Application</h1></div>
      <HeadingWrapper>
        <h1>Sign In</h1>
    
      <MainDiv>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Email</label>
          <br />
          <input className="em-inp" value={email} type="text" onChange={(e)=>setEmail(e.target.value)}></input>
          <br />
          <label>Password</label>
          <br />
          <input  className="em-inp"  vlaue={password} type="password" onChange={(e)=>setPassword(e.target.value)}></input>
          <SubmitWrapper>
          <input type="submit"></input>
          </SubmitWrapper>
          <div className="google-btn-wrapper">
           <div  className="or-div">
            <h3>OR</h3>
           </div>

           <div className="google-btn-div" >
            <span><FcGoogle className="google-icon"/></span>
           <button onClick={handleGoogleLogin}>CONTINUE WITH GOOGLE</button>
           </div>
   
          </div>
        </InputWrapper>   
      </form>

      
      </MainDiv>

         
        
        
      <h5>Don't have an account ?<NavLink to="/signup">Sign Up</NavLink></h5>
    
      </HeadingWrapper>
      <ToastContainer/>
    </LoginWrapper>
  );
};

export default Login;
