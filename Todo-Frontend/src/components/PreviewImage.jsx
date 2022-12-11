import React ,{useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviewImage = ({file}) => {
    const [preview,setPreview]=useState(null)
    const reader=new FileReader();

    useEffect(()=>{
       
        if(file.type==="image/jpeg" || file.type==="image/png" || file.type==="image/jpg"){
            reader.readAsDataURL(file)
            reader.onload=()=>{
                setPreview(reader.result)
            }
        }
        else if(file.type!=="image/jpeg" || file.type!=="image/png" || file.type!=="image/jpg"){
    
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
      <div><img src={preview} alt="Preview"/> </div>
      <ToastContainer/>
    </>
  
  )
}

export default PreviewImage
