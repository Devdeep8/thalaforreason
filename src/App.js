import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the sum of input values
    const sum = inputValue
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);

    if (sum === 7) {
      setMessage('Thala for a reason');
      setShowVideo(true);
    } else {
      setMessage('');
      setShowVideo(false);
    }
  };

  return (
    <div className="App">
      <h1>React Video App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input Value:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      {showVideo && (
        <div>
          <video width="560" height="315" autoPlay controls>
            <source src="thala.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;
