import React from "react";
import Questions from "./Questions";
const QuestionList = ({questionsList}) => {
  let i=0
  return (
    <>
      {questionsList.map((question) => (
        <Questions question={question} key={i++} />
      ))}
    </>
  );
};

export default QuestionList;
