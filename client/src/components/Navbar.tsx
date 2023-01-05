import { Link } from "react-router-dom";
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navItems" style={{marginLeft: "1rem", display: "flex", gap: 5}}>
        <Link to='/home'>Home</Link> 
        <Link to='/login'>Login</Link> 
        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  )
 
}

export default Navbar;