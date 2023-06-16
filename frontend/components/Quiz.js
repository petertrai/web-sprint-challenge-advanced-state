import React from "react";
import { connect } from "react-redux";
import { selectAnswer, fetchQuiz } from "../state/action-creators";
import { useEffect } from "react";
function Quiz(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAnswerClick = (id) => {
    props.selectAnswer(props.quiz.answers[id].answer_id);
  };
  
useEffect(() => {
  props.fetchQuiz()

}, []) 
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">

              <div className={`answer ${props.selectedAnswer === props.quiz.answers[0].answer_id ? 'selected' : ''}`}>
                {props.quiz.answers[0].text}
                <button onClick={() => handleAnswerClick(0)}>{props.selectedAnswer === props.quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}</button>
              </div>

              <div className={`answer ${props.selectedAnswer === props.quiz.answers[1].answer_id ? 'selected' : ''}`}>
              {props.quiz.answers[1].text}
                <button onClick={() => handleAnswerClick(1)}>{props.selectedAnswer === props.quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}</button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit}>
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedAnswer: state.selectedAnswer,
    quiz: state.quiz
  };
};
export default connect(mapStateToProps, { selectAnswer, fetchQuiz })(Quiz);
