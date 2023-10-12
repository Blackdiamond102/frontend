

import React from 'react'
import { Link } from 'react-router-dom'

export default function Topheader() {
  return (
    <div className='topheader card '>
        <img src="../../logo1.png" alt="Logo card-img-top" />
        <p className='text-center'>Welcome,&nbsp;
         <strong>Guest: </strong>&nbsp;
        <Link to="/Signup">Register on Nairaland</Link> &nbsp;
        <span>/</span>&nbsp;
        <Link to ="/Login">LOGIN!</Link> &nbsp;
        <span>/</span>&nbsp;
        <Link to= "">Trending</Link>&nbsp;
        <span>/</span>&nbsp;
        <Link to= "">Recent</Link>&nbsp;
        <span>/</span>&nbsp;
        <Link to= "/create">Create</Link>
        </p>

        <p className='text-center'>
            <strong>Stats:</strong>&nbsp; 20,300 members, 346575 &nbsp;
            <strong>Date:</strong> thursday 27, 2023

        </p>
        <div className="container">
        <div className='d-flex' >
            <input type="text" className='form-control' />
            <button className='btn btn-outline-dark'>Search</button>
        </div>
        </div>
    </div>
  )
}
