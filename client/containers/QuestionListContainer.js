import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const QuestionListContainer = () => {
    //useSelector to select state variables to display totalCards and totalMarkets
    //pass them down as JSX attributes to props objects of TotalsDisplay and MarketsContainer
    // add pertinent state here
  
    // const title = useSelector((store) => store.questions.title);
    const titleCards = useSelector((store) => store.questions.titleCards);

    const dispatch = useDispatch();

    const fetchAndUpdateTitles = () => {
        dispatch(actions.listProblemsActionCreator)
    }

    const handleAccessDataClick = () => {
      dispatch(actions.readProblemActionCreator)
  }

    const deleteCard = () => {
      dispatch(actions.deleteProblemActionCreator)
  }
    fetchAndUpdateTitles();
    return (
      <div className="container">
        <div className="outerBox">
          {/* Start adding components here... */}
          <TitlecardsDisplay titleCards={titleCards} deleteCard={deleteCard} fetchAndUpdateTitles={fetchAndUpdateTitles} handleAccessDataClick={handleAccessDataClick}/>
        </div>
      </div>
    );
  };
  
  export default QuestionListContainer;