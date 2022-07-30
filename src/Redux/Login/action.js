import axios from "axios";
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    };
}
export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    };
}
export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload: payload
    };
}

export const logout = () => {
    alert("click on log in button for login again")
    return {
        type: LOGOUT,
    };
}

export const login = (payload) => (dispatch) => {
    console.log(payload);
    dispatch(loginLoading())
    axios
    .post("https://housing-backend-server.herokuapp.com/login", payload)
    .then((res) => {
        console.log(res.data);
        if(res.data.error){
             dispatch(loginFailure(res.data.error));
                console.log(res.data);
        }
      dispatch(loginSuccess({ token: res.data.token, name:res.data.user.first_name }));
    })
    .catch((err) => {
       console.log(err);
    });
}