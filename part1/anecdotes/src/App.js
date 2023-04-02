import { useState } from 'react'

const Button = ({handleClick, label}) => {
  return <button onClick={handleClick}>{label}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))  // Create an array that has length of the anecdotes. All items are 0.
  const [mostVoted, setMostVoted] = useState(0)

  const updatePoints = (index) => {
    // Update points
    const newPoints = [...points]
    newPoints[index] = newPoints[index] + 1
    setPoints(newPoints)

    // Update most voted item
    const mostVotedItemIndex = newPoints.indexOf(Math.max(...newPoints))
    setMostVoted(mostVotedItemIndex)
  }

  const setSelectedIndex = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  return (
    <div>
      <h1>Anecdot of the day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <div>
        <Button handleClick={setSelectedIndex} label="Generate"/>
        <Button handleClick={() => {updatePoints(selected)}} label="Vote" />
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>Has {points[mostVoted]} votes</p>
    </div>
  )
}

export default App