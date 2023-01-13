import * as types from "./actionTypes";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
  
   switch(type){
    case types.SIGNUP_REQUEST: return {...state,isLoading:true,isError:false}
    
    case types.SIGNUP_SUCCESS: return {...state,isLoading:false,isError:false};
    
    case types.SIGNUP_FAILURE: return {...state,isError:true,isLoading:false};


    case types.LOGIN_REQUEST:
    return {...state,isLoading:true,isError:false}
    
    case types.LOGIN_SUCCESS: return {...state,isLoading:false,isError:false,isAuth:true};

    case types.LOGIN_FAILURE: return {...state,isError:true,isLoading:false};
    

    case types.LOGOUT_REQUEST : return {...state,isLoading:true,isError:false};
    case types.LOGOUT_SUCCESS : return {...state,isLoading:false,isError:false,isAuth:false};
    case types.LOGOUT_FAILURE : return {...state,isLoading:false,isError:true} ;



    case types.GOOGLE_AUTHENTICATION_REQUEST:
    return {...state,isLoading:true,isError:false}
    
    case types.GOOGLE_AUTHENTICATION_SUCCESS: return {...state,isLoading:false,isError:false,isAuth:true};

    case types.GOOGLE_AUTHENTICATION_FAILURE: return {...state,isError:true,isLoading:false};
    
    default : return state;

   }
}