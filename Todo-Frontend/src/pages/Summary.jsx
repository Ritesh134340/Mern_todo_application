import React ,{useEffect,useState} from 'react'
import { getCahrtData } from '../Redux/AppReducer/action'
import { useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import { Bar, Line,Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import "../styles/summary.styled.css"
import {MdPendingActions} from "react-icons/md"
import {SiProgress} from "react-icons/si"
import {MdIncompleteCircle} from "react-icons/md"

const Summary = () => {
    const dispatch=useDispatch()
    const User=JSON.parse(localStorage.getItem("profile")) || ""
    const token=User.token;
    const [pending,setPending]=useState([])
    const [completed,setCompleted]=useState([]);
    const [progress,setProgress]=useState([]);

  
    
 
    const data = {
      labels: ["Pending","Progress","Completed"],
      datasets: [
        {
          label: 'Pending Work',
          backgroundColor: [
            'red',
            'yellow',
            'green'
          ],
          borderWidth: 0.3,
          data: [pending.length,progress.length,completed.length]
        }
      ]
    };

    useEffect(()=>{
        const payload={
            "Authorization":`Bearer ${token}`
        }
         dispatch(getCahrtData(payload)).then((res)=>{
            setCompleted(res.payload.completed)
            setPending(res.payload.pending)
            setProgress(res.payload.progress)
         })
    },[])

  return (
    <>
    <Navbar/>
     <div className='main-summ'>
     <div className='summ-child'>
     <div className='data-wrapp'>
      <div>
      <h4><MdPendingActions className="icon-img"/>Total Pending </h4>
        <p>{pending.length}</p>
      </div>
        <div>
        <h4><MdIncompleteCircle className="icon-img" style={{color:"white"}}/>Total Completed </h4>
        <p>{completed.length}</p>
        </div>
      
        <div>
        <h4><SiProgress className="icon-img"/>Total Progress </h4>
        <p>{progress.length}</p>
        </div>
      
      </div>
      <div className="pie-wrapper">
      <Pie data={data} ></Pie>
      </div>
    
     </div>
     </div>
     
    </>
   
  )
}

export default Summary
