import React from 'react'

const Loading = () => {
  return (
    <div
    style={{
      width: "100%",
      position: "fixed",
      left: "0px",
      top: "0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "1000",
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "100vh",
    }}
  >
    <img
      src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif"
      style={{ display: "block", width: "150px" }}
      alt="loading"
    ></img>
  </div>
  )
}

export default Loading