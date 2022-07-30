import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
export const AddFlat = () => {

  const navigate = useNavigate()

  const [user, setuser] = useState([])

  const [form, setform] = useState({

    "resident_id": []
  });

  const getuser = () => {

    axios.get(`https://housing-backend-server.herokuapp.com/resident`).then((response) => {

      setuser(response.data);

      console.log(response.data)
    })
  }

  useEffect(() => {
    getuser()
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name == "resident_id") {
      let resident_id = []
      resident_id.push(value)
      setform({
        "resident_id": [...resident_id]
      })
      console.log(value)
    }
    setform({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("https://housing-backend-server.herokuapp.com/flat", form).then((res) => {
      console.log(res)
      alert("flat added sucssfully!");
    }).catch((er) => {
      console.log(er)
      alert("try again")
    })
    console.log(form);
  };
  return (
    <div className="form_div">
      <h2>ADD FLAT</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          className="input_tag form_input "
          type="text"
          onChange={handlechange}
          name="type"
          placeholder="enter type teanant/owner"
        />
        <br />
        <input
          className="input_tag form_input "
          type="text"
          name="block"
          onChange={handlechange}
          placeholder="enter block number"
        />
        <br />
        <input
          className="input_tag form_input "
          type="number"
          name="flat_no"
          onChange={handlechange}
          placeholder="enter flat number"
        />
        <br />
        <input
          className="input_tag form_input "
          type="text"
          name="image"
          onChange={handlechange}
          placeholder="enter image"
        />
        <br />
        <select name="resident_id" className="select_tag" onChange={handlechange} id="">

          <option value="">ADD RESIDENT</option>

          {user && user.map((el) => <option value={el._id}>{el.name}</option>
          )}

        </select>

        <br />

        <input
          type="submit"
          className="button-18 btn_margin"
          value="SUBMIT "
          name=""
          id=""
        />


      </form>

      <Link to={"/"}>Home</Link>
    </div>
  );
};
