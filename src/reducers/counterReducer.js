// Actions
const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const RESET_COUNT = 'RESET_COUNT';

// Reducer
const initialState = [];
let nextCounterId = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        {
          id: nextCounterId++,
          name: action.newCounter.name,
          step: action.newCounter.step,
          current: 0,
        },
      ];
    case REMOVE_COUNTER:
      return state.filter(counter => counter.id !== action.counterId);
    case INCREMENT_COUNT:
      return state.map(counter =>
        counter.id === action.counterId
          ? {...counter, current: counter.current + counter.step}
          : counter,
      );
    case DECREMENT_COUNT:
      return state.map(counter =>
        counter.id === action.counterId
          ? {...counter, current: counter.current - counter.step}
          : counter,
      );
    case RESET_COUNT:
      return state.map(counter => {
        if (counter.id === action.counterId) {
          return {...counter, current: 0};
        } else {
          return counter;
        }
      });
    default:
      return state;
  }
}

// Action Creators
export function addCounter(newCounter) {
  return {type: ADD_COUNTER, newCounter};
}

export function removeCounter(counterId) {
  return {type: REMOVE_COUNTER, counterId};
}

export function incrementCount(counterId) {
  return {type: INCREMENT_COUNT, counterId};
}

export function decrementCount(counterId) {
  return {type: DECREMENT_COUNT, counterId};
}

export function resetCount(counterId) {
  return {type: RESET_COUNT, counterId};
}
