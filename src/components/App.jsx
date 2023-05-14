import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ConstactList } from './ContactList/ConstactList';
import { Filter } from './Filter /Filter';
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  const handleAddContact = contact => {
    if (contacts.some(item => item.name === contact.name)) {
      toast.error('Contact already exists');
      return true;
    }
    setContacts(prevState => [...prevState, contact]);
    return false;
  };


  const handleDeleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id)
          });
  };


  const handleChangeFilter = e => {
    setFilter( e.target.value );
  };


  const handleFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase().trim())
    );
  };


useEffect (() =>{
  localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])


    return (
      <>
        <ContactForm addContact={handleAddContact} />
        <Filter
          value={filter}
          handleChange={handleChangeFilter}
        />
        <ConstactList
          contacts={handleFilterContacts()}
          deleteContact={handleDeleteContact}
        />
        <Toaster />
      </>
    );
};
