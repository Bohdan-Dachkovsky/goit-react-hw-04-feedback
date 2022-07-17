import { useState } from 'react';
import Statistics from './components/Statistics.jsx';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Section from './components/Section.jsx';
import Notification from './components/Notification.jsx';
import SuccessFeedback from './components/SuccessFeedback.jsx';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { bad, good, neutral } = state;
    const result = bad + neutral + good;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const { good } = state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const onLeaveFeedback = e => {
    const name = e.target.name;
    setState(prevState => ({
      ...state,
      [name]: prevState[name] + 1,
    }));
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  const positivePercentage = countPositiveFeedbackPercentage();

  const objKey = Object.keys(state);
  console.log(objKey);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
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
