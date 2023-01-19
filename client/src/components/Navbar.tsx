import { Link, useNavigate } from "react-router-dom";
import { FC} from 'react'
import { Button } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { logout } from "../store/reducers/user";
import { useAppDispatch } from "../store/hooks";

const Navbar: FC = () => {
  let navigate = useNavigate();
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  console.log(user)

  const onLogout = () => {
    dispatch(logout());
    console.log('logged out')
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