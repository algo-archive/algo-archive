import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './TitleCard.css'

function TitleCard(props) {
  const { title, deleteCard, handleAccessDataClick } = props;

  return (
    <div className='title-Card'>
    <Button className='title-button' title={title} onClick={handleAccessDataClick} variant="contained">
      {title}
    </Button>
    <Button className='delete-button' title={title} onClick={deleteCard} startIcon={<DeleteIcon />}>
      Delete
    </Button>
  </div>
  );

  // const { title, handleDeleteClick, handleAccessDataClick } = props;

  // return (
  //   <div className='title-Card'>
  //   <Button className='title-button' title={title} onClick={handleAccessDataClick} variant="contained">
  //     {title}
  //   </Button>
  //   <Button className='delete-button' title={title} onClick={handleDeleteClick} startIcon={<DeleteIcon />}>
  //     Delete
  //   </Button>
  // </div>
  // );
}
export default TitleCard;