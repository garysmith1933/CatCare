import { FC } from 'react';
import { useAppSelector } from '../store/hooks';


const Homepage: FC = () => {
  const { user } = useAppSelector(state => state.user);
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