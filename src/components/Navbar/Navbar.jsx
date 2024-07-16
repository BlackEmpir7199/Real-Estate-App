import React, { useState } from 'react'
import "./Navbar.scss"
const Navbar = ()=> {
  const[open,setOpen] = useState(false)
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
          <div className="menuIcon">
            <img src="/menu.png" alt="logo" onClick={()=>setOpen((prev)=>!prev)}/></div>
            <div className= {open ? "menu active":"menu"}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar