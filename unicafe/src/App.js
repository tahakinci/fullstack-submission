
import { useState } from "react";

const Buttons = ({ feedBack, name }) => {

  return (
    <button onClick={feedBack}>{name}</button>
  )
}

const Statistics = ({ data, isClicked, }) => {
  if (isClicked) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {data.map(a => <tr key={a.id}><td>{a.text}: {a.result}</td></tr>)}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}





const App = () => {
  const [good, setGood] = useState(0);
  const [netural, setNetural] = useState(0);
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [isClicked, setClicked] = useState(false)

  const handleGood = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
    setClicked(true)
  }

  const handleNetural = () => {
    setAll(allClicks + 1)
    setNetural(netural + 1)
    setClicked(true)
  }

  const handleBad = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    setClicked(true)
  }

  const average = ((good - bad) / (good + bad)).toFixed(2)
  const positive = (((good / allClicks) * 100)).toFixed(2)

  const data = [
    {
      text: "Good",
      result: good,
      id: 1
    },
    {
      text: "Netural",
      result: netural,
      id: 2
    },
    {
      text: "Bad",
      result: bad,
      id: 3
    },
    {
      text: "All",
      result: allClicks,
      id: 4
    },
    {
      text: "Average",
      result: isNaN(average) ? 0 : average,
      id: 5
    },
    {
      text: "Positive",
      result: `${positive} %`,
      id: 6
    },
  ]

  return (
    <div>
      <h2>Give feedback</h2>
      <Buttons feedBack={handleGood} name="Good" />
      <Buttons feedBack={handleNetural} name="Netural" />
      <Buttons feedBack={handleBad} name="Bad" />
      <Statistics data={data} isClicked={isClicked} />
    </div>
  )
}

export default App;
