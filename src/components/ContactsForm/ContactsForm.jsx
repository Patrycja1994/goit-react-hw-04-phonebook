import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactsForm.module.css';
import { nanoid } from 'nanoid';


export const ContactsForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const addNewContact = {
          id: nanoid(),
          name: name,
          number: number,
        };


const handleInput = (event) => {
  const { name, value } = event.currentTarget;

  if (name === 'name') {
    setName(value);
  } else if (name === 'number') {
    setNumber(value);
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    addContacts(addNewContact);
    setName('');
    setNumber('');
    }

      return (
        <form className={style.formSubmit} onSubmit={handleSubmit}>
          <label className={style.formSubmit__name}>Name
          <input 
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
        <label className={style.formSubmit__number}>Number
        <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

          <button className={style.formSubmit__button} type="submit">
            Add contact
          </button>
        </form>
      )
    }
  

  ContactsForm.propTypes = {
    addContacts: PropTypes.func.isRequired,
  }