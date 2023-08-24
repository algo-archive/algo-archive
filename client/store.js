import { createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore ( 
  reducers, 
  composeWithDevTools()
)

export default store;