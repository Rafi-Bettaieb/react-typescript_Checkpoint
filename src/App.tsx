import React, { useState } from 'react';
import './App.css';
import Counter from './code2';
import Greeting from './code1';

function App() {
  // State to hold the name input value
  const [name, setName] = useState<string>('');

  // Handler for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  //prevent the page from rerendering when reloading the page
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input 
            type="text" 
            value={name} 
            onChange={handleInputChange} 
            placeholder="Enter your name" 
          />
        </label>
      </form>
      <Greeting name={name} />
      <Counter />
    </div>
  );
}

export default App;
