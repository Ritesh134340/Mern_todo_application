import styled from "styled-components";
import {Link} from "react-router-dom"


export const SignupWrapper=styled.div`
    font-family:sans-serif;
    width:100%;
 
    margin:auto;
    margin-bottom:30px;
.logo-in-log{
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom:20px;
    gap:20px;
  
}
.logo-sign{
    font-size:45px;
    color:rgb(183,28,28)
}

.logo-in-log>h1{
 font-family:sans-serif;
 font-size:24px;
}
    @media all and (max-width:1024px) and (min-width:279px){
        width:95%;
     
    }

`


export const InputWrapper=styled.div`
  width:96%;
  margin:auto;
.em-inp{
   font-family:sans-serif;
   border:1px solid rgb(224,226,231);
   margin-top:5px;
   margin-bottom:18px;

   &:focus{
    /* background-color:rgb(232,240,254); */
   border:1px solid rgb(34,120,233);
   
   box-shadow: rgba(34,120,233, 0.2) 0px 2px 8px 0px;
    outline:none;
}
}




`

export const HeadingWrapper=styled.div `
    margin:auto;
    margin-bottom:50px;
    width:30%;
    box-sizing: border-box;
     padding:15px;
    border-radius:13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom:20px;
    font-size:14px;
    h5{
        text-align: center;
        margin-top:25px;
        text-decoration:none;
        font-size:14px;
        color:gray;
    }
    h1{
        text-align:center;
    }
    label{
     
        color:gray;
      
    }

   
@media all and (max-width:1024px) and (min-width:769px){
    width:80%;
}


@media all and (max-width:768px) and (min-width:481px){
    width:77%
}

@media all and (max-width:480px) and (min-width:279px){
    width:98%
}



`

export const SubmitWrapper=styled.div`
    width:100%;
    margin-top:20px;
    

    input{
        cursor:pointer;
        width:100%;
        text-align:center;
        height:35px;
        outline:none;
        border:1px solid transparent;
        border-radius:7px;
        background-color: rgb(13,71,161);
        color:white;
        font-weight:bold;
        font-size:17px;
        letter-spacing: 0.6px;
    }
  
`
export const NavLink=styled(Link)`
    text-decoration:none;
    color:rgb(34,120,233);
    padding-left:5px;
    font-size:15px;
    letter-spacing:0.5px;
`

export const MainDiv=styled.div`
  width:98%;
  margin:auto;
  margin-top:40px;
  margin-bottom:30px;
  .google-btn-wrapper{
   
}
.or-div{
  width:100%;
  height:35px;
  border-bottom:1px solid gray;
  position:relative; 
  margin-bottom:20px; 
}
.or-div>h3{
position:absolute;
left:46%;
top:50%;
font-family:sans-serif;
font-weight:600;
padding:6px;
border-radius:50%;
background-color: white;
object-fit: center;
}

.google-btn-div{
    width:100%;
    display:flex;
    margin-top:30px;
    align-items: center;
    gap:10px;
    border:1px solid rgb(209,213,219);
    border-radius:6px;
    justify-content:center;
    cursor:pointer;
    padding:8px 0px;
    
}
.google-icon{
   
    margin:0;
    padding:0;
    font-size:20px;
}
.google-btn-div>button{

    font-weight:800;
    font-size:12px;
    font-family:sans-serif;
    letter-spacing: 0.5px;
    outline:none;
    border:none;
    background-color: white;
    cursor:pointer;
}
  input{
       width:100%;
       box-sizing:border-box;
       height:35px;
       margin-top:3px;
       margin-bottom:10px;
       border:1px solid black;
       border-radius: 6px;
       padding-left:15px;
       font-size:17px;
    }
    
    
`


export const SignupImage=styled.div`
    width:100%;
    text-align: center;
    margin-bottom:20px;


  img{
     width:100px;
     height:100px;
     border-radius:50%;
     object-fit:cover;
     object-position:top;

  }  
  button{
    border:1px solid transparent;
    background-color: transparent;
  } 
`