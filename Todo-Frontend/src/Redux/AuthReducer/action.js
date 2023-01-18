import * as types from "./actionTypes";
import axios from "axios";
const {REACT_APP_URL}=process.env



const signup=({formData,config})=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST});
   
    return  axios.post(`${REACT_APP_URL}/user/signup`,formData,config).then((res)=>{
      
   return dispatch({type:types.SIGNUP_SUCCESS,payload:res})

    }).catch((err)=>{
        dispatch({type:types.SIGNUP_FAILURE,payload:err})
    })
}


const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});
    return axios.post(`${REACT_APP_URL}/user/login`,payload).then((res)=>{
       return  dispatch({type:types.LOGIN_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.LOGIN_FAILURE})
    })
}

const logout=(payload)=>(dispatch)=>{
    
    dispatch({type:types.LOGOUT_REQUEST});
    dispatch({type:types.LOGOUT_SUCCESS});
    dispatch({type:types.LOGOUT_FAILURE})
}

const updateUser=({formData,config})=>(dispatch)=>{
    dispatch({type:types.USER_UPDATE_REQUEST});
   return axios.patch(`${REACT_APP_URL}/user/update`,formData,config).then((res)=>{
    return  dispatch({type:types.USER_UPDATE_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.USER_UPDATE_FAILURE})
    })
}

// ,{withCredentials:true}
const googleAuthentication=()=>(dispatch)=>{
    dispatch({type:types.GOOGLE_AUTHENTICATION_REQUEST});
   return axios.get(`${REACT_APP_URL}/auth/google/profile`).then((res)=>{
     return   dispatch({type:types.GOOGLE_AUTHENTICATION_SUCCESS,payload:res})
       }).catch((err)=>{
        dispatch({type:types.GOOGLE_AUTHENTICATION_FAILURE})
       })
}


export {signup,login,logout,updateUser,googleAuthentication}