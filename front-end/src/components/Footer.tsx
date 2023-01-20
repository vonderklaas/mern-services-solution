import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const Footer = () => {
  const { username, status } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goBackToHome = () => navigate('/dash');

  let goHomeButton = null;
  if (pathname !== '/dash') {
    goHomeButton = (
      <button className='dash-footer__button' onClick={goBackToHome}>
        Home
      </button>
    );
  }

  return (
    <footer className='dash-footer'>
      {goHomeButton}
      <p>Current User: {username}</p>
      <p>Status: {status}</p>
    </footer>
  );
};
