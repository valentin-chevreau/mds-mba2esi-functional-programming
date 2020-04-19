import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Contact from '../../../item';

const Results = ({ contact, dispatch, search }) => (
  <ListGroup className="mt-3">
    {
      contact
        ? (
          <ListGroup.Item>
            <Contact
              key={search.id}
              dispatch={dispatch}
              user={search}
            />
          </ListGroup.Item>
        )
        : ''
    }
  </ListGroup>
);

export default connect((state) => state)(Results);
