// Add dependencies
import { fromJS } from 'immutable';
import actionsTypes from './actions-types';

const initialState = {
  items: [{
    id: '1',
    firstname: 'Valentin',
    lastname: 'CHEVREAU',
    phone: '0123456789',
    city: 'Paris'
  }, {
    id: '2',
    firstname: 'Antoine',
    lastname: 'C',
    phone: '9876543210',
    city: 'Marseille'
  }]
};

/**
 * Method to create a contact
 * items: state.items.concat(action.contact)
 */
const createContact = (state, action) => fromJS(state)
  .setIn(['items'], (state.items).concat(action.contact))
  .toJS();

/**
 * Method to update a contact
 */
const updateContact = (state, action) => fromJS(state).update('items', (items) => items.map(
  (item) => {
    console.log('contacts: ', item);
    if (item.get('id') === action.contact.id) {
      return item
        .set('lastname', action.contact.lastname)
        .set('firstname', action.contact.firstname)
        .set('phone', action.contact.phone)
        .set('city', action.contact.city);
    }
    return item;
  }
)).toJS();

/**
* Method to delete a contact
*/
const deleteContact = (state, action) => ({
  items: state.items.filter((contact) => contact.id !== action.id)
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.UPDATE_CONTACT:
      return updateContact(state, action);
    case actionsTypes.CREATE_CONTACT:
      return createContact(state, action);
    case actionsTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    default:
      return state;
  }
};
