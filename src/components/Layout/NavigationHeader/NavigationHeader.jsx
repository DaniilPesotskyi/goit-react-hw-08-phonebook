import { useDispatch } from 'react-redux';
import css from './NavigationHeader.module.css';
import { logOut } from '../../../redux/authOperations';
import { NavLink } from 'react-router-dom';

const NavigationHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.header}>
      <h1>PhoneBook</h1>
      <ul className={css.nav}>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <button type="button" onClick={() => dispatch(logOut())}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationHeader;
