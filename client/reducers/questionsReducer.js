import * as types from '../actions/actions'

const initialState = { title: '', 
  description: '', 
  solution: '', 
  comments: '',
  titleCards: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROBLEM:

      return {
        ...state,
      }

    case types.READ_PROBLEM: {//dispatched in questions list container
      
      return {
        ...state,
        title,
      }
    }
    case types.UPDATE_PROBLEM:

      return {
        ...state,
      }

    case types.DELETE_PROBLEM: //dispatched in questions list container

      return {
        ...state,
      }

    case types.LIST_PROBLEMS:

      return {
        ...state,
      }
    default: {
      return state;
    }
  }
}

export default questionsReducer;