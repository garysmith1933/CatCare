import { FC } from 'react';
import { useAppSelector } from '../store/hooks';

const Homepage: FC = () => {
  const { user } = useAppSelector(state => state.user);
  // const { cats } = user || null
  const userCats = user.cats

  console.log(user)

  return (
    <>
      <h1> This is the homepage </h1>
      {user ? 
      <>
        <p> Welcome {user.email} </p> 
        {user ? user.cats.map((cat: { name: String; }) => <li> {cat.name} </li>) : null}
      </>
      :
        <p>There is no user currenly logged in</p>
      }
    </>
    
  )
}

export default Homepage;