import React from 'react';

export default function Result({ count, score, Currquery, Results, len }) {
  const StartAgain = () => {
    count(0);
    Currquery(0);
    Results(false);
  };

  return (
    <div className="results">
      <h1>Final Results</h1>
      <h2>{score} out of {len} correct - ({(score / len) * 100}%)</h2>
      <button className="start" onClick={StartAgain}>Start Again </button>
    </div>
  );
} 