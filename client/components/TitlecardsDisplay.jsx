import React from 'react';
import TitleCard from './TitleCard.jsx';

const TitlecardsDisplay = ({ titleCards, deleteCard, fetchAndUpdateTitles, handleAccessDataClick}) => {

  const boxes = [];
  titleCards.forEach((cards, i) => {
    boxes.push(
      <TitleCard
        id={i}
        key={'card' + i}
        title={cards}
        deleteCard={deleteCard}
        handleAccessDataClick={handleAccessDataClick}
      />
    );
  });

  return (
    <div className="displayBox">
      {boxes}
    </div>
  );
};

export default TitlecardsDisplay;