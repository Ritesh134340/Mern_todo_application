import React,{useState,useRef,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, ProfileWrapper } from '../styles/profile.style'
import {FaEdit} from "react-icons/fa"
import Navbar from '../components/Navbar'
import { updateUser } from '../Redux/AuthReducer/action'
import { useDispatch} from 'react-redux'
import PreviewImage from '../components/PreviewImage'
const Profile = () => {
    const dispatch=useDispatch()
    const [show,setShow]=useState(false)
    const User=JSON.parse(localStorage.getItem("profile")) || ""
   
    const user_image = User.image;
    const modalRef=useRef(null)
    const ImageRef=useRef(null)
    const [req,setReq]=useState(false)
    const [image,setImage]=useState("")
    const [name,setName]=useState(User.name)
    const [title,setTitle]=useState(User.title)
    const [email,setEmail]=useState(User.email)
    const token=User.token;
    const handleModalRef=(e)=>{ 
       if(e.target===modalRef.current){
        setShow(false)
       }
    }
    const handleUpdate=()=>{
      setReq(true)

     const formData=new FormData()

     if(image!==""){
      formData.append("image",image)
     }
     formData.append("first_name",name)

     formData.append("last_name",title)

     formData.append("email",email)
     

     const config = {     
      headers: { 'content-type': 'multipart/form-data',
      Authorization:`Bearer ${token}`
    }
     
  }


  if(name!=="" && email!=="" && title!=="" ) 
  dispatch(updateUser({formData,config}))
  
  .then((res)=>{
   localStorage.setItem("profile",JSON.stringify(res.payload.document))
   let resp=(res.payload.mesg)
   toast.success(resp,{
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
     })
   setShow(false)
   setReq(false)
  })
  
     }

const updateImage=()=>{
  ImageRef.current.click()
}

const handleSetImage=(e)=>{

  e.target.files[0] && setImage(e.target.files[0])
}


  return (
 
       <>
       <Navbar/>
        <ProfileWrapper show={show}>
            <div className="inner-first">
            <div className="inner-div">

              <div className="prev-img" onClick={updateImage} >
              {image!=="" && <PreviewImage  file={image}/> ? <PreviewImage  file={image}/> : <img
                className="prof-img-prof"
                src={
                  user_image
                    ? `${user_image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                }
                alt="user_profile"
              /> } 
              </div>
           
              <input type="file" hidden ref={ImageRef} onChange={handleSetImage}/>
             <div className='editWrapper'>
              <div>
              <h3 className="name-head">Name</h3>
            <h5 className="name-act"> {User.name} {User.title}</h5>
            <h3 className="name-head">Email</h3>
            <h5 className="name-act">{User.email}</h5>
              </div>
              <div>
              <FaEdit className='edit-btn' onClick={()=>setShow(true)} />
              </div>
             </div>
            </div>
            </div>
            <Modal ref={modalRef} onClick={handleModalRef} show={show}>
                <div className="modal-content">
                <span className="close" onClick={()=>setShow(false)}>&times;</span>
                <div className="edt-inp"> 
                <input value={name} type="text" onChange={(e)=>setName(e.target.value)} /><br/>
                <input value={title} type="text" onChange={(e)=>setTitle(e.target.value)} /><br/>
                <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button style={{backgroundColor:req?"gray":"rgb(13,71,161)"}}  onClick={handleUpdate}>{req?"Wait...":"Save"}</button>
              
              </div>
            </Modal>
            <ToastContainer/>
        </ProfileWrapper>
       </>
  
   
  )
}

export default Profile
