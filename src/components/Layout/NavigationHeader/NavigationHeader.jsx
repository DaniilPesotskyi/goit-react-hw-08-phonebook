import { useDispatch } from 'react-redux';
import css from './NavigationHeader.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/operations';

const NavigationHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onHandleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <div className={css.header}>
      <h1>PhoneBook</h1>
      <ul className={css.nav}>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <button type="button" onClick={onHandleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationHeader;
