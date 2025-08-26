import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets/frontend_assets/assets'

const Navbar = () => {

  const [menu,setmenu] = useState("home");  // to get the underline

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</li>  
        <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        {/* className should be active if menu = " " */}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>signIn</button>
      </div>
    </div>
  )
}

export default Navbar
