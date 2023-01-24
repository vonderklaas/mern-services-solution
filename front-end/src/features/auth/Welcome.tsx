import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  return (
    <section className='welcome'>
      <p>{today}</p>
      <h1>Welcome, {username}!</h1>
      <p>
        <Link to='/dash/notes'>View current #Notes</Link>
      </p>
      <p>
        <Link to='/dash/notes/new'>Open new #Note</Link>
      </p>
      {(isManager || isAdmin) && (
        <>
          <p>
            <Link to='/dash/users'>View Users</Link>
          </p>
          <p>
            <Link to='/dash/users/new'>Create new User</Link>
          </p>
        </>
      )}
    </section>
  );
};
