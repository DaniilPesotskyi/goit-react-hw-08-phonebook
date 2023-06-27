import { useDispatch } from 'react-redux';
import css from './NavigationHeader.module.css';
import { logOut } from '../../../redux/authOperations';

const NavigationHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.header}>
      <h1>PhoneBook</h1>
      <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default NavigationHeader;
