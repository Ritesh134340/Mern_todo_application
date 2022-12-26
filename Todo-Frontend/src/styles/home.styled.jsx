import styled from "styled-components";


export const HomeWrapper=styled.div`
    width:100%;
    height:100vh; 
    overflow-y: hidden;
    background:linear-gradient(165deg,orange 35%,white,green);
   background-size: cover;
   padding-top:30px;
   padding-bottom:30px;
   
`

export const MainHomeDiv=styled.div`
     margin:auto;
     height:100%;
     box-sizing:border-box;
     overflow-y:hidden;
     h1{
      color:white;
     }
     .heading-todo{
       
        font-family:sans-serif;
        width:100%;
        text-align: center;
        margin-top:35px;
     }
     @media all and (max-width:1024px) and (min-width:279px){
      width:88%
     }
`
export const HomeTopDiv=styled.div`
    display:flex;
    justify-content: space-evenly;
    width:100%;
    height:350px;
    margin-top:40px;

    @media all and (max-width:1024px) and (min-width:279px){
        flex-direction: column;
        height:auto;
      
    }
   
    .common-textArea{
        padding:25px;
        width:33%;
    
 
    height:auto;
        @media all and (max-width:1024px) and (min-width:279px){
            width:100%;
            padding:0px;
            height:auto;
            input{
             
                height:30px;
                padding-left:10px;
                font-size:16px;
                border:1px solid gray;
            }
            textarea{
              
                height:40px;
                padding-left:10px;
                font-size:16px;
                border:1px solid gray;
            }
        }
      input{
        outline:none;
        border:1px solid transparent;
        border-radius:6px;
        width:100%;
        height:50px;
        padding-left:15px;
        font-size:18px;

      }
      textarea{
        border:1px solid transparent;
        outline:none;
        border-radius:6px;
        height:70px;
        width:80%;
        padding:15px;
        font-size:17px;
        font-weight:400;
        resize: vertical;
      }
    }
    .common-addtask{
        padding:25px;
        width:33%;
        box-sizing: border-box;

     .task-del{
      outline:none;
      border:1px solid transparent;
      background-color: #0D47A1;
        color: #FFFFFF;
        font-size: 20;
        padding: 8px 15px;
        border-radius: 6px;
        cursor:pointer

     }
        @media all and (max-width:1024px) and (min-width:270px){
            width:100%;
            padding:0px;
            height:auto;
            position: relative;
        
              .sub-holder{
           
         
         margin-bottom:20px;
         height:50px;
         position:absolute;
         left:0.5%;
         right:0.5%;
      }
        }
     input{
        width:100%;
        height:35px;
        padding:10px;
        margin-bottom:13px;
        border:1px solid gray;
     }
  

     .sub-holder{
        
        max-height: 150px;
        overflow: scroll;
        overflow-x: hidden;
        width:100%;
        margin-top:20px;
      
     }
     .del-btn{
        user-select: none;
        display:flex;
      
        width:100%;
        padding:5px;
        justify-content: space-between;
        align-items: center;
        height:33px;
        margin-bottom:10px;
      button{
     
        border-radius:4px;
        padding:5px 15px;
       
      }
     }
    }
.common-date{
  
    padding:25px;
    height:auto;
    width:33%;
   text-align:center;
  
   @media all and (max-width:1024px) and (min-width:279px){
           width:100%;
            padding:0px;
            height:auto;     
        .btn-holder{
          border-radius:5px;
        }
        .date-holder{
          display:none;
       
    }
   }
    .date-holder{
        margin:auto;
        width:90%;
        height:30px;
    
    }
    .btn-holder{
      background-color: #B71C1C;
      margin-bottom:50px;
        color: #FFFFFF;
        border-radius: 8px;
            padding:10px 25px;
        
            border:1px solid transparent;
            outline: none;
            margin-top:80px;
            font-weight:bold;
            font-size:17px;
            cursor:pointer;
       
        }
 }
`

export const HomeBottomDiv=styled.div`
    width:100%;
    margin-top:10px;
    
   
    .checkWrapper{

      select{
        padding:10px 35px;
        border-radius: 5px;
        font-size:15px;
      
      }
    }
    .radioWrapper{
        margin-top:15px;
        height:50px;
        display:flex;
        align-items: center;
       font-size:14px;
       user-select: none;
       input{
        margin-left:4px ;
        margin-right:18px;
        width:18px;
        height:18px;
   
       }
       label{
        font-size:16px;
        font-weight:bold;
       }
       @media all  and (max-width:281px){
       label{
        font-size:12px
       }
    }
    }
`