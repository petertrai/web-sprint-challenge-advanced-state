// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  RESET_FORM,
} from "./action-creators";
const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return state < 5 ? state + 1 : 0;
    case MOVE_COUNTERCLOCKWISE:
      return state > 0 ? state - 1 : 5;
    default:
      return state;
  }
}

// const initialQuizState = null;

// function quiz(state = initialQuizState, action) {
//   return state;
// }

// const initialSelectedAnswerState = null;

// function selectedAnswer(state = initialSelectedAnswerState, action) {
//   return state;
// }

// const initialMessageState = "";

// function infoMessage(state = initialMessageState, action) {
//   return state;
// }

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    case RESET_FORM:
      return {
        ...state,
        newQuestion: "",
        newTrueAnswer: "",
        newFalseAnswer: "",
      };
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  // quiz,
  // selectedAnswer,
  // infoMessage,
  form,
});
