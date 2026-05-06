import React from 'react';
import Child from './child';

const App = () => {
  return (
    <div>
      <h1>This is Multi Props(Parent)</h1>
      <Child name="kajalti" age={22} city="Betul"/>
    </div>
  )
}

export default App
