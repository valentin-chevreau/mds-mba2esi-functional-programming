import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { getSearchResults } from '../../actions';

class SearchQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    const { search } = this.state;

    this.dispatch = dispatch;
    dispatch(getSearchResults({
      search
    }));
    console.log('submitState', this.state);
    console.log('submitProps', this.props);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mt-3">
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            type="text"
            className="orm-control mr-sm-2 mb-2"
            onChange={(e) => this.handleChange(e)}
            autoFocus
          />
          <Form.Control
            type="submit"
            className="orm-control mr-sm-2"
            value="Rechercher"
          />
        </Form>
      </div>
    );
  }
}

export default connect((state) => state)(SearchQuery);
