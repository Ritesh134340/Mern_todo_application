import styled from "styled-components";

export const ProfileWrapper=styled.div`

   font-family:sans-serif;
   width:100%;
   margin:auto;
   margin-top:50px;
   box-sizing:border-box;


   .prev-img{
      cursor:pointer;
      margin:auto;
      text-align:center;
      margin-bottom:20px;
      border-radius:13px;
      width:270px;
      height:270px;
      margin-top:20px;
      box-sizing: border-box;
      overflow:hidden;
      border-radius:50%;
      border:3px solid rgba(211, 211, 211, 0.5);
     
  
   }
 
   .prev-img>div>img{

      object-fit:cover;
      object-position:center;
      width:100%;
   }

   .prof-img-prof{
    object-fit:cover;
    object-position:center;
    width:100%;
   } 
 
   .name-head{
    font-family:sans-serif;
    letter-spacing:0.6px;
    font-weight:500;
    margin-top:20px;
   }
   .name-act{
      font-family:sans-serif;
       margin-top:0px;
       padding-bottom:35px;
       padding-top:3px;
       font-size:14px;
       color:gray;
   }
  .inner-first{
   
      border-radius:15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding:10px;
      margin:auto;
      width:25%;
      max-height: 95%;
  }
  .inner-div{
     width:100%;
     margin:auto;
     height:100%;
   
  }

  .editWrapper{
   display:flex;
   justify-content:space-around;
}
.edit-btn{
   font-size:45px;
   color:red;
   cursor:pointer;
}

@media all and (max-width:1024px) and (min-width:675px){
  margin-top:150px;
   .inner-first{
   
   border-radius:13px;
   margin:auto;
   width:60%;
}
}

@media all and (max-width:674px) and (min-width:279px){
  margin-top:80px;
   .inner-first{
   
   border-radius:13px;
   margin:auto;
   width:85%;
} 
.prev-img{
  width:230px;
  height:230px;
}
}

`


export const Modal=styled.div`
   display:${({show})=>show?"block":"none"} ;
  position: fixed; 
  
  z-index: 1;
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.6); 

  .modal-content {
   width:50%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fefefe;
  border-radius:15px;
  margin: auto;
  padding-left:30px;
  padding-right:30px;
  padding-top:50px;
  padding-bottom:35px;
  /* border: 1px solid #888; */
  
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 38px;
  font-weight: 500;
  padding-right:10px;
 
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.edt-inp{
  width:70%;
  margin:auto;
  input{
   width:100%;
   height:45px;
   border-radius: 6px;
   padding-left:10px;
   font-size:18px;
   margin-bottom:10px;
  }
 
}
button{
   cursor:pointer;
   font-size:17px;
   display:block;
   margin:auto;
   padding:15px 55px;
   border:1px solid transparent;
   border-radius:5px;
   margin-top:80px;
   /* background-color: rgb(13,71,161); */
   color:white;
   font-weight:bold;
  }
@media all and (max-width:1024px) and (min-width:675px){
   .modal-content {
   width:80%;
  border-radius:13px;
  padding-left:20px;
  padding-right:20px;
  padding-top:50px;
  padding-bottom:55px;
}
.close {
  font-size: 28px;
  padding-right:5px;
}
.edt-inp{
  width:80%;
  input{
   height:40px;
   box-sizing: border-box;
   border-radius: 5px;
   padding-left:10px;
  }
 
}
}

@media all and (max-width:674px) and (min-width:279px){
   .modal-content {
   width:90%;
  border-radius:10px;
  padding-left:10px;
  padding-right:10px;
  padding-top:40px;
}
.close {
  font-size: 22px;
}
.edt-inp{
  width:85%;
  input{
   height:35px;
   box-sizing: border-box;
   padding-left:6px;
  }
 
} 
}
`
