import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, getLoading } from '../redux/phonebook';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import s from './ViewsStyles.module.scss';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <div className={s.wrapper}>
          {this.props.isLoadingContacts && <h1>LOADING...</h1>}
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
