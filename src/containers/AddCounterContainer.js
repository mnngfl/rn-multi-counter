import {connect} from 'react-redux';
import AddModal from '../components/AddModal';
import {addCounter} from '../reducers/counterReducer';

const mapDispatchToProps = dispatch => ({
  addCounter: newCounter => dispatch(addCounter(newCounter)),
});

let AddCounterContainer = connect(null, mapDispatchToProps)(AddModal);

export default AddCounterContainer;
