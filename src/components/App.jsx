import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ConstactList } from './ConstactList/ConstactList';
import { Filter } from './Filter /Filter';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      toast.error('Contact already exists');
      return true;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
    return false;
  };

  handleDeleteConstact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleFiltercontacts = () => {
    return this.state.contacts.filter(constact =>
      constact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.handleAddContact} />
        <Filter
          value={this.state.filter}
          handleChange={this.handleChangeFilter}
        />
        <ConstactList
          contacts={this.handleFiltercontacts()}
          deleteContact={this.handleDeleteConstact}
        />
        <Toaster />
      </>
    );
  }
}
