import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.stats[0] + props.stats[1] + props.stats[2] >= 1) {
      return (
        <div>
          <h1>statistics</h1>
          good {props.stats[0]}
          <br/>
          neutral {props.stats[1]}
          <br/>
          bad {props.stats[2]}
          <br/>
          all {props.stats[0] + props.stats[1] + props.stats[2]}
          <br/>
          average {(props.stats[0] * 1 + props.stats[2] * (-1)) / (props.stats[0] + props.stats[1] + props.stats[2])}
          <br/>
          positive {100 * props.stats[0] / (props.stats[0] + props.stats[1] + props.stats[2]) } %
        </div>
      )
    }
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
  )

}

const App = () => {
  
  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setNeutral(neutral)
    setBad(bad)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {handleGoodClick} text="good" />
      <Button handleClick= {handleNeutralClick} text="neutral" />
      <Button handleClick= {handleBadClick} text="bad" />
      <Statistics stats={[good, neutral, bad]}/>
    </div>
  )
}

export default App