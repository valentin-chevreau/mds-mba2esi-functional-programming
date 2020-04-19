import React from 'react';
import { fromJS } from 'immutable';
import initialState from './initial-state';
import actionsTypes from '../actions/actions-types';
import Contact from '../../item';

/**
 * Action to search a contact
 */
const searchContact = (state, action) => fromJS(state)
  .setIn(['items'], (state.items).filter((items) => items.id.toLocaleLowerCase().indexOf(action.term.search) !== -1
  || items.lastname.toLocaleLowerCase().indexOf(action.term.search) !== -1
  || items.firstname.toLocaleLowerCase().indexOf(action.term.search) !== -1).map(
    (user) => (
      <Contact key={user.id} search={user} />
    )
  ));

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.SEARCH_CONTACT:
      return searchContact(state, action);
    default:
      return state;
  }
};
