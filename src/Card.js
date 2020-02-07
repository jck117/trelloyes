import React from 'react';
import './Card.css';


function Card(props){

    return (
        <div className="Card"> 
        
        {/* Delete Card Button */}
        {/* onClick passes in the card id (e.g. 'a') to props.onDeleteCard() */}
        <button type="button" onClick={() => props.onDeleteCard(props.cardKey)}>delete</button>

        <h3>{props.title}</h3>
        <p>{props.content}</p>
        </div> 
    )
}


export default Card;



/* Thinkful Solution



import React from 'react';
import './Card.css';
export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}



*/

