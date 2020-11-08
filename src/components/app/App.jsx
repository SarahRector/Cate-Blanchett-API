import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import CreateSuit from '../create-suit/CreateSuit';

export default function App() {
  return (
    <Provider store={store}>
      <CreateSuit />
    </Provider>
  );
}
