import React,{useState,useRef} from 'react'
import { Modal, ProfileWrapper } from '../styles/profile.style'
import {FaEdit} from "react-icons/fa"
import Navbar from '../components/Navbar'
import { updateUser } from '../Redux/AuthReducer/action'
import { useDispatch,useSelector } from 'react-redux'
const Profile = () => {
    const dispatch=useDispatch()
    const [show,setShow]=useState(false)
    const User=JSON.parse(localStorage.getItem("profile")) || ""
    const { REACT_APP_URL } = process.env;
    const user_image = User.image;
    const modalRef=useRef(null)
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
      const payload={
        data: {Authorization:`Bearer ${token}`},
        updat:{ first_name:name,
                last_name:title,
                email:email
              }
      }
       if(name!=="" && email!=="" && title!=="" ) 
         dispatch(updateUser(payload)).then((res)=>{
          localStorage.setItem("profile",JSON.stringify(res.payload.document))
          alert(res.payload.mesg)
          setShow(false)
         })
     }




  return (
 
       <>
       <Navbar/>
        <ProfileWrapper show={show}>
            <div className="inner-first">
            <div className="inner-div">
            <img
                className="prof-img-prof"
                src={
                  user_image
                    ? `${REACT_APP_URL}${user_image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                }
                alt="user_profile"
              />
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
                <button onClick={handleUpdate}>Save</button>
              
              </div>
            </Modal>
        </ProfileWrapper>
       </>
  
   
  )
}

export default Profile
