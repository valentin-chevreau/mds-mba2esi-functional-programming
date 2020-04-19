import React, { Component } from 'react';
import {
  Container, Row, ListGroup, Col, Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Contact from './components/item';

import ContactForm from './components/form';
import Search from './components/search';

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      searchBar: false
    };
    this.handleDisplaySearchBar = this.handleDisplaySearchBar.bind(this);
    this.handleDisplayForm = this.handleDisplayForm.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleDisplaySearchBar() {
    this.setState({
      searchBar: true
    });
  }

  handleHideSearchBar() {
    this.setState({
      searchBar: false
    });
  }

  handleDisplayForm() {
    this.setState({
      add: true
    });
  }

  handleHideForm() {
    this.setState({
      add: false
    });
  }

  render() {
    const { dispatch, items, contacts } = this.props;
    const { add, searchBar } = this.state;

    return (
      <Container className="mt-3">
        <h1>Répertoire</h1>
        <Row className="mt-3">
          <Col>
            <Row>
              <ListGroup>
                {
                  searchBar
                    ? (
                      <Button
                        variant="outline-dark"
                        type="button"
                        className="sm mb-3"
                        onClick={() => this.handleHideSearchBar()}
                      >
                        Annuler la recherche
                      </Button>
                    )
                    : (
                      <Button
                        variant="outline-dark"
                        type="button"
                        className="sm mb-3"
                        onClick={() => this.handleDisplaySearchBar()}
                      >
                        Rechercher un contact
                      </Button>
                    )
                }

                {
                  searchBar
                    ? (
                      <Search user={contacts} />
                    ) : ''
                }
                {
                  add ? (
                    <Button
                      variant="outline-info"
                      type="button"
                      className="sm mb-3"
                      onClick={() => this.handleHideForm()}
                    >
                      Annuler
                    </Button>
                  ) : (
                    <Button
                      variant="outline-info"
                      type="button"
                      className="sm mb-3"
                      onClick={() => this.handleDisplayForm()}
                    >
                      Ajouter un contact
                    </Button>
                  )
                }
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
          {
            add ? (
              <Col>
                <ContactForm />
              </Col>
            ) : ''
          }
        </Row>
      </Container>
    );
  }
}

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(ContactsList);
