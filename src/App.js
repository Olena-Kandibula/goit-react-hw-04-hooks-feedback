import "./App.css";
import React, { Component } from "react";

import Section from "./components/section";
import FeedbackOptions from "./components/feedbackOptions";
import Statistics from "./components/statistics";
import Notification from "./components/statistics/notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (nameFeedback) => {
    // console.log (nameFeedback)
    this.setState((prevState) => ({
      [nameFeedback]: prevState[nameFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage = (good * 100) / this.countTotalFeedback();
    return Math.ceil(positiveFeedbackPercentage);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              generateRandomColor={this.generateRandomColor}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default App;
