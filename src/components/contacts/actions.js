import actionsTypes from './actions-types';

/**
 * Create contact
 */
export const createContact = (contact) => ({
  type: actionsTypes.CREATE_CONTACT,
  contact
});

/**
 * Delete contact
 */
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE_CONTACT,
  id
});

export const updateContact = (contact) => ({
  type: actionsTypes.UPDATE_CONTACT,
  contact
});
