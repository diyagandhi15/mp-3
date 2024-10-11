import React, { useState } from 'react';

const AgeRestricted: React.FC = () => {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const checkAge = () => {
    const ageValue = Number(age);

    if (isNaN(ageValue)) {
      setMessage("That isn't a number");
    } else if (ageValue >= 18 && ageValue < 120) {
      setMessage('Welcome');
    } else if (ageValue < 0) {
      setMessage('That number is negative');
    } else if (ageValue % 1 !== 0) {
      setMessage('That number is a decimal');
    } else {
      setMessage('You are not allowed to enter the website');
    }
  };

  return (
    <div className="agerestricted">
      <h3>Age Restricted</h3>
      <label htmlFor="input">How old are you?</label>
      <input
        id="input"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={checkAge}>Check Age</button>
      <h3 id="output1">{message}</h3>
    </div>
  );
};

export default AgeRestricted;