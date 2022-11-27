import styled, { keyframes } from 'styled-components'
import {Link} from "react-router-dom";

import { Keyframes } from 'styled-components';



export const Nav=styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family:"Roboto",sans-serif;
    justify-content: space-between;
    font-family:sans-serif;
    height:80px;
    display:flex;
    align-items: center;
    color:white;
    background-color: #1f1d1d;
    position: fixed;
    top:0px;
    width:100%;
    @media all  and (max-width:1024px) and (min-width:279px){
      width:100%;
      height:60px;
      margin:auto;
    }
`

export const NavLink=styled(Link)`
    text-decoration:none;
    color:white
   
`
export const Button=styled.button`
    background-color :black;
    border:1px solid white;
    border-radius: 3px;
    padding:4px 10px;
    font-weight:700;
    color:white
`

export const LeftWrapper=styled.div`
  margin-left:5%;
  .logo{
    font-size:35px;
    color:gray;
  }
`

export const RightWrapper=styled.div`
  display:flex;
  letter-spacing:0.8px;
  font-weight:500;
  margin-right:30px;
  align-items : center;
  justify-content :space-evenly ;
  width:500px;
  @media all  and (max-width:1024px) and (min-width:279px){
    flex-direction: column;
    position:fixed;
    background-color: gray;
    right:${({open})=>open?"-29px" : "-24rem"};
    top:63px;
    width:200px;
    height:70%;
    transition:all 650ms ease-in-out;
    z-index:1999;
  }
`

export const HamWrapper=styled.div`
  font-size:35px;
  display:none;

  @media all  and (max-width:1024px) and (min-width:279px){
     display:inline-block;
     margin-right:6%;

  }
`

