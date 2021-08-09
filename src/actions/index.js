export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const SET_CURRENT_MEMORY = "SET_CURRENT_MEMORY";
export const APPLY_CURRENT_MEMORY = "APPLY_CURRENT_MEMORY";
export const CLEAR_CURRENT_MEMORY = "CLEAR_CURRENT_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const setCurrMemory = () => {
  return { type: SET_CURRENT_MEMORY };
};

export const applyCurrMemory = () => {
  return { type: APPLY_CURRENT_MEMORY };
};
export const clearyCurrMemory = () => {
  return { type: CLEAR_CURRENT_MEMORY };
};
