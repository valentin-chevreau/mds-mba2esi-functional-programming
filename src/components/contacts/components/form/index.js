import React, { Component } from 'react';
import {
  Button, Form, Col
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { createContact } from '../../actions';

class ContactFormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      phone: '',
      city: '',
      update: ''
    };
    console.log('This is initialState', this.state);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleChangeFirstname(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleChangeLastname(event) {
    this.setState({
      lastname: event.target.value
    });
  }

  handleChangePhone(event) {
    this.setState({
      phone: event.target.value
    });
  }

  handleChangeCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const {
      id, firstname, lastname, phone, city
    } = this.state;
    this.dispatch = dispatch;
    dispatch(createContact({
      id, firstname, lastname, phone, city
    }));
    console.log('submitState', this.state);
    event.preventDefault();
  }

  render() {
    const {
      firstname, lastname, phone, city, id
    } = this.state;

    return (
      <Col>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Col>
                <Form.Label htmlFor="id">ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  id="id"
                  value={id}
                  autoComplete="id"
                  onChange={this.handleChangeID}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="firstname">Firstname</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={firstname}
                  id="firstname"
                  autoComplete="firstname"
                  onChange={this.handleChangeFirstname}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="lastname">Lastname</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={lastname}
                  id="lastname"
                  autoComplete="lastname"
                  onChange={this.handleChangeLastname}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={phone}
                  id="phone"
                  autoComplete="phone"
                  onChange={this.handleChangePhone}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="city">City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={city}
                  id="city"
                  autoComplete="city"
                  onChange={this.handleChangeCity}
                />
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

export default connect(mapToProps)(ContactFormCreate);
