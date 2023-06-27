import { useDispatch } from 'react-redux';
import css from './ContactsItem.module.css';
import { deleteContact, updateContact } from '../../redux/operations';
import { useState } from 'react';

const ContactsItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const dispatch = useDispatch();

  const onSubmenuOpen = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const onHandleUpdate = e => {
    e.preventDefault();
    dispatch(updateContact({ id, name: newName, number: newNumber }));
    setIsSubmenuOpen(false)
    setNewName('')
    setNewNumber('')
  };

  const onHandleChange = e => {
    switch (e.currentTarget.name) {
      case 'newName':
        setNewName(e.currentTarget.value);
        break;
      case 'newNumber':
        setNewNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

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
          <button onClick={onSubmenuOpen} className={css.contactCallBtn}>
            Edit
          </button>
        </div>
      </div>
      <div className={css.contactType}></div>
      {isSubmenuOpen && (
        <div className={css.submenuWrap}>
          <form className={css.form} onSubmit={onHandleUpdate}>
            <input
              className={css.input}
              type="text"
              placeholder="New name"
              name="newName"
              value={newName}
              onChange={onHandleChange}
            />
            <input
              className={css.input}
              type="text"
              placeholder="New number"
              name="newNumber"
              value={newNumber}
              onChange={onHandleChange}
            />
            <button className={css.submitBtn} type="submit">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactsItem;
