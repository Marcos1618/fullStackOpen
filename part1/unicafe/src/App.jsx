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
  console.log({good, neutral, bad})

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {() => setGoodTo(good+1)} text = 'Good'></Button>
      <Button onClick = {() => setNeutralTo(neutral+1)} text='Neutral'></Button>
      <Button onClick = {() => setBadTo(bad+1)} text='Bad'></Button>
      <h1>Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>{text}</button>
)

const Display = ({text, value, unit}) => (
  <div>{text}{value}{unit}</div>
)

const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral > 0 || bad > 0){ 
    return  (
      <div>
        <StatisticLine text="Good " value={good}></StatisticLine>
        <StatisticLine text="Neutral " value={neutral}></StatisticLine>
        <StatisticLine text="Bad " value={bad}></StatisticLine>
        <StatisticLine text="All  " value={good + bad + neutral}></StatisticLine>
        <StatisticLine text="Average " value={(((good*1)+(bad*-1))/(good+neutral+bad))}></StatisticLine>
        <StatisticLine text="Percentage " value={((good)/(good+neutral+bad))*100} unit="%"></StatisticLine>
      </div>
    )
  }
  else{
    return <p>No feedback given</p>
  }
}

const StatisticLine = ({text, value, unit}) => (
  <Display text={text} value={value} unit={unit}></Display>
)

export default App