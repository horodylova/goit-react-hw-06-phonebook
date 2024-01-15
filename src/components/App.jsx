import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, addContact, deleteContact, setFilter } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Heading1, Heading2 } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  const addContactHandler = (contact) => {
    const isNameAlreadyExists = contacts.some(
      (existingContact) => existingContact.name === contact.name
    );

    if (isNameAlreadyExists) {
      alert(
        'This name is already in the phonebook. Please choose a different name.'
      );
      return;
    }

    dispatch(addContact(contact));

    const newContacts = [...contacts, contact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));

    const newContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <Heading1>Phonebook</Heading1>
      <ContactForm addContact={addContactHandler} />
      <Heading2>Contacts</Heading2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </AppContainer>
  );
};

export default App;

