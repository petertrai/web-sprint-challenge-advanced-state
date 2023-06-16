import React from "react";
import { connect } from "react-redux";
import { resetForm, inputChange, postQuiz } from "../state/action-creators";
// import * as actionCreators from '../state/action-creators'


export function Form(props) {

  const onChange = (e) => {
    const { id, value } = e.target;
    props.inputChange(id, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      question_text: props.newQuestion,
      true_answer_text: props.newTrueAnswer,
      false_answer_text: props.newFalseAnswer,
    };
    props.postQuiz(requestBody);
    props.resetForm()
  };

  const areInputsEmpty = props.newQuestion.trim() === "" || props.newTrueAnswer.trim() === "" || props.newFalseAnswer.trim() === "";


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        value={props.newQuestion}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        value={props.newTrueAnswer}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        value={props.newFalseAnswer}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" disabled={areInputsEmpty}>Submit new quiz</button>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
  };
};

// export default connect((st) => st, { resetForm: actionCreators.resetForm, inputChange: actionCreators.inputChange})(Form);

export default connect(mapStateToProps, { resetForm, inputChange, postQuiz })(Form);
