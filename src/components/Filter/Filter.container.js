import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/phonebook';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
