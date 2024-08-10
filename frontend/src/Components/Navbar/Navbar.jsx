import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/food del assets/frontend_assets/assets'
const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
    <img src={assets.logo}></img>
    <ul className='navbar-menu'>
        <li onClick={()=>{setMenu('home')}} className={menu==="home"?'active':''}>Home</li>
        <li onClick={()=>{setMenu('menu')}} className={menu==="menu"?'active':''}>Menu</li>
        <li onClick={()=>{setMenu('mobile')}} className={menu==="mobile"?'active':''}>Mobile app</li>
        <li onClick={()=>{setMenu('contact')}} className={menu==="contact"?'active':''}>Contact us</li>
    </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}></img>
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon}></img>
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
