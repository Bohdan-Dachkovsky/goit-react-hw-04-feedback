import React from 'react';
import Statistics from './components/Statistics.jsx';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Section from './components/Section.jsx';
import Notification from './components/Notification.jsx';
import SuccessFeedback from './components/SuccessFeedback.jsx';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  // const  onLeaveFeedback = e => {
  //     const name = e.target.name;
  //     console.log(name);
  //     this.setState(prevState => ({
  //       [name]: prevState[name] + 1,
  //     }));
  //   };

  const { good, neutral, bad } = this.state;
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  const positivePercentage = countPositiveFeedbackPercentage();

  const objKey = Object.keys(this.state);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objKey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      {total > 0 ? <SuccessFeedback SuccessResult={percentage} /> : null}
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
};

export default App;
