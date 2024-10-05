import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


let imgSrc = require("./logo5122.png")

function Layout() {
  return (
    <>
    <Navbar src={imgSrc}/>
    <Outlet />
    </>
  )
}

export default Layout
