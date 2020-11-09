import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuits, removeSuit } from '../../actions/suitActions';
import { selectSuits } from '../../selectors/suitSelectors';

const SuitList = () => {
  const suits = useSelector(selectSuits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuits());
  }, []);

  const handleDelete = ({ target }) => {
    dispatch(removeSuit(target.value));
  };

  const suitElements = suits.map(suit => (
    <li key={suit.id}>
      <p>{suit.color}</p>
      <img alt={suit.color} src={suit.image} />
      <button value={suit.id} onClick={handleDelete}>Delete</button>
    </li>
  ));

  return (
    <ul data-testid="suits">
      {suitElements}
    </ul>
  );
};

export default SuitList;
