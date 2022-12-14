import styled from "styled-components";

// export const HomeWrapper=styled.div`
//     height:50px;
//     margin-top:200px;
//     display:flex;
//     align-items: center;
//     font-family:sans-serif;
//     letter-spacing: 0.8px;
    
//     input{
//         font-family:"Roboto",sans-serif;
//         border-radius:13px;
//         height:45px;
//         width:450px;
//         padding-left:15px;
//         font-size:17px;
        
//     }
//     button{
//         font-size:30px;
//         color:white;
//         padding-left:10px;
//          border:1px solid red;
//         background-color: transparent;
//         border:none;
//     }

//     @media all  and (max-width:1024px) and (min-width:279px){
       
//          width:85%;
//          input{
//             height:35px;
//             border-radius:9px;
//             width:100%;
//             padding-left:10px;
//             font-size:13px;
//          }
//          button{
//             font-size:25px;

//          }
//     }

// `

// export const MainHomeDiv=styled.div`
//     height:100vh;
//     width:100vw;
//     background-position:center;
//     display:flex;
//     z-index:999;
//     justify-content: center;
    
//      background-image:url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
//      @media all  and (max-width:1024px) and (min-width:279px){
        
//         border:1px solid green;
//         margin:auto;
//      }
  
// `

// export const CategoryWrapper=styled.div`
//      width:300px;
//      height:200px;
//      border:1px solid red;
// `

export const HomeWrapper=styled.div`
    width:100%;
    height:84vh; 
     margin-top:18px;
`

export const MainHomeDiv=styled.div`
     width:95%;
     height:100%;
     margin:auto;
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
        width:100%;
        height:50px;
        padding-left:15px;
        font-size:18px;

      }
      textarea{
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
      padding:4px 14px;

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
          
            padding:10px 25px;
            border-radius:5px;
            background-color:transparent;
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