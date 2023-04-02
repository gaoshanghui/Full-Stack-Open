import { useState } from 'react'

const Button = ({label, handleClick}) => <button onClick={handleClick}>{label}</button>

const StatisticLine = ({label, score}) => {
  return (
    <tr>
      <th>{label}</th>
      <td>{score}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given.</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine label="Good" score={good} />
        <StatisticLine label="Neutral" score={neutral} />
        <StatisticLine label="Bad" score={bad} />
        <StatisticLine label="All" score={all} />
        <StatisticLine label="Average" score={all / (good + neutral + bad)} />
        <StatisticLine label="Positive" score={good / (good + neutral + bad) + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
    setTotalScore(totalScore + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
    setTotalScore(totalScore + 0)
  }

  const setToBad = () => {
    setBad(bad + 1)
    setTotalScore(totalScore -1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="GOOD" handleClick={setToGood}/>
      <Button label="NEUTRAL" handleClick={setToNeutral}/>
      <Button label="BAD" handleClick={setToBad}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={totalScore} />
    </div>
  )
}

export default App