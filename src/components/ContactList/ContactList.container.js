import { connect } from 'react-redux';
import ContactList from './ContactList';
import { deleteContact, getFilteredContact } from '../../redux/phonebook';

const mapStateToProps = state => ({
  contacts: getFilteredContact(state),
});

const mapDispatchToProps = dispatch => ({
  ondeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
