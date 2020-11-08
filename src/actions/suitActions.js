import { deleteSuit, getSuits, postSuit } from '../services/suitsApi';

export const PREPEND_SUIT = 'PREPEND_SUIT';
export const prependSuit = suit => ({
  type: PREPEND_SUIT,
  payload: suit
});

export const SET_SUITS = 'SET_SUITS';
export const setSuits = suits => ({
  type: SET_SUITS,
  payload: suits
});

export const DELETE_SUIT = 'DELETE_SUIT';

export const createSuit = suit => dispatch => {
  postSuit(suit)
    .then(createdSuit => {
      dispatch(prependSuit(createdSuit));
    });
};

export const fetchSuits = () => dispatch => {
  getSuits()
    .then(suits => {
      dispatch(setSuits(suits));
    });
};

export const removeSuit = id => dispatch => {
  deleteSuit(id)
    .then(suit => {
      dispatch({
        type: DELETE_SUIT,
        payload: suit.id
      });
    });
};
