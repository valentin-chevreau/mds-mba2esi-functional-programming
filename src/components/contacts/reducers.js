// Add dependencies
// import { fromJS } from 'immutable';
import actionsTypes from './actions-types';

const initialState = {
  items: [{
    id: '1',
    firstname: 'Valentin',
    lastname: 'CHEVREAU',
    phone: '0123456789',
    city: 'paris'
  }, {
    id: '2',
    firstname: 'Antoine',
    lastname: 'C',
    phone: '9876543210',
    city: 'marseille'
  }]
};

/**
 * Method to create a contact
 */
const createContact = (state, action) => ({
  items: state.items.concat(action.contact)
});
/*
const createContact = (state, action) => (
  fromJS(state)
    .setIn(['items'], action.contact)
    .toJS()
);
 */


/**
* Method to delete a contact
*/
const deleteContact = (state, action) => ({
  items: state.items.filter((user) => user.id !== action.id)
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
