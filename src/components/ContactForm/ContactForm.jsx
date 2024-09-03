
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.module.css';

class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.onAddContact(this.state.name, this.state.number);
      this.setState({ name: '', number: '' });
    };
  
    render() {
      const { name, number } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      );
    }
  }
  
  ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
  
  export default ContactForm;
