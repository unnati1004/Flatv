import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Flatdetails = () => {
    const singleflat=useSelector((store)=>store.flat.singleflat)
    console.log("details",singleflat)
    const{image,type,block,flat_no,resident_id}=singleflat
  return (
    <div className="flexbox">
      <div className="imagebox">
        {" "}
        <img src={image} alt="" />
      </div>

      <div>
        <div className="flatdetails">
          <h2>Flat Details:</h2>
          <h4>type: {type}</h4>
          <h4>flat no: {flat_no}</h4>
          <h4>block: {block}</h4>
        </div>
        {resident_id &&
          resident_id?.map((el) => (
            <div>
              <h2>Resident Details:</h2>
              <h5>Name of Resident: {el.name ? el.name : "N/A"}</h5>
              <h5>Age of Resident: {el.age ? el.age : "N/A"}</h5>
              <h5>Gender of Resident: {el.gender ? el.gender : "N/A"}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};
