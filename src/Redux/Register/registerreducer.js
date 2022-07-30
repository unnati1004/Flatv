import { SIGNUP_FAILURE,SIGNUP_LOADING,SIGNUP_SUCCESS } from "./action";

const initialState={
    Loading: false,
    Success: false,
    Failure: false,
    error : ""
}

export const signupreducer=(store=initialState,{type,payload})=>{


    switch(type){
        case SIGNUP_LOADING:
            return{
                ...store,
                Loading: true,
                Success: false,
                Failure: false,
                error :null
            }
        case SIGNUP_SUCCESS:
            return{
                 ...store,
                Loading: false,
                Success: true,
                Failure: false,
                error : null
            }
        case SIGNUP_FAILURE:
            return{
                 ...store,
                Loading: false,
                Success: false,
                Failure: true,
                error:payload


            }
        

        default:
            return {
                ...store,
            }
    }
}