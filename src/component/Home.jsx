import axios from 'axios';
import React, { useEffect,useState} from 'react'


import { useDispatch,useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {
  addnewflat,
  handleascflat,
  handledscflat,
  handledblockfilter,
  handledtypesearch,
  handleflatdetails,
  paginationflat,
} from "../Redux/action";
import { logout } from '../Redux/Login/action';

export const Home = () => {

  const [page, setpage] = useState(1)

    const navigate=useNavigate()

    const dispatch = useDispatch()

    const {flat,loading,error,singleflat}=useSelector((store)=>store.flat)

    console.log(flat)

    // const flatobj=useSelector((store)=>store.flat)

    // console.log("flatobj",flat)
    // console.log("loading",loading)
    // console.log("error",error)

    // console.log(singleflat)
    

    useEffect(() => {
     getallflat()
    }, [page])
    const getallflat=()=>{
        dispatch(addnewflat(page))
    }
    const handlesortasc=()=>{
        dispatch(handleascflat())

    }
    const handlesortdsc=()=>{
        dispatch(handledscflat());
    }
    const handlefilter=(e)=>{
         dispatch(handledblockfilter(e.target.value));
    }
    const handlesearch=(e)=>{
        setTimeout(() => {
        dispatch(handledtypesearch(e.target.value));
        }, 1000);
    }
    const handledetails=(id)=>{
      dispatch(handleflatdetails(id));
      navigate("/flatdetails")
    }
    const handledelete=(e,id)=>{
      e.stopPropagation();
    axios.delete(`https://housing-backend-server.herokuapp.com/flat/${id}`).then((response)=>{
    console.log(response)
     getallflat();
    });
    }
   return loading ? (
     <h1>Loading .....</h1>
   ) : error ? (
     "Error....."
   ) : (
     <div>
       <h1 style={{ textTransform: "uppercase", color: "crimson" }}>
         Flat Managment
       </h1>

       <button className="button-18" onClick={handlesortasc}>
         SORT BY FLAT NO LOWER TO HIGHER{" "}
       </button>
       <button className="button-18" onClick={handlesortdsc}>
         SORT BY FLAT NO HIGHER TO LOWER{" "}
       </button>

       <Link style={{ textDecoration: "none" }} to={"/addflat"}>
         <button className="button-18"> ADD FLAT</button>
       </Link>
       <Link style={{ textDecoration: "none" }} to={"/login"}>
         {" "}
         <button className="button-18">LOG IN</button>
       </Link>
       <Link style={{ textDecoration: "none" }} to={"/register"}>
         {" "}
         <button className="button-18">SIGN UP</button>
       </Link>
       <button onClick={() => dispatch(logout())} className="button-18">
         LOG OUT
       </button>

       <div className="filter_div">
         <input
           type="text"
           placeholder="serach by block number"
           onInput={handlesearch}
           className="input_tag"
         />

         <select className="select_tag" name="" id="" onChange={handlefilter}>
           <option value="">....</option>
           <option value="owner">owner</option>
           <option value="teanant">teanant</option>
         </select>
       </div>

       <button
         className="button-18 btn_margin"
         name="prev"
         onClick={() => {
           setpage(page - 1);
         }}
       >
         PREV
       </button>
       <button
         className="button-18 btn_margin"
         name="next"
         onClick={() => {
           setpage(page + 1);
         }}
       >
         NEXT
       </button>
       <div className="grid_homepage">
         {
           // console.log(flat.response)

           flat.map(({ block, flat_no, image, resident_id, _id, type }) => (
             <div key={_id} onClick={() => handledetails(_id)}>
               <div>
                 {" "}
                 <img src={image} alt="" />
               </div>

               <h3>type: {type} </h3>
               <h3>block no: {block}</h3>
               <h3>flat no: {flat_no}</h3>
               {/* {console.log(resident_id[0])} */}

               <button onClick={(e) =>handledelete(e,_id)}className="button-18">Delete</button>
             </div>
           ))
         }
       </div>
     </div>
   );
}   
