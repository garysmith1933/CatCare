import { FC } from 'react';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react'; 

const Homepage: FC = () => {
  const { user }: any = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <h1> This is the homepage </h1>
      {user ? 
      <>
        <p> Welcome {user.email} </p> 
        <p> {user.cats} </p>
      </>
      :
        <p>There is no user currenly logged in</p>
      }
    </>
    
  )
}

export default Homepage;