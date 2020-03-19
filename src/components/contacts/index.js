import React, { Component } from 'react';
import {
  Container, Row, ListGroup, Button, Form
} from 'react-bootstrap';

import { connect } from 'react-redux';

import { createContact, deleteContact } from './actions';

const Contact = ({ dispatch, user }) => {
  const {
    firstName, lastName, phone, id
  } = user;

  return (
    <ListGroup.Item>
      <span>
        {`${firstName} ${lastName}`}
        <br />
        {`${phone}`}
      </span>
      <br />
      <Button
        variant="secondary"
        size="sm"
        type="button"
        onClick={() => dispatch(createContact({ firstName, lastName, phone }))}
      >
        Modifier
      </Button>
      { ' ' }
      <Button
        variant="danger"
        size="sm"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Supprimer
      </Button>
    </ListGroup.Item>
  );
};

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: '',
        lastname: '',
        phone: ''
      }
    };
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstname(event) {
    event.preventDefault();
    this.setState({
      form: {
        firstname: event.target.value
      }
    });
    console.log('firstname', event.target.value);
  }

  handleChangeLastname(event) {
    event.preventDefault();
    this.setState({
      form: {
        lastname: event.target.value
      }
    });
    console.log('lastname', event.target.value);
  }

  handleChangePhone(event) {
    event.preventDefault();
    this.setState({
      form: {
        phone: event.target.value
      }
    });
    console.log('phone', event.target.value);
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { form } = this.state;
    const { firstname, lastname, phone } = form;
    console.log('form', form);
    event.preventDefault();
    this.dispatch = dispatch;
    dispatch(createContact({ firstname, lastname, phone }));
  }

  render() {
    const { dispatch, items } = this.props;
    const { form } = this.state;
    const { firstname, lastname, phone } = form;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Form.Label htmlFor="firstname">Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your firstname"
                value={firstname}
                id="firstname"
                onChange={this.handleChangeFirstname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="lastname">Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your lastname"
                value={lastname}
                id="lastname"
                onChange={this.handleChangeLastname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="phone">Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="0123456789"
                value={phone}
                id="phone"
                onChange={this.handleChangePhone}
                autoComplete="phone"
              />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
            >
              Submit
            </Button>
          </Form.Row>
        </Form>
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
      </Container>
    );
  }
}

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(Contacts);
