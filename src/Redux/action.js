import axios from "axios";

export const ADD_FLAT = "ADD_FLAT"

export const ADD_SINGLE_FLAT = "ADD_SINGLE_FLAT"

export const ADD_RESIDENT = "ADD_RESIDENT"

export const ADD_FLAT_LOADING = "ADD_FLAT_LOADING"

export const ADD_FLAT_FAILURE = "ADD_FLAT_FAILURE"

export const addsingleflat = (payload) => ({
    type: ADD_SINGLE_FLAT,
    payload
})
export const addflat = (payload) => ({
    type: ADD_FLAT,
    payload,
})
export const addflatloading = (payload) => {
    return {
        type: ADD_FLAT_LOADING
    }
}
export const addflatfailure = (payload) => {
    return {
        type: ADD_FLAT_FAILURE
    }
}
export const addnewflat = (page) => (dispatch) => {
    dispatch(addflatloading())
    axios.get(`https://housing-backend-server.herokuapp.com/flat?page=${page}&size=6`).then((res) => {
        dispatch(addflat(res.data.response));
    }).catch((er) => {
        dispatch(addflatfailure(er))
    })
}
export const handleascflat = () => (dispatch) => {
    dispatch(addflatloading())
    axios.get("https://housing-backend-server.herokuapp.com/flat/sort/asc").then((res) => {
        dispatch(addflat(res.data))
    }).catch((er) => {
        dispatch(addflatfailure(er))
    })
}


export const handledscflat = () => (dispatch) => {
    dispatch(addflatloading())
    axios.get("https://housing-backend-server.herokuapp.com/flat/sort/dsc").then((res) => {
        dispatch(addflat(res.data))
    }).catch((er) => {
        dispatch(addflatfailure(er))
    })
}

export const handledblockfilter = (value) => (dispatch) => {
    dispatch(addflatloading())
    axios.get(`https://housing-backend-server.herokuapp.com/flat/type?type=${value}`).then((res) => {
        dispatch(addflat(res.data))
    }).catch((er) => {
        dispatch(addflatfailure(er))
    })
}

export const handledtypesearch = (value) => (dispatch) => {
    dispatch(addflatloading())
    axios.get(`https://housing-backend-server.herokuapp.com/flat/block?block=${value}`).then((res) => {
        dispatch(addflat(res.data))
    }).catch((er) => {
        dispatch(addflatfailure(er))
    })
}

export const handleflatdetails = (value) => (dispatch) => {
    axios.get(`https://housing-backend-server.herokuapp.com/flat/${value}`).then((res) => {
        console.log(res.data)
        dispatch(addsingleflat(res.data))
    })
}





