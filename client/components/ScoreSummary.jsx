import React from 'react'

function ScoreSummary({ score }) {

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
      
      <h1>RESULTS</h1>
      <h2>{score}/10</h2>
      {summary && <h3>{summary}</h3>}

    </div>
  )
}

export default ScoreSummary