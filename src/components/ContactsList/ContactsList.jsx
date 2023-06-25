import css from './ContactsList.module.css';

import { useEffect, useState } from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsItem from '../ContactsItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  selectActiveTypes,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

const ContactsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items } = useSelector(getContacts);
  const activeTypes = useSelector(selectActiveTypes);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredContacts = items.filter(c => activeTypes.includes(c.type));
  const contactsToRender = activeTypes.length === 0 ? items : filteredContacts;

  return (
    <ul className={css.contactsList}>
      <button className={css.addBtn} type="button" onClick={onModalToggle}>
        ADD
      </button>
      {isModalOpen && <ContactsForm close={onModalToggle} />}
      {contactsToRender
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactsList;
