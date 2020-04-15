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

    console.log(this.state);
    console.log(this.props);

    const { update } = this.state;

    return (
      <ListGroup.Item>
        { update
          ? <ContactForm update={user} />
          : '' }
        { update
          ? (
            <div>
              <span>
                {`${firstname} ${lastname}`}
              </span>
              <br />
              <span>
                {`${phone}`}
              </span>
              <br />
              <span>
                {`${city}`}
              </span>
              <br />
              <Button
                variant="secondary"
                size="sm"
                type="button"
                className="mr-2"
                onClick={() => this.handleUpdate()}
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
            </div>
          )
          : (
            <div>
              <span>
                {`${firstname} ${lastname}`}
              </span>
              <br />
              <span>
                {`${phone}`}
              </span>
              <br />
              <span>
                {`${city}`}
              </span>
              <br />
              <Button
                variant="secondary"
                size="sm"
                type="button"
                className="mr-2"
                onClick={() => this.handleUpdate()}
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
            </div>
          )}
      </ListGroup.Item>
    );
  }
}

export default Contact;
