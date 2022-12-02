import styled, { keyframes } from 'styled-components'
import {Link} from "react-router-dom";





export const Nav=styled.div`

box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-family:"Roboto",sans-serif;
    height:80px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:white;
    background-color: #1f1d1d;
    position: fixed;
    top:0px;
    width:100vw;
    @media all  and (max-width:1024px) and (min-width:279px){
      width:100vw;
      height:70px;
      margin:auto;
      z-index:999;
      
    }
`

export const NavLink=styled(Link)`
    text-decoration:none;
    color:white;
 

   
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
#first{
    grid-area: first;
    text-align:center;
    cursor:pointer;
   
   }
   #second{
    grid-area: second;
    text-align:center;
    cursor:pointer;
 
  }
  #third{
    grid-area: third;
    cursor:pointer;
 
  }
  #third>h5{
    padding-left:6px;
  }
  
  #forth{
    grid-area: forth;
    text-align:center;
    white-space: nowrap;
    cursor:pointer;
    padding:10px 8px;

  }

  display:grid;
  grid-template-columns: 1fr 1fr 1fr 80px;
  grid-template-rows: repeat(1,1fr);
  grid-template-areas: "first second third forth";
  align-items: center;
  letter-spacing:0.9px;
  font-weight:bold;
  margin-right:80px;
 width:550px;
  font-size:15px;


  .name-with-img{
  display:flex;
  align-items: center;
  width:180px;
  font-size:18px;

  
  }
  #sixth{
    width:30px;
    height:30px;
    border-radius:50%
  }
  @media all  and (max-width:1024px) and (min-width:279px){
    
     grid-template-columns: repeat(1,100%);
     grid-template-rows: 110px 50px 50px 90px;
     grid-template-areas:
          "third"
          "first"
          "second"
          "forth"
   
    ;

    position:absolute;
    padding-top:90px;
    background-color: #161111;
    top:${({open})=>open?"0px" : "-77rem"};
    left:${({open})=>open?"0px" : "-67rem"};
    right:${({open})=>open?"0px" : "0px"};
    width:100vw;
    height:100vh;
    transition:all 400ms ease-in-out;
    .name-with-img{
      flex-direction: column;
      height:80px;
    }
    #sixth{
       width:50px;
       height:50px;

    }
    #first{
    grid-area: first;
    text-align:center;
    margin:auto;
    width:85%;
  
   }
  
   #second{
    grid-area: second;
    text-align:center;
    margin:auto;
    width:85%;
  }
  #third{
    grid-area: third;
    text-align:center;
    margin:auto;
    width:55%;
     border-radius:8px;
    white-space: nowrap;

  }
  #third>h5{
    padding-top:10px;
  }
  
  #forth{
    grid-area: forth;
    text-align:center;
    margin:auto;
    width:45%;
    background-color: #948f8f;
    border:1px solid white;
    border-radius: 10px;
  }
  
  }
`

export const HamWrapper=styled.div`
  font-size:35px;
  display:none;
  z-index: 999;
  .cross{
    font-size:45px;
    
  }
  @media all  and (max-width:1024px) and (min-width:279px){
     display:inline-block;
     margin-right:6%;

  }
`

