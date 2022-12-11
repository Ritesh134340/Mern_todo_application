import styled from "styled-components";
import {Link} from "react-router-dom"

// export const LoginWrapper=styled.div`
//    font-family:sans-serif;
//     width:350px;
//     height:330px;
//     cursor:pointer;
//     margin:auto;
//     border:1px solid black;
//     margin-top:30px;
//     border-radius:13px;
//     input{
//        width:300px;
//        height:25px;
//        padding-left:5px;
//        margin-top:3px;
//        margin-bottom:10px;
//     }
//     h5{
      
//         text-align: center;
//         margin-top:3px;
        
//     }
    
// `

// export const InputWrapper=styled.div`
//   margin:auto;
//   width:310px;

// `

// export const HeadingWrapper=styled.div `
//     text-align:center;
//     margin-top:10px;
//     margin-bottom:30px;
  
// `

// export const SubmitWrapper=styled.div`
 
//     margin-top:20px;
//     input{
//         width:100%;
//         height:35px;
//         border-radius:5px;
     
//     }
// `


export const LoginWrapper=styled.div`
    font-family:sans-serif;
    width:340px;
    padding:20px;
    margin:auto;
    margin-top:50px;
    border-radius:13px;
    border:1px solid black;
    h5{
        text-align: center;
        margin-top:5px;
        text-decoration:none;
    }

    @media all and (max-width:1024px) and (min-width:279px){
        width:95%;
     
    }

`


export const InputWrapper=styled.div`
  width:100%;

`

export const HeadingWrapper=styled.div `
    text-align:center;
 
    margin-bottom:20px;
    font-size:14px;
`

export const SubmitWrapper=styled.div`
    width:100%;
    margin-top:20px;

    input{
        width:100%;
        height:35px;
        border:1px solid transparent;
        border-radius:7px;
        background-color: rgb(0,0,0,0.8);
        color:white;
        font-weight:bold;
        font-size:17px;
        letter-spacing: 0.6px;
    }
  
`
export const NavLink=styled(Link)`
    text-decoration:none;
`

export const MainDiv=styled.div`
  width:98%;
  margin:auto;

  
  input{
       width:100%;
       height:35px;
       margin-top:3px;
       margin-bottom:10px;
       border:1px solid black;
       border-radius: 7px;
       padding-left:15px;
       font-size:17px;
    }
  
   
    
`
