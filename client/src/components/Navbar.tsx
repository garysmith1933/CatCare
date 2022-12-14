import { Link, useNavigate } from "react-router-dom";
import { FC, useContext } from 'react'
import { AuthContext } from "../context/authContext";
import { Button } from "@mui/material";

const Navbar: FC = () => {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate('/')
  }

  return (
    <div className="navbar">
        { user ? 
        <div className="navItems" style={{marginLeft: "1rem", display: "flex", gap: 5}}>
          <Button variant="contained" style={{textDecoration: "none", color: "white"}} onClick={onLogout}>Logout</Button>
          <Link to='/newCat'>Register New Cat</Link>
        </div>
        
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