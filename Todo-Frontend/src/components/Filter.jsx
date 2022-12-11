import React,{useState,useEffect} from 'react'
import { GiConsoleController } from 'react-icons/gi'
import { useSearchParams } from 'react-router-dom'
import "../styles/filter.styled.css"

const Filter = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    let initialCategory=searchParams.getAll("category")
    const [category,setCategory]=useState(initialCategory)
    let initialStatus=searchParams.getAll("status")
    const [status,setStatus]=useState(initialStatus)
    let initialSort=searchParams.getAll("sortBy");
    const [sort,setSort]=useState(initialSort[0] || "")


    const handleCategoryFilter=(e)=>{
        let newCategory=[...category]
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1)
        }
        else{
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }

    const handleStatusFilter=(e)=>{
        let newStatus=[...status];
        if(newStatus.includes(e.target.value)){
            newStatus.splice(newStatus.indexOf(e.target.value),1)
        }
        else{
            newStatus.push(e.target.value)
        }
        setStatus(newStatus)
    }

    const handleSort=(e)=>{

        setSort(e.target.value)
    }
    
    useEffect(()=>{
        let params={}
        if(category || status || sort){
           
            category && (params.category=category)
            status && (params.status=status)
            sort && (params.sortBy=sort)
            setSearchParams(params)
        }
      
    },[category,status,sort])


  return (
    <div className="filterWrapper">
      <div  className='filter-main-div'>
      <div className="filterCategory-div">
        <h3>Filter By Category</h3>
      
        <input type="checkbox"  checked={category.includes("personal")} value="personal" onChange={handleCategoryFilter}/>
        <label >Personal</label><br/>
        
        <input type="checkbox" checked={category.includes("official")} value="official" onChange={handleCategoryFilter}/>
        <label >Official</label>
        <br />
        
        <input type="checkbox" checked={category.includes("home")} value="home" onChange={handleCategoryFilter}/>
        <label >Home</label>
        <br /> 
      
        <input type="checkbox" checked={category.includes("others")} value="others"onChange={handleCategoryFilter} />
        <label >Others</label>
      </div>

      <div className="filterStatus-div">

      <h3>Filter By Status</h3>
      <input type="checkbox"  checked={status.includes("completed")} value="completed" onChange={handleStatusFilter}/>
        <label >Completed</label><br />
     
        <input type="checkbox" value="pending" checked={status.includes("pending")} onChange={handleStatusFilter} />
        <label >Pending</label><br />
       
        <input type="checkbox" value="progress" checked={status.includes("progress")} onChange={handleStatusFilter} />
        <label >Progress</label>
       
      </div>

      <div className="sort-div">
        <h3>Sort by</h3>
        <input type="radio" defaultChecked={sort==="asc"} name="sortBy" value="asc" onChange={handleSort} />
        <label >Newest</label><br/>
        <input type="radio" defaultChecked={sort==="desc"} name="sortBy" value="desc" onChange={handleSort} />
        <label >Oldest</label>
       
      </div>

      </div>
    
    </div>
  )
}

export default Filter
