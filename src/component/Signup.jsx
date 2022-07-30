import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { signup } from '../Redux/Register/action'
import {Link, useNavigate} from "react-router-dom"


export const Signup = () => {

  const dispatch = useDispatch()

  const navigate=useNavigate()

  const data = useSelector((store)=>store.signup)

  console.log(data)

  useEffect(() => {

    if(data.Success){

      alert("signup success")
  
      navigate("/login")
  
  
    }
  },[data])


    const [form, setform] = useState({
        first_name:"",
        password: "",
        email:""

    })

    const handlechange=(e)=>{

        const{name,value}=e.target

        setform({
          ...form,
          [name]:value
        })


    }

      const handlesubmit = (e) => {
        e.preventDefault()

        dispatch(signup(form))
       

      }
      ;

    




  return (
    <div className="form_div">
      <h2>SIGN UP PAGE</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          className="input_tag form_input "
          type="text"
          onChange={handlechange}
          name="first_name"
          placeholder="enter your name"
        />
        <br />
        <input
          className="input_tag form_input "
          type="email"
          name="email"
          onChange={handlechange}
          placeholder="enter your email"
        />
        <br />
        <input
          className="input_tag form_input "
          type="password"
          name="password"
          onChange={handlechange}
          placeholder="enter your password"
        />
        <br />
        {data.error}
        <br />
        <input
          type="submit"
          className="button-18"
          value="SIGN UP"
          name=""
          id=""
        />
      </form>
      <p>
        Already have an account <Link to={"/login"}>Click here </Link> for Login
      </p>
    </div>
  );
}
