import styled from "styled-components";

export const MainHomeDiv=styled.div`
margin:auto;
box-sizing:border-box; background:linear-gradient(165deg,orange 38% ,white,green);
width:100%;
padding-top:3px;
 h1{
  color:white;
  margin-top:30px;
  }
  .common-labels{
  display: block;
  margin-top:20px;
  width:100%;
  padding:0px;
  padding-bottom:8px;
  font-size:18px;
  font-weight:600;
  letter-spacing: 0.6px;
  font-family:sans-serif;
     }

 .heading-todo{
  font-family:sans-serif;
  width:100%;
  text-align: center;
  padding-top:35px;
   }
     @media all and (max-width:1024px) and (min-width:279px){
      font-size:17px;
      font-weight:600;
      min-height: 100vh;
     }
    
`
export const HomeTopDiv=styled.div`
    display:flex;
    justify-content: space-evenly;
    width:85%;
    margin:auto;
    margin-top:30px;

    @media all and (max-width:1024px) and (min-width:279px){
        flex-direction: column;
        .common-textArea{
          width:91%;
          margin:auto;
        }
    }

  .common-date{
  text-align:center;

 @media all and (max-width:1024px) and (min-width:279px){
   width:100%;
   padding:0px; 
   margin-bottom:30px; 
    #btn-holder{
       background-color:blue;
       margin-top:50px;
      }
      .date-holder{
        display:none;
  }
 }
  .date-holder{
      margin:auto;
      height:30px;
  
  }
  #btn-holder{
    background-color: #B71C1C;
    margin:auto;
    margin-top:100px;
    box-sizing: border-box;
    display:block;
    color: #FFFFFF;
    border-radius: 8px;
    padding:10px 25px;
      
    border:1px solid transparent;
    outline: none;
   font-weight:bold;
   font-size:17px;
    cursor:pointer;
     
      }
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
                width:100%;
                height:30px;
                padding-left:10px;
                font-size:16px;
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
        box-sizing: border-box;
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
        resize: none;
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
        box-sizing: border-box;
        height:40px;
        padding:10px;
        border-radius:4px;
        margin-bottom:13px;
        border:1px solid transparent;
        outline:none;
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
        background-color:rgb(242,253,255);
      
        border-radius:5px;
        box-sizing:border-box;
        width:100%;
        padding-left:8px;
        padding-right:3px;
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
    .radioWrapper-main{
    
    }
    .radioWrapper{
        margin-top:-10px;
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