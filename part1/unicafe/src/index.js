import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistic = ({ result, text }) => {
  if (isNaN(result)) {
    return <tr><td>no feedback given</td></tr>
  }

  return <tr><td>{text} </td><td>{result}</td></tr>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic result={good} text="good" />
          <Statistic result={neutral} text="neutral" />
          <Statistic result={bad} text="bad" />
          <Statistic result={all} text="all" />
          <Statistic result={average} text="average" />
          <Statistic result={positive} text="positive" />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
