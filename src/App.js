import React from 'react';
import List from './List';
import './App.css';
import STORE from './store';

//a function provided by Thinkful to remove key-value pairs from an object & return a new object
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key,value]) =>
      key === keyToOmit ?  newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {
  state = { store: STORE };

  /* event handler function ------------------------------------------------------- */
  handleDeleteCard = (cardId) => {
    
    const {lists, allCards} = this.state.store; //same as STORE.lists & STORE.allCards
  
    //new lists array with card removed from cardIds of each lists element
    const new_lists = lists.map(list => ({...list, cardIds: list.cardIds.filter(id => id !== cardId)})); 
   
    //delete the card from allCards
    const newCards = omit(allCards, cardId);
   
    //update the state
    this.setState({store: {lists: new_lists, allCards: newCards}}); 
  }


  /* event handler function ------------------------------------------------------- */
  handleAddRandomCard = (listId, newObject) => {
    const {lists, allCards} = this.state.store;
    /* -- for updating cardIds -- */
    //find the desired lists element by matching lists element id
    let targetListsElement = lists.find(obj => obj.id === listId);
    //update that lists element's cardIds array with new card added
    targetListsElement.cardIds.push(newObject.id);

    /* -- for updating allCards -- */
    //set updated_allCards to capture current state of allCards in a variable 
    let updated_allCards =  allCards;
    //add new key-value pair to updated_allCards
    updated_allCards[newObject.id] = newObject;
    //update the state
    this.setState({store: {lists: lists, allCards:  updated_allCards}});
  }


  render(){
    const {store} = this.state; //same as this.state.store
    console.log(store)
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        
        <div className="App-list">
          {/* List Component */}
          {
            store.lists.map(listItem => 
              <List header = {listItem.header}
                    cards = {listItem.cardIds.map(letter => ({id: letter, title: store.allCards[letter].title, content: store.allCards[letter].content}))}
                    //could have also done:
                    //cards = {listItem.cardIds.map(letter => store.allCards[letter])} 
                    key = {listItem.id}
                    listKey = {listItem.id}
                    onRandomCard = {this.handleAddRandomCard}
                    onDeleteCard = {this.handleDeleteCard}    
              />
            )
          }   
        </div>
      </main>
    )

  }
}  


export default App;



/* Thinkful Solution

import React, { Component } from 'react'
import List from './List'
import STORE from './store'
import './App.css'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
      return {
              ...list,
              cardIds: [...list.cardIds, newCard.id]
            };
          }
          return list;
        })

        this.setState({
          store: {
            lists: newLists,
            allCards: {
              ...this.state.store.allCards,
              [newCard.id]: newCard
            }
          }
        })
  };

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;








*/
