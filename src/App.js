import React from 'react';
import RiddleList from './components/riddleList/RiddleList';
import riddleMock from './mocks/riddleMock';

function App() {
  return (
    <div className="App">
      <RiddleList riddles={riddleMock} />
    </div>
  );
}

export default App;
