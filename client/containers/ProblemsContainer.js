import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const ProblemsContainer = () => {
  // use selectors here
  const title = useSelector((store) => store.questions.title);
  const description = useSelector((store) => store.questions.description);
  const solution = useSelector((store) => store.questions.solution);
  const comments = useSelector((store) => store.questions.comments);

  const dispatch = useDispatch(); 

  const createProblem = () => {
    dispatch(actions.createProblemActionCreator)
  }   
  const updateProblem = () => {
    dispatch(actions.updateProblemActionCreator)
  }   
  const deleteProblem = () => {
    dispatch(actions.deleteProblemActionCreator)
  }   
  // const listProblem = () => {
  //   dispatch(actions.listProblemsActionCreator)
  // }

  return (
    <CodeViewer value="tbu" title={title} description={description} solution={solution} comments ={comments} handleClear = {handleClear} handleAccessDataClick={handleAccessDataClick} setTitle={setTitle} setDescription={setDescription} setSolution={setSolution} setComments={setComments} handleAddTitle={handleAddTitle}/>
  )
}