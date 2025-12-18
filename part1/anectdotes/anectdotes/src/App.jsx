import { useState } from 'react'

const Display = ({text}) => (
  <div>{text}</div>
)

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {

  const randInt = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
    console.log(selected)
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  console.log(anecdotes.length)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  console.log("votes", votes)

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]}></Display>
      <p>has {votes[selected]} votes</p>
      <Button text="next anecdote" onClick = {randInt}></Button> <Button text="vote" onClick = {handleVotes}></Button>

      <h1>Anecdote with the most votes</h1>
      <Display text={anecdotes[mostVoted]}></Display>

    </div>
  )
}


export default App