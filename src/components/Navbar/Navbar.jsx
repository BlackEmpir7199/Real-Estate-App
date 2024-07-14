import React from 'react'
import "./Navbar.scss"
const Navbar = ()=> {
  return (
    <nav className="Navbar">
        <div className='left'>
          <a href="/" className="logo">
          <img className='logoimg' src='public\logo.png'/>
          <span>RealEstate</span>
          </a>
          <a className='home' href='/'>Home</a>
          <a className='About' href='/'>About</a>
          <a className='Contact' href='/'>Contact</a>
          <a className='Agents' href='/'>Agents</a>
        </div>
        <div className='right'>
          <a href="/" className="SignIn">Sign In</a>
          <a href="/" className="SignUp">Sign Up</a>
        </div>
    </nav>
  )
}

export default Navbar