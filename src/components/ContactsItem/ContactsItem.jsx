import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsItem.module.css';
import { deleteContact } from '../../redux/operations';
import { getContactTypes } from '../../redux/selectors';
import { useEffect } from 'react';

const ContactsItem = ({ contact }) => {
  const { id, name, number } = contact;
  const { contactTypes } = useSelector(getContactTypes);

  useEffect(() => {
    console.log(contactTypes);
  }, [contactTypes, name]);

  const dispatch = useDispatch();
  return (
    <div className={css.contactItem}>
      <div className={css.contactContentWrap}>
        <div className={css.contactInfoWrap}>
          <p className={css.contactName}>{name}</p>
          <p className={css.contactPhone}>{number}</p>
        </div>
        <div className={css.contactActionsWrap}>
          <button
            className={css.contactDeleteBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Del
          </button>
          <a href={`tel:${number}`}>
            <button href={`tel:${number}`} className={css.contactCallBtn}>
              Call
            </button>
          </a>
        </div>
      </div>
      <div className={css.contactType}></div>
    </div>
  );
};

export default ContactsItem;
