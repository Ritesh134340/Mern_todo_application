import styled from "styled-components";


export const TodoListWrapper=styled.div`
  
    .big{
        margin:auto;
      
        margin-top:30px;
        width:1300px;
        border-collapse: collapse;

        th,td{
       
       width:10%;
       height:30px;
       border:2px solid gray;
       border-collapse: collapse;
   }
   td{
      
       padding-left:10px;
      text-align: center;
   }
   tr{
        background-color: #d1d1d1;
        
        
    }

    }
  
   #list-update-button{
        margin-top:40px;
        color:white;
        background-color:rgb(56,159,221);
        padding:6px 8px;
        margin-left:10px;
        border-radius:8px;
        font-size:16px;
        font-weight:bold;
        border:1px solid transparent;
        cursor:pointer;
        margin-bottom:20px;
    }
    #list-delete-button{
        color:white;
        letter-spacing:0.6px;
        font-family:"Roboto",sans-serif;
        margin-top:40px;
        background-color:red;
        padding:6px 8px;
        margin-left:10px;
        border-radius:8px;
        font-size:16px;
        font-weight:bold;
        border:1px solid transparent;
        cursor:pointer;
    }
    #update-link{
        color:white;
        text-decoration:none;
        letter-spacing:0.6px;
        font-family:"Roboto",sans-serif
     }
     .list-title{
        font-size:18px;
        font-weight:700
     }
     #task-pending{
    
        font-size:55px;
        color:yellow;
     }

     #task-done{
     
        font-size:55px;
        color:green;
     }

    


     .small{
        margin:auto;
        margin-top:80px;
        width:80%;
        display:none;
        #small-list-update-button{
        
        color:white;
        background-color:rgb(56,159,221);
        padding:5px 8px;
        margin-left:10px;
        border-radius:4px;
        font-size:14px;
        font-weight:600;
        border:1px solid transparent;
        cursor:pointer;
    
        }
        .head{
            width:100%;
         
          
        }
        .heading{
          
            display: flex;
            justify-content: space-between;
            align-items: center;
            height:30px;
            font-family:sans-serif;
            letter-spacing: 0.6px;
            color:white;
            background-color: #292424;
        }
        .heading>h3:nth-child(1){
            margin-left:15px;

        }
        .heading>h3:nth-child(2){
            margin-right:15px;
        }
      
        .small-title{
        
          display:flex;
          justify-content: space-between;
          align-items: center;
          height:32px;
       
        
        margin:auto;
        margin-top:20px;
        margin-bottom:20px;
        margin-left:18%;
         
        }
        .small-button{
            margin-left:18%;
            margin-top:15px;
            margin-bottom:8px;
        }
       
        .small-list-title{
            font-weight:bold;
            font-family:sans-serif;
        }
       
        #small-list-delete-button{
        color:white;
    
        background-color:red;
        padding:5px 8px;
        margin-left:10px;
        border-radius:4px;
        font-size:14px;
        font-weight:600;
        border:1px solid transparent;
        cursor:pointer;
        }
        #small-task-pending{
        font-size:25px;
        color:yellow;
        margin-right:40px;
        }
        #small-task-done{
        font-size:25px;
        color:green;
        margin-right:40px;
        }

     
  
   #small-update-link{
    color:white;
        text-decoration:none;
        letter-spacing:0.6px;
        font-family:"Roboto",sans-serif
   }
     }

     @media all and (max-width:1024px) and (min-width:279px){
        .big{
            display:none;
        }
        .small{
            display:block;
        }
     }
   
`