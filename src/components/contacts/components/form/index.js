import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Col
} from 'react-bootstrap';
import { createContact, updateContact } from '../../actions';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      phone: '',
      city: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { dispatch, update } = this.props;
    const {
      id, firstname, lastname, phone, city
    } = this.state;
    this.dispatch = dispatch;
    if (update) {
      dispatch(updateContact({
        id,
        firstname,
        lastname,
        phone,
        city
      }));
    } else {
      dispatch(createContact({
        id, firstname, lastname, phone, city
      }));
    }
    event.preventDefault();
  }

  render() {
    const {
      firstname, lastname, phone, city, id
    } = this.state;

    const { update } = this.props;

    return (
      <Col>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Col>
                <Form.Label htmlFor="id">ID</Form.Label>
                {update
                  ? (
                    <Form.Control
                      type="text"
                      name="id"
                      id="id"
                      defaultValue={update.id}
                      autoComplete="id"
                      onChange={(event) => this.handleOnChange(event)}
                      autoFocus
                    />
                  )
                  : (
                    <Form.Control
                      type="text"
                      name="id"
                      id="id"
                      defaultValue={id}
                      autoComplete="id"
                      onChange={(event) => this.handleOnChange(event)}
                      autoFocus
                    />
                  )}
              </Col>
              <Col>
                <Form.Label htmlFor="firstname">Firstname</Form.Label>
                {update
                  ? (
                    <Form.Control
                      type="text"
                      name="firstname"
                      defaultValue={update.firstname}
                      id="firstname"
                      autoComplete="firstname"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name="firstname"
                      defaultValue={firstname}
                      id="firstname"
                      autoComplete="firstname"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  )}
              </Col>
              <Col>
                <Form.Label htmlFor="lastname">Lastname</Form.Label>
                {update
                  ? (
                    <Form.Control
                      type="text"
                      name="lastname"
                      defaultValue={update.lastname}
                      id="lastname"
                      autoComplete="lastname"
                      onChange={(event) => this.handleOnChange(event)}

                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name="lastname"
                      defaultValue={lastname}
                      id="lastname"
                      autoComplete="lastname"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  )}
              </Col>
              <Col>
                <Form.Label htmlFor="phone">Phone</Form.Label>
                {update
                  ? (
                    <Form.Control
                      type="text"
                      name="phone"
                      defaultValue={update.phone}
                      id="phone"
                      autoComplete="phone"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name="phone"
                      value={phone}
                      id="phone"
                      autoComplete="phone"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  )}
              </Col>
              <Col>
                <Form.Label htmlFor="city">City</Form.Label>
                {update
                  ? (
                    <Form.Control
                      type="text"
                      name="city"
                      defaultValue={update.city}
                      id="city"
                      autoComplete="city"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name="city"
                      value={city}
                      id="city"
                      autoComplete="city"
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  )}
                {
                  update
                    ? (
                      <Button
                        variant="outline-info"
                        type="submit"
                        className="sm mt-3"
                        block
                      >
                        Mettre à jour
                      </Button>
                    )
                    : (
                      <Button
                        variant="outline-info"
                        type="submit"
                        className="sm mt-3"
                        block
                      >
                        Créer le contact
                      </Button>
                    )
                }
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
      </Col>
    );
  }
}

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(ContactForm);
