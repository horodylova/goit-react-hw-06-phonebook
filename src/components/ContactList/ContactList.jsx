import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  const renderContacts = () => {
    if (filteredContacts.length === 0) {
      return <p>No contacts found</p>;
    }

    return (
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  };

  return <div>{renderContacts()}</div>;
};

    
 
  

  