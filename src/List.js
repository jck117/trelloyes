import React from 'react';
import './List.css';
import Card from './Card';

function List(props){
    console.log(props.cards);
    return (
        <section className="List">
            <header className="List-header">
                <h2> {props.header} </h2>
            </header>    

            <div className="List-cards">
                {/* Card Component */}
                {    
                    props.cards.map(object => 
                        < Card title={object.title}
                            content={object.content}
                            key={object.id}
                        />
                    )
                }
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>           
             </div>    
        </section>    
    )
}

export default List;





