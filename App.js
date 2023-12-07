
import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import QuestionChoice from './components/Questionchoice'; // Import QuestionChoice component
import Darkbutton from './components/Darklight';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClick = (isCorrect) => {
    console.log('Option clicked:', isCorrect);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
         
        </>
      ) : (
        <Result
          count={setScore}
          score={score}
          Currquery={setCurrentQuestion}
          Results={setScore}
          len={questions.length}
        />
      )}

     
    </div>
  );
}

export default App;



