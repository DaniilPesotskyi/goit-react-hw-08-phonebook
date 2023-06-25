import ContactsFilter from '../../components/ContactsFilter/ContactsFilter';
import ContactsList from '../../components/ContactsList/ContactsList';
import TypesFilter from '../../components/TypesFilter/TypesFilter';

const Contacts = () => {
  return (
    <>
      <ContactsFilter />
      <TypesFilter />
      <ContactsList />
    </>
  );
};

export default Contacts;
