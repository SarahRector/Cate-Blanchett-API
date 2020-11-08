import { SET_SUITS, PREPEND_SUIT, DELETE_SUIT } from '../actions/suitActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PREPEND_SUIT:
      return { ...state, list: [action.payload, ...state.list] };
    case SET_SUITS:
      return { ...state, list: action.payload };
    case DELETE_SUIT:
      return {
        ...state,
        list: state.list.filter(suit => suit.id !== action.payload)
      };
    default:
      return state;
  }
}
