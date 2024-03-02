import {
  decrementAction,
  incrementAction,
  setZeroAction
} from "../Redux/actionCreatore.js";
import { increment, decrement, setZero } from "../Redux/actionTypes.js";

const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

// Declare Counter Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case increment: {
      return state + 1;
    }
    case decrement: {
      return state - 1;
    }
    case setZero: {
      return state - state;
    }
    default: {
      return state;
    }
  }
};
console.log(Redux);
const store = Redux.createStore(counterReducer);

decBtn.addEventListener("click", () => {
  store.dispatch(decrementAction());
  const newValue = store.getState();
  numberElem.innerHTML = newValue;
});
incBtn.addEventListener("click", () => {
  store.dispatch(incrementAction());
  const newValue = store.getState();
  numberElem.innerHTML = newValue;
});
resetBtn.addEventListener("click", () => {
  store.dispatch(setZeroAction());
  const newValue = store.getState();
  numberElem.innerHTML = newValue;
});
