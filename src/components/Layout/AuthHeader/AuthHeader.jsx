import { NavLink } from 'react-router-dom';
import css from './AuthHeader.module.css';
const AuthHeader = () => {
  return (
    <div className={css.header}>
      <h1>PhoneBook</h1>
      <ul>
        <li className={css.nav}>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthHeader;
