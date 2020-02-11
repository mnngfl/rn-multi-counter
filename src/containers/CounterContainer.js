import {connect} from 'react-redux';
import CounterList from '../components/CounterList';
import * as counterActions from '../reducers/counterReducer';

const mapStateToProps = state => {
  return {counters: state.counters};
};

const mapDispatchToProps = dispatch => ({
  incrementCount: id => dispatch(counterActions.incrementCount(id)),
  decrementCount: id => dispatch(counterActions.decrementCount(id)),
  resetCount: id => dispatch(counterActions.resetCount(id)),
  removeCounter: id => dispatch(counterActions.removeCounter(id)),
});

let CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList);

export default CounterContainer;
