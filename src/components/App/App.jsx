import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactsForm } from "../ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactList/ContactList";
import style from './App.module.css';

  export const App = () => {
    const [contacts, setContacts] = useState(
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );

    const [filter, setFilter] = useState('');

  const onChange = (event) => {
      setFilter(event.currentTarget.value);
     };

  const deleteValue = (id) => {
    const filtred = contacts.filter(contact => contact.id !== id);
    setContacts(filtred);
  };

    const addContacts = contact => {
    const addNewContact = {
          id: nanoid(),
          name: contact.name,
          number: contact.number,
      };
      
      if ( contacts.find( contact => contact.name === addNewContact.name )){
        alert( `${addNewContact.name} is already in contacts`);
        return contacts;
      } 
      
      setContacts([...contacts, addNewContact]);
      
  }  

  useEffect(() => {
    const contactsFromStorage = contacts;
    localStorage.setItem("contacts", JSON.stringify(contactsFromStorage));
}, [contacts]);

    const filtredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

  return (
    <div  className={style.formBox}>
      <h1>Phonebook</h1>
      <ContactsForm
        addContacts={addContacts} />

      <h2>Contacts</h2>
      <Filter
        onChange={onChange} />

      <ContactsList
        contacts={filtredContacts}
        deleteValue={deleteValue}
      />
</div>
  );
};

