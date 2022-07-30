import axios from "axios";
export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signuploading=()=>{

    return{
        type:SIGNUP_LOADING,
    }
}
export const signupsuccess=()=>{

    return{
        type:SIGNUP_SUCCESS,
       
    }
}
export const signupfailure=(payload)=>{

    return{
        type:SIGNUP_FAILURE,
        payload:payload
    }
}

export const signup=(payload)=>(dispatch)=>{
    dispatch(signuploading())
    axios.post("https://housing-backend-server.herokuapp.com/register",payload).then((res)=>{

     if(res.data.token){
  dispatch(signupsuccess(res.data.token))

     console.log(res.data)
     }
     else{

      dispatch(signupfailure(res.data.message))
      console.log(res.data)
     }  
     
    }).catch((er)=>{
        dispatch(signupfailure(er.message))
    })
}