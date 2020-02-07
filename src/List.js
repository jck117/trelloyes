import React from 'react';
import './List.css';
import Card from './Card';

//function provided by Thinkful; returns a random new card
const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2,4);
    return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum'
    }
}


function List(props){   
    return (
        <section className="List">
            <header className="List-header">
                <h2> {props.header} </h2>
            </header>    
            <div className="List-cards">
                {/* Card Component */}
                {    
                    props.cards.map(card => 
                        < Card title={card.title}
                            content={card.content}
                            key={card.id}
                            cardKey={card.id}
                            onDeleteCard ={props.onDeleteCard} 
                        />
                    )
                }
                {/* + Add Random Card Button */}
                <button type="button" className="List-add-button" onClick={()=>{props.onRandomCard(props.listKey, newRandomCard())}}>
                    + Add Random Card
                </button>    
             </div>    
        </section>    
    )
}

export default List;




/* Thinkful Solution

import React from 'react';
import Card from './Card'
import './List.css';
export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}





*/

