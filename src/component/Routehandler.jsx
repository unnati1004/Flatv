import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from './Home'
import {AddFlat} from './AddFlat'
import {Flatdetails} from './Flatdetails'
import {Login} from './Login'
import {Signup}from './Signup'

export const Routehandler = () => {
  return (
    <Routes>
      <Route path={"/addflat"} element={<AddFlat />} />
      <Route path={"/flatdetails"} element={<Flatdetails />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Signup />} />

      <Route path={"/"} element={<Home />} />
    </Routes>
  );
}
