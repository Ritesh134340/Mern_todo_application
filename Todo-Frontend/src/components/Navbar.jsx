import React,{useState} from "react";
import { Button, HamWrapper, LeftWrapper, Nav, RightWrapper } from "../styles/navbar.style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
import { NavLink } from "../styles/navbar.style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GiHamburgerMenu} from "react-icons/gi"
import {SiTodoist} from "react-icons/si"
const Navbar = () => {
  const {REACT_APP_URL}=process.env
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token || "" 
  const first_name=User.name
  const last_name=User.title
  const user_image=User.image
  const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => {
    return { isAuth: state.AuthReducer.isAuth };
  });
  const dispatch = useDispatch();
  const handleLogOut = () => {
    setIsOpen(!isOpen)
    dispatch(logout());
    const profile = "";
    localStorage.setItem("profile", JSON.stringify(profile));
    toast.success("Logout Successful!",{
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
        navigate("/login");
      },2200)
  
  };


  return (
    <>
    <Nav>
      <LeftWrapper>
        <NavLink to="/"><SiTodoist className="logo"/></NavLink>
      </LeftWrapper>

      <RightWrapper open={isOpen}>
      
        <NavLink to="todos/all"  onClick={()=>setIsOpen(!isOpen)}id="first">TODOS</NavLink>
      <NavLink to="/profile" onClick={()=>setIsOpen(!isOpen)}id="second">PROFILE</NavLink>
       {isAuth || token ? <div id="third" className="name-with-img"><img id="sixth"  src={user_image? `${REACT_APP_URL}${user_image}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" }alt="" />
       <h5>{first_name} {last_name}</h5> </div> : ""}
        {isAuth || token ? (
          <Button onClick={handleLogOut} id="forth">LOG OUT</Button>
        ) : (
          <Button id="forth">
            <NavLink to="/login" onClick={()=>setIsOpen(!isOpen)}>LOG IN</NavLink>
          </Button>
        )}

        
     
      </RightWrapper>
      <HamWrapper >
         {isOpen?<div className="cross" onClick={()=>setIsOpen(!isOpen)}>&times;</div> : <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)}/>}
      </HamWrapper>
   
    </Nav>
      < ToastContainer/>
    </>
  );
};

export default Navbar;
