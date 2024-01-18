import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'store/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();
    const isNameAlreadyExists = contacts.some(
      (existingContact) => existingContact.name === name
    );

    if (isNameAlreadyExists) {
      alert('This name is already in the phonebook. Please choose a different name.');
    } else {
      dispatch(addContact({ name, number, id }));
      setName('');
      setNumber('');
    }
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
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
}




