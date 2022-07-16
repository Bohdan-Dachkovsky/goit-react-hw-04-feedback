import React from 'react';
// import s from './section-style.scc';
const SuccessFeedback = ({ SuccessResult }) => {
  return (
    <>
      <li>
        <p>Feedback: &nbsp; {SuccessResult} %</p>
      </li>
    </>
  );
};
export default SuccessFeedback;
