
import React, { useState } from 'react';
import Questionchoice from './Questionchoice';

const QuestionBox = ({ questions, query, selectchoice }) => {
  const [highlight, setHighlight] = useState(false);
  const [customColor, setCustomColor] = useState('');

  const highlightHandler = () => {
    setHighlight(true);
    setCustomColor('red');
  };

  const RemoveHighlightHandler = () => {
    setHighlight(false);
    setCustomColor('blue');
  };
  return (
     
    <>
      <div>
        <h1>Kalvium</h1>
      </div>
      <div className='questionbox'>
       <div className={`Body ${highlight ? 'highlighted' : ''}`}>
          <h1>
          Question: {query + 1} out of {questions.length}
          </h1>
          <h2 style={{ color: customColor }}>{questions[query].text}</h2>
          <Questionchoice options={questions[query].options} selectchoice={selectchoice} />
          <button className="btn btn-slide-1" onClick={highlightHandler}>Highlight</button>
          <button className="btn btn-slide-2" onClick={RemoveHighlightHandler}>Remove Highlight</button>
        </div>
         </div>
    </>
  );
};

export default QuestionBox;




