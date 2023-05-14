import { nanoid } from 'nanoid';
import css from './ContactForm.modul.css'
import React, { useState } from 'react';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const isContactEsist = addContact({ id: nanoid(6), name, number });

    if (!isContactEsist) {
      reset();
    }
  };

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  }

  const reset = () => {
    setName('');

    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contact_form}>
      <label className={css.constact_lable}>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>

      <label className={css.constact_lable}>
        Number
        <input
          onChange={handleChange}
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number should be in the format: +123-456-7890 or 123-456-7890"
          required
          value={number}
        />
      </label>

      <button type="submit">Add Constact</button>
    </form>
  );
}
