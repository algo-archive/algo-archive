import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';

const reducers = combineReducers({
  questions: questionsReducer,
});

export default reducers; 