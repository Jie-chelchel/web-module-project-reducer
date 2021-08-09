import React from "react";
import { useReducer } from "react";
import reducer from "./reducers";
import "./App.css";
import { initialState } from "./reducers";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  clearDisplay,
  CLEAR_DISPLAY,
  SET_CURRENT_MEMORY,
  CLEAR_CURRENT_MEMORY,
  APPLY_CURRENT_MEMORY,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNumber = (number) => {
    dispatch({ type: APPLY_NUMBER, payload: number });
  };

  const changeOperation = (operator) => {
    dispatch({ type: CHANGE_OPERATION, payload: operator });
  };
  const clearDisplay = () => {
    dispatch({ type: CLEAR_DISPLAY });
  };

  const setCurrMemory = () => {
    dispatch({ type: SET_CURRENT_MEMORY });
  };

  const applyCurrMemory = () => {
    dispatch({ type: APPLY_CURRENT_MEMORY });
  };
  const clearCurrMemory = () => {
    dispatch({ type: CLEAR_CURRENT_MEMORY });
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={setCurrMemory} />
              <CalcButton value={"MR"} onClick={applyCurrMemory} />
              <CalcButton value={"MC"} onClick={clearCurrMemory} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                // onClick={() => dispatch({ type: ADD_ONE })}
                onClick={() => applyNumber(1)}
              />
              <CalcButton value={2} onClick={() => applyNumber(2)} />
              <CalcButton value={3} onClick={() => applyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyNumber(4)} />
              <CalcButton value={5} onClick={() => applyNumber(5)} />
              <CalcButton value={6} onClick={() => applyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyNumber(7)} />
              <CalcButton value={8} onClick={() => applyNumber(8)} />
              <CalcButton value={9} onClick={() => applyNumber(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperation("+")} />
              <CalcButton value={"*"} onClick={() => changeOperation("*")} />
              <CalcButton value={"-"} onClick={() => changeOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
