import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getAllContacts = state => state.phonebook.contacts;

const getFilter = state => state.phonebook.filter;

const getFilteredContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getLoading, getFilter, getFilteredContact };

// const getFilteredContact = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };
