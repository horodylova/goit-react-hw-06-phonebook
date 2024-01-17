import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';


export const ContactForm = ({ addContact }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.contacts);


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();
    addContact({ id, name, number });

    setName('');
    setNumber('');
  };

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
  };

  return (
    <FormContainer onSubmit={handleFormSubmit} addContact={addContactHandler}>
      <Label htmlFor="name">
        Name:
        <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input type="tel" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};


