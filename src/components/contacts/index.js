import React from 'react';
import {
  Container, Row, ListGroup, Col
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Contact from './components/item';

import ContactFormCreate from './components/form';

const ContactsList = ({ dispatch, items }) => (
  <Container className="mt-3">
    <h1>Ajouter un contact</h1>
    <Row className="mt-3">
      <Col>
        <Row>
          <ListGroup>
            {items.map((user) => (
              <Contact
                key={user.id}
                dispatch={dispatch}
                user={user}
              />
            ))}
          </ListGroup>
        </Row>
      </Col>
      <Col>
        <ContactFormCreate />
      </Col>
    </Row>
  </Container>
);


const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(ContactsList);
