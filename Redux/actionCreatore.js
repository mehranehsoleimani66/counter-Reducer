import { increment, decrement, setZero } from "./actionTypes.js";
const incrementAction = () => {
  return {
    type: increment
  };
};
const decrementAction = () => {
  return {
    type: decrement
  };
};
const setZeroAction = () => {
  return {
    type: setZero
  };
};
export { incrementAction, decrementAction, setZeroAction };
