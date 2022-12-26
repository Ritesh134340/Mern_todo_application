import styled from "styled-components";

export const ProfileWrapper=styled.div`
   display:flex;
   font-family:sans-serif;
   width:100%;
   margin:auto;
   margin-top:30px;
   height:85vh;
   padding-left:20px;
   border-radius:5px; 

   .prof-img-prof{
      margin-bottom:20px;
      margin-top:20px;
     width:100%;
     max-height:250px;
     border-radius:7px;
     margin:auto;
     margin-bottom:20px;
   
   }
 
   .name-head{
    font-family:sans-serif;
    letter-spacing:0.6px;
    font-weight:500;
   }
   .name-act{
      font-family:sans-serif;
       margin-top:0px;
       padding-bottom:15px;
       padding-top:3px;
   }
  .inner-first{

      border-radius:15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding:10px;
      margin:auto;
      width:30%;
      max-height: 95%;
  }
  .inner-div{
     width:85%;
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


`
export const Modal=styled.div`
   display:${({show})=>show?"block":"none"} ;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
 
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.6); /* Black w/ opacity */

  .modal-content {
  background-color: #fefefe;
  border-radius:15px;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.edt-inp{
  width:60%;
  margin:auto;
  input{
   width:100%;
   height:50px;
   padding-left:20px;
   font-size:18px;
   margin-bottom:10px;
  }
}
`
