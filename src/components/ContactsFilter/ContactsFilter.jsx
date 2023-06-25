import css from './ContactsFilter.module.css';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filtersSlice';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.inputField}>
      <input
        className={css.input}
        type="text"
        placeholder="Search..."
        autoComplete="off"
        name="query"
        id="query"
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
      />
    </div>
  );
};

export default ContactsFilter;
