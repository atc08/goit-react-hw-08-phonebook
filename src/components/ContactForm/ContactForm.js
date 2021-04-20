import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputsChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    if (name && number) {
      onAdd({ id: uuidv4(), name, number });
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={s.FormContainer}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p className={s.InputTitle}>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={this.handleInputsChange}
              className={s.InputField}
            ></input>
          </label>
          <label>
            <p className={s.InputTitle}>Phone number</p>
            <input
              type="tel"
              name="number"
              value={number}
              placeholder="Enter phone number"
              onChange={this.handleInputsChange}
              className={s.InputField}
            ></input>
          </label>

          <button type="submit" className={s.InputButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAdd: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
