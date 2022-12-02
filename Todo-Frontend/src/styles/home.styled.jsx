import styled from "styled-components";

export const HomeWrapper=styled.div`
    height:50px;
    margin-top:200px;
    display:flex;
    align-items: center;
    font-family:sans-serif;
    letter-spacing: 0.8px;
    
    input{
        font-family:"Roboto",sans-serif;
        border-radius:13px;
        height:45px;
        width:450px;
        padding-left:15px;
        font-size:17px;
        
    }
    button{
        font-size:30px;
        color:white;
        padding-left:10px;
         border:1px solid red;
        background-color: transparent;
        border:none;
    }

    @media all  and (max-width:1024px) and (min-width:279px){
       
         width:85%;
         input{
            height:35px;
            border-radius:9px;
            width:100%;
            padding-left:10px;
            font-size:13px;
         }
         button{
            font-size:25px;

         }
    }

`

export const MainHomeDiv=styled.div`
    height:100vh;
    width:100vw;
    background-position:center;
    display:flex;
    z-index:999;
    justify-content: center;
    
     background-image:url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
     @media all  and (max-width:1024px) and (min-width:279px){
        
        border:1px solid green;
        margin:auto;
     }
  
`