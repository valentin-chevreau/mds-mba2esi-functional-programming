import React, { Component } from 'react';
import {
  Button, Form, Col
} from 'react-bootstrap';
import { connect } from 'react-redux';
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
    console.log('This is initialState', this.state);
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
      if (update !== null) {
        dispatch(updateContact({
          id, firstname, lastname, phone, city
        }));
        this.setState({
          update: false
        });
        event.preventDefault();
      }
    } else {
      dispatch(createContact({
        id, firstname, lastname, phone, city
      }));
      event.preventDefault();
    }
    console.log('submitState', this.state);
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
                      readOnly
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
              </Col>
              <Col>
                <br />
                <Button
                  variant="success"
                  type="submit"
                >
                  Submit
                </Button>
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
