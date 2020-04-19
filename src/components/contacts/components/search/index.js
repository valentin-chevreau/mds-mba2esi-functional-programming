import React from 'react';
import { connect } from 'react-redux';

import Results from './components/results';
import InputQuery from './components/input-query';

const Search = ({ search }) => (
  <div>
    <InputQuery />
    <Results
      contacts={search.contact}
    />
  </div>
);

export default connect((state) => state)(Search);
