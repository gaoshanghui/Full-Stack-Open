import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  // Generate a random number and change selected state.
  const nextAnecdote = () => {
    const maxNumber = anecdotes.length;
    const nextNumber = Math.floor(Math.random() * maxNumber);

    setSelected(nextNumber);
  }

  // handle vote button
  const vote = () => {
    const currentSelected = selected;
    const newPoints = [...points];

    newPoints[currentSelected] += 1;
    setPoints(newPoints);
  }

  // Generate a number that is used as the most voted item's index number.
  const getMostVotedIndex = () => {
    let basePoint = points[0];
    let mostVotedItemIndex = 0;

    for (let i = 1; i < points.length; i++) {
      if (points[i] > basePoint) {
        mostVotedItemIndex = i;
        basePoint = points[i];
      }
    }

    return mostVotedItemIndex;
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <Button handleClick={vote} text="vote" />
        <Button handleClick={nextAnecdote} text="next anecdote" />
      </div>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[getMostVotedIndex()]}</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)