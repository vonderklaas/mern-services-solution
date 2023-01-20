import { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';
import useAuth from '../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

export const Header = () => {
  const { isManager, isAdmin } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  const onNewNoteClicked = () => navigate('/dash/notes/new');
  const onNewUserClicked = () => navigate('/dash/users/new');
  const onNotesClicked = () => navigate('/dash/notes');
  const onUsersClicked = () => navigate('/dash/users');

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = 'dash-header__container--small';
  }

  let newNoteButton = null;
  if (NOTES_REGEX.test(pathname)) {
    newNoteButton = <button onClick={onNewNoteClicked}>New Note</button>;
  }

  let newUserButton = null;
  if (USERS_REGEX.test(pathname)) {
    newUserButton = <button onClick={onNewUserClicked}>Create New User</button>;
  }

  let userButton = null;
  if (isManager || isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
      userButton = <button onClick={onUsersClicked}>Users Settings</button>;
    }
  }

  let notesButton = null;
  if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
    notesButton = <button onClick={onNotesClicked}>Notes</button>;
  }

  const logoutButton = <button onClick={sendLogout}>Logout</button>;

  const errClass = isError ? 'errmsg' : 'offscreen';

  let buttonContent;
  if (isLoading) {
    buttonContent = <PulseLoader color={'#FFF'} />;
  } else {
    buttonContent = (
      <>
        {newNoteButton}
        {newUserButton}
        {notesButton}
        {userButton}
        {logoutButton}
      </>
    );
  }

  return (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className='dash-header'>
        <div className={`dash-header__container ${dashClass}`}>
          <Link to='/dash'>
            <h1 className='dash-header__title'>Tech Repairs</h1>
          </Link>
          <nav className='dash-header__nav'>{buttonContent}</nav>
        </div>
      </header>
    </>
  );
};
