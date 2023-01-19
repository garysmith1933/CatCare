import { FC } from 'react';
import { useAppSelector } from '../store/hooks';

const Homepage: FC = () => {
  const { user } = useAppSelector(state => state.user);
  const { cats } = useAppSelector(state => state.cats)
  const userCats = JSON.stringify(cats.filter(((cat: { owner: any; }) => cat.owner === user.id)))

  return (
    <>
      <h1> This is the homepage </h1>
      {user ? 
      <>
        <p> Welcome {user.email} </p> 
        <p>{userCats}</p>
      </>
      :
        <p>There is no user currenly logged in</p>
      }
    </>
    
  )
}

export default Homepage;