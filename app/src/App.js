import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople ] = useState(data)
  
  function addButtonHandler(){
    setPeople([])
  }
  return (
  <main>
    <section className="container">
    <h3> {people.length} birthdays today</h3>
      <List people={people}/>

      <div>
      <button onClick={()=>addButtonHandler()}>
        Clear All
      </button>
      </div>
      
    </section>
  </main>
    )
}

export default App;
