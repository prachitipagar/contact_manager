import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        {/* <h1>Nav Bar</h1> */}
        <nav className='navbar navbar-dark navbar-expand-sm bg-dark '>
          <div className='container'>
            <Link to='/' className='navbar-brand'><i className='fa fa-mobile text-warning me-2'></i>
            Contact <span className='text-warning'>Manager</span></Link>
          </div>
        </nav>
    </div>
  )
}
