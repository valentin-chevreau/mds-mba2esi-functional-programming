import React from 'react';
import {
  Button, Col, Form, ListGroup
} from 'react-bootstrap';
import { deleteContact } from '../../actions';

const Contact = ({ dispatch, user }) => {
  const {
    firstname, lastname, phone, id, city
  } = user;

  return (
    <ListGroup.Item className="mb-1">
      <p>
        {`${firstname} ${lastname}`}
      </p>
      <p>
        {`${phone}`}
      </p>
      <Button
        variant="secondary"
        size="sm"
        type="button"
        className="mr-2"
        onClick={
          () => (
            <Form>
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
          )
        }
      >
        Modifier
      </Button>
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

export default Contact;
