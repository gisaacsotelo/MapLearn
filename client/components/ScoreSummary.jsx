import React from 'react'

function ScoreSummary({ score, resetGame }) {

let summary;

if (score <= 2) {
  summary = 'Really?'
} else if (score <= 5) {
  summary = 'You can do better'
} else if (score <= 7) {
  summary = 'Good job, but keep practising!'
} else {
  summary = 'Well done!'
}

  return (
    <div className='score-summary'>
      
      <h2>RESULTS</h2>
      <h3>{score}/10</h3>
      {summary && <h3>{summary}</h3>}
      <button onClick={resetGame} className='gameover-btn button-38'>Play again</button>
    </div>
  )
}

export default ScoreSummary