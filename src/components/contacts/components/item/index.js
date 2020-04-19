import React, { Component } from 'react';
import {
  Button, ListGroup
} from 'react-bootstrap';
import { deleteContact } from '../../actions';
import ContactForm from '../form';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({
      update: true
    });
  }

  render() {
    const {
      dispatch, user
    } = this.props;

    const {
      firstname, lastname, phone, id, city
    } = user;

    const { update } = this.state;

    return (
      <ListGroup.Item>
        { update
          ? (
            <div>
              <ContactForm update={user} />
              {`${firstname} ${lastname}`}
              <br />
              {`${phone}`}
              <br />
              {`${city}`}
            </div>
          )
          : (
            <div>
              {`${firstname} ${lastname}`}
              <br />
              {`${phone}`}
              <br />
              {`${city}`}
              <br />
              <Button
                variant="outline-secondary"
                className="mr-2"
                onClick={() => this.handleUpdate()}
              >
                Modifier
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => dispatch(deleteContact(id))}
              >
                Supprimer
              </Button>
            </div>
          )}
      </ListGroup.Item>
    );
  }
}

export default Contact;
