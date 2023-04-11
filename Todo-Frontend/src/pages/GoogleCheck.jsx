import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const GoogleCheck = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userString = new URLSearchParams(window.location.search).get("user");
    if (userString) {
      let res = JSON.parse(decodeURIComponent(userString));

      const user_token = res.token;
      const first_name = res.name;
      const last_name = res.title;
      const user_email = res.email;
      const user_image = res.image;
      const mesg=res.mesg

        const data={
           name:first_name,
           title:last_name,
           email:user_email,
           token:user_token,
           image:user_image
        }

        localStorage.setItem("profile",JSON.stringify(data))

        toast.success(mesg,{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })

          setTimeout(()=>{
            navigate("/")
          },2000.5)

       }
       else{

        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })

          setTimeout(()=>{
            navigate("/login")
          },2000.5)
       }
        
    }, []);

  return (
    <>
      <div style={{ width: "100%", marginTop: "50px", textAlign: "center" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Please wait...</h3>
      </div>
      <ToastContainer />
    </>
  );
};

export default GoogleCheck;
