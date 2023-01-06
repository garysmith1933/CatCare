import { Link, Navigate } from "react-router-dom";
import { FC, useContext } from 'react'
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar: FC = () => {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate('/')
  }
  console.log(user)
  return (
    <div className="navbar">
        { user ? 
        <>
          <Button variant="contained" style={{textDecoration: "none", color: "white"}} onClick={onLogout}>Logout</Button>
        </>
        
        :
        <div className="navItems" style={{marginLeft: "1rem", display: "flex", gap: 5}}>
          <Link to='/home'>Home</Link> 
          <Link to='/login'>Login</Link> 
          <Link to='/signup'>Sign Up</Link>
          </div>
        }
    </div>
  )
 
}

export default Navbar;