import React from 'react';
import List from './List';
import './App.css';


function App(props) {
  const key_lists = props.store.lists;
  const key_allCards = props.store.allCards;

  /* Test parameters

  console.log(key_allCards);
  console.log(key_allCards['a'].id) //=> a
  console.log(key_allCards['a'].title) //=> First card
  console.log(key_allCards['a'].content) //=> lorem ipsum
  
  const newArray = key_lists[0].cardIds.map(element => 
      ({id: element,
        title: key_allCards[element].title,
        content: key_allCards[element].title})
    );
  
  console.log(newArray);
  */

  return (
    <main className="App">

      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      
      <div className="App-list">
        {/* List Component */}
        <List header={key_lists[0].header} 
              cards={ key_lists[0].cardIds.map(element => ({id: element, title: key_allCards[element].title, content: key_allCards[element].content}))} 
              key={key_lists[0].id} />       
        <List header={key_lists[1].header} 
              cards={ key_lists[1].cardIds.map(element => ({id: element, title: key_allCards[element].title, content: key_allCards[element].content}))} 
              key={key_lists[1].id} />       
        <List header={key_lists[2].header} 
              cards={ key_lists[2].cardIds.map(element => ({id: element, title: key_allCards[element].title, content: key_allCards[element].content}))} 
              key={key_lists[2].id} />       
        <List header={key_lists[3].header} 
              cards={ key_lists[3].cardIds.map(element => ({id: element, title: key_allCards[element].title, content: key_allCards[element].content}))} 
              key={key_lists[3].id} />       
      </div>

    </main>
  )
}

export default App;