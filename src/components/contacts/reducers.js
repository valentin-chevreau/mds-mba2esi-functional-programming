import actionsTypes from './actions-types';

const initialState = {
  items: [{
    id: '1',
    firstName: 'Valentin',
    lastName: 'CHEVREAU',
    phone: '0123456789',
    city: 'paris'
  }, {
    id: '2',
    firstName: 'Test',
    lastName: 'Test',
    phone: '0603938765',
    city: 'marseille'
  }]
};

/**
* Method to create a contact
*/
const createContact = (state, action) => ({
  items: state.items.concat(action.contact)
});

/**
* Method to delete a contact
*/
const updateContact = (state, action) => ({
  items: state.items.map(action.contact)
});

/**
* Method to delete a contact
*/
const deleteContact = (state, action) => ({
  items: state.items.filter((user) => user.id !== action.id)
});

/**
* Method to search a contact
*/
const searchContact = (state, action) => ({
  items: state.items.filter((user) => user.id === action.id)
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_CONTACT:
      return createContact(state, action);
    case actionsTypes.UPDATE_CONTACT:
      return updateContact(state, action);
    case actionsTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    case actionsTypes.SEARCH_CONTACT:
      return searchContact(state, action);
    default:
      return state;
  }
};
