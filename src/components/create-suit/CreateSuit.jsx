import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSuit } from '../../actions/suitActions';

const CreateSuit = () => {
  const [color, setColor] = useState('');
  const [designer, setDesigner] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name === 'color') setColor(target.value);
    if(target.name === 'designer') setDesigner(target.value);
    if(target.name === 'image') setImage(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createSuit({
      color,
      designer,
      image
    }));
    setColor('');
    setDesigner('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="suit-color">Suit Color</label>
      <input
        id="suit-color"
        type="text"
        color="color"
        value={color}
        onChange={handleChange}
      />

      <label htmlFor="suit-designer">Suit Designer</label>
      <input
        id="suit-designer"
        type="text"
        color="designer"
        value={designer}
        onChange={handleChange}
      />

      <label htmlFor="suit-image">Suit Image</label>
      <input
        id="suit-image"
        type="text"
        color="image"
        value={image}
        onChange={handleChange}
      />

      <button>Add Suit to Database</button>
    </form>
  );
};

export default CreateSuit;
