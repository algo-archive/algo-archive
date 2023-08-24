export const CREATE_PROBLEM = 'CREATE_PROBLEM';
export const READ_PROBLEM = 'READ_PROBLEM';
export const UPDATE_PROBLEM = 'UPDATE_PROBLEM';
export const DELETE_PROBLEM = 'DELETE_PROBLEM';
export const LIST_PROBLEMS = 'LIST_PROBLEMS';

export const createProblemActionCreator = (title, description, solution, comments) => ({ // adds to database 
  type: CREATE_PROBLEM, 
  payload: { title: title, 
    description: description, 
    solution: solution, 
    comments: comments }
});

export const readProblemActionCreator = (title) => ({ // pulls from database and displays 
  type: READ_PROBLEM,
  payload: {title: title}
});

export const updateProblemActionCreator = (title, description, solution, comments) => ({ // update database with new problems
  type: UPDATE_PROBLEM,
  payload: { title: title, 
    description: description, 
    solution: solution, 
    comments: comments }
});

export const deleteProblemActionCreator = (title) => ({ // removes from database 
  type: DELETE_PROBLEM,
  payload: { title: title }
});

export const listProblemsActionCreator = () => ({ // shows all problem titles
  type: LIST_PROBLEMS,
});

