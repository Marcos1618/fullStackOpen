import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setGoodTo = (newValue) => {
    console.log('good set to', newValue)
    setGood(newValue)
  }

  const setNeutralTo = (newValue) => {
    console.log('neutral set to', newValue)
    setNeutral(newValue)
  }

  const setBadTo = (newValue) => {
    console.log('bad set to', newValue)
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {() => setGoodTo(good+1)} text = 'Good'></Button>
      <Button onClick = {() => setNeutralTo(neutral+1)} text='Nuetral'></Button>
      <Button onClick = {() => setBadTo(bad+1)} text='Bad'></Button>

      <h1>Statistics</h1>
      <Display text="Good " value={good}></Display>
      <Display text="Neutral " value={neutral}></Display>
      <Display text="Bad " value={bad}></Display>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>{text}</button>
)

const Display = ({text, value}) => (
  <div>{text}{value}</div>
)

export default App