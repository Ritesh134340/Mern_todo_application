import React ,{useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviewImage = ({file}) => {
  
    const [preview,setPreview]=useState(null)
    const reader=new FileReader();
    useEffect(()=>{
        if(file.type==="image/jpeg"){
            reader.readAsDataURL(file)
            reader.onload=()=>{
                setPreview(reader.result)
            }
        }
        else{
            toast.error("Unsupported file format",{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
        } 
    },[file])

   
  return (
    <>
      <div>
      {  preview? <img src={preview} alt="Preview"  /> :  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" alt="Profile" />}
     
    </div>
    <ToastContainer/>
    </>
  
  )
}

export default PreviewImage
