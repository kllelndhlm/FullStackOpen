import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  
  const handleGoodClick = () => {
    setGood(good + 1)
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
      <h1>statistics</h1>
      good {good}
      <br/>
      neutral {neutral}
      <br/>
      bad {bad}
      <br/>
      all {good + neutral + bad}
      <br/>
      average {(good * 1 + bad * (-1)) / (good + neutral + bad)}
      <br/>
      positive {100 * good / (good + neutral + bad) } %
    </div>
  )
}

export default App