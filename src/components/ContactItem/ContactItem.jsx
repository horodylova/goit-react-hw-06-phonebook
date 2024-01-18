import React from 'react';
import { ContactListItem, ContactInfo, DeleteButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListItem>
      <ContactInfo>
        {contact.name}: {contact.number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};


