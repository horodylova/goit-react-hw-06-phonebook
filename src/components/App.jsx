import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Heading1, Heading2 } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <AppContainer>
      <Heading1>Phonebook</Heading1>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};

export default App;

