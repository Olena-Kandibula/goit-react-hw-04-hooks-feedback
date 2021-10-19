import "./App.css";
import { useEffect, useState } from "react";

import Section from "./components/section";
import FeedbackOptions from "./components/feedbackOptions";
import Statistics from "./components/statistics";
import Notification from "./components/statistics/notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const { name } = e.target;

    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good * 100) / countTotalFeedback();
    return Math.ceil(positiveFeedbackPercentage);
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </div>
  );
}
