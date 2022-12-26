function formArray(n){
    return  new Array(n).fill(0)
  }
  
  function Pagination({total,current,onChange}) {
     let pages=formArray(total).map((ele,index)=>{
      return <button style={{cursor:"pointer",padding:"8px 13px",borderRadius:"7px",outline:"none",border:"1px solid transparent",margin:"2px",backgroundColor:current===index+1? "gray" : "blue",color:current===index+1? "white" : "black",fontWeight:"bold"}} key={index} onClick={()=>onChange(index+1)}>{index+1}</button>
     })
  
    return (
    <div style={{width:"300px",margin:"auto",marginTop:"50px",marginBottom:"40px"}}>
      {pages}
    </div>
   
    );
  }
  
  export default Pagination;