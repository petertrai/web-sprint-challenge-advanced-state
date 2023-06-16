// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"

export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'

export function moveClockwise() { 
  return ({ type: MOVE_CLOCKWISE })
}

export function moveCounterClockwise() { 
  return ({ type: MOVE_COUNTERCLOCKWISE })
}

export function selectAnswer() { }

export function setMessage() { 
  return { type: SET_INFO_MESSAGE}
}

export function setQuiz() { }

export function inputChange(name, value) { 
  return { type: INPUT_CHANGE, payload: { name, value } }
}
export function resetForm() {
  return ({ type: RESET_FORM })
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(requestBody) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', requestBody)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
