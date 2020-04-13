import { combineReducers } from 'redux';

import contacts from './components/contacts/reducers';
import search from './components/contacts/components/search/reducer';

export default combineReducers({
  contacts, search
});
