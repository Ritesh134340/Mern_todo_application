import styled, { keyframes } from 'styled-components';


export const TodoListWrapper=styled.div`
    width:100%;

    margin-bottom:80px;
    margin-top:50px;
    box-sizing: border-box;
    font-family:sans-serif;
    letter-spacing: 0.6px;
    .main-div{
 
        width:85%;
        margin:auto;
        display: grid;
        grid-template-columns: repeat(4,minmax(250px,1fr));
        grid-template-rows:auto;
        gap:30px;
        box-sizing:border-box;
    
    }

    .card-div{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding:15px;
        border-radius:8px;
        box-sizing: border-box;
        position:relative;
      
        transition: transform 0.6s;
        /* transform-style: preserve-3d;
        perspective:2000px; */
    
    }
   
    /* .card-div>div:nth-child(1){
        width:100%;
        height:150px;
        display:flex;
        box-sizing: border-box;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        color:white;
        gap:8px;
        position:relative;
        background-color: black;
        z-index:1;
        border-radius:6px;
        font-weight:600;
        font-size:16px;

    }
    */
    /* .card-div>div:nth-child(1)::before{
     content:'';
     border-radius:6px;
     z-index:-7;
     opacity: 0.9;
    
     background-image: url("https://images.unsplash.com/photo-1641154706848-fe27fd366032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG9kb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
     position:absolute;
     width:100%;
     height:100%;
     background-size: cover;
     background-position: center;
    } */
    /* .card-div>div:nth-child(1)>div{
        font-family:sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top:20px;
        color:white;
        font-weight:900;
        gap:25px;
        font-size:18px;
    } */
    .mid-div{
        position:relative;
        width:100%;
        margin-top:13px;
        margin-bottom:25px;
        box-sizing:border-box;
      
    }
    .mid-div>label{
        font-weight:600;
        font-size:13px;
        letter-spacing: 0.7px;
        display: inline-block;
      
    }
    .mid-div>h4{
        font-size:13px;
        font-weight:400;
        margin-bottom:10px;
        margin-top:3px;
        padding-top:10px;
        padding-bottom:10px;
        background-color:rgb(242,253,255);
        padding-left:10px;
        letter-spacing: 0.7px;
        overflow:hidden;
        
    }
   .sub-div{
         font-weight:600;
        font-size:13px;
        letter-spacing: 0.7px;
        display: flex;
        align-items: center;
        user-select: none;
       
   }
   .alone{
    padding:10px 18px;
   }
   .drop-d{
    font-size:35px;
    cursor:pointer;
   }
   .drop-u{
    font-size:35px;
    cursor:pointer;
   }
   .sub-task-mapper{
    box-sizing:border-box;
    position:absolute;
    top:100%;
    width:100%;
    z-index:99;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:8px;
    background-color:  #ffffff;
    
  
   
    
  


   }
   .sub-task-mapper>h4{
    font-weight:500;
    font-family:sans-serif;
    font-size:13px;
    letter-spacing: 0.7px;
    padding:13px 15px;
    border-bottom:0.6px solid gray;

   }
   .sub-task-mapper>h4:last-child{
    border-bottom:none;
   }
   .sub-task-mapper>h3{
        color:green;
   }
   .sub-task-mapper>h3>span{
        color:red;
   }
  
   .btn-wrapp{
        font-family:sans-serif;
        display:flex;
        box-sizing:border-box;
        justify-content: space-around;
        margin-bottom:10px;
        align-items: center;
   }
   .btn-wrapp>button:nth-child(1){
      padding:8px 15px;
      background-color: rgb(183,28,28);
      color:white;
      font-weight:600;
      border-radius: 6px;
      outline:none;
      border:1px solid transparent;
      cursor:pointer;
   }
   .btn-wrapp>button:nth-child(2){
    background-color:rgb(13,71,161);
    padding:8px 15px;
    color:white;
      font-weight:600;
      border-radius: 6px;
      outline:none;
      border:1px solid transparent;
      cursor:pointer;
}
   @media all and (max-width:1024px) and (min-width:601px){
      .main-div{
        width:95%;
        margin:auto;
        grid-template-columns: repeat(3,1fr);
        gap:15px;
       
      }
      .card-div{
        padding:10px;
      }
   }
   @media all and (max-width:600px) and (min-width:279px){
    .main-div{
        width:88%;
        grid-template-columns: repeat(1,1fr);
      
      }
      .card-div{
        padding:13px;
    
      }
   }

    .upper-card-div{
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition:all 700ms ease;
    }
  

   .des-div{
   /* transform:rotateY(180deg); */
    height:100%;
   padding:15px;
   position: relative;
   height:390px;
   transition:all 700ms ease;
    margin:auto;
   
    justify-content: left;
    background-color: white;
   
   
     border-radius:12px;
     margin:auto;
     box-sizing:border-box;
     
   }
   .des-div>h3{
    color:gray;
   }
   .back-btn-wrapper{
    position:absolute;
    bottom:10px;
    width:100%;
    text-align:center;
    left:0;
    box-sizing: border-box;
   }
   .back-btn-wrapper>button{
    padding:5px 25px;
    border:1px solid transparent;
    font-size:bold;
    color:white;
    border-radius:4px;
    box-sizing: border-box;
    background-color:black;
    cursor:pointer;
    font-size:17px;

   }
`


export const ImageWrapperDiv=styled.div`    
         width:100%;
        height:150px;
        display:flex;
        box-sizing: border-box;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        color:white;
        gap:8px;
      
        /* background-color: black; */
        /* z-index:1; */
        border-radius:6px;
        font-weight:600;
        font-size:16px; 

        background-color: ${({stat})=>stat==="completed"?"rgb(0,128,0,0.8)":stat==="pending"?"rgb(255,0,0,0.8)":"rgb(255,165,0,0.8)"};

     /* &::before{
     content:'';
     border-radius:6px;
     z-index:-7;
     opacity:0.8;
     background-image: url("https://images.unsplash.com/photo-1641154706848-fe27fd366032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG9kb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");

     background-color: ${({stat})=>stat==="completed"?"green":stat==="pending"?"rgb(254,223,229)":"orange"};

     position:absolute;
     width:100%;
     height:100%;
     background-size: cover;
     background-position: center;
    } */
 
    .img-div{
        font-family:sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top:20px;
        color:white;
        font-weight:900;
        gap:25px;
        font-size:18px;
  
    }
`

