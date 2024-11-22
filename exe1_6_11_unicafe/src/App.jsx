import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <div>
    {text}: {value}
  </div>
);

// a proper place to define a component
const Statistics = (props) => {
  // ...
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad) / (all || 1);
  const positivePercentage = ((good / (all || 1)) * 100).toFixed(1);

  return (
    <div>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>statistics</h1>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positivePercentage}%`} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setall] = useState(0);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
