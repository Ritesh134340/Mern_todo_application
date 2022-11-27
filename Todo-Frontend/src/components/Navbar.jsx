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
  const User=JSON.parse(localStorage.getItem("profile")) || ""
  const token=User.token || "" 
  const first_name=User.name
  const last_name=User.title
  const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => {
    return { isAuth: state.AuthReducer.isAuth };
  });
  const dispatch = useDispatch();
  const handleLogOut = () => {
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
      <NavLink to="todos/all">All Todos</NavLink>
      <NavLink to="/profile">Profile</NavLink>
       {isAuth || token ? <h5>Welcome {first_name} {last_name} </h5> : ""}
        {isAuth || token ? (
          <Button onClick={handleLogOut}>Log Out</Button>
        ) : (
          <Button>
            <NavLink to="/login">Log In</NavLink>
          </Button>
        )}
        
      </RightWrapper>
      <HamWrapper >
      <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)}/>
      </HamWrapper>
   
    </Nav>
      < ToastContainer/>
    </>
  );
};

export default Navbar;
