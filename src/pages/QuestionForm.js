import React, { useState, useEffect } from 'react';

import "../styles/QuestionForm.css";

export default function QuestionForm() {

    const [answer, setAnswer] = useState({});

    useEffect(() => {
      fetch("/").then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(answer => setAnswer(answer));
    }, []);

    return (
      <div className="App">
        <form className="questionForm">
          <label>
            <input type="text" placeholder="Enter your question"/>
            <div className="submit-container">
              <button type="submit">Submit</button>
            </div>      
            </label>
        </form>
        {/* { answer && (
            <div>
              <h2>Answer:</h2>
              <p>{answer}</p>
            </div>
          )} */}
      </div>
    );
  }
  