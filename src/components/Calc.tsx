import React, { useReducer } from 'react';

const initialState = {
  firstNumber: '',
  secondNumber: '',
  result: null,
  color: 'black',
};

function reducer(state: any, action: any) {
  const first = Number(state.firstNumber);
  const second = Number(state.secondNumber);
  let result = 0;

  switch (action.type) {
    case 'UPDATE_FIRST':
      return { ...state, firstNumber: action.payload };
    case 'UPDATE_SECOND':
      return { ...state, secondNumber: action.payload };

    case 'ADDITION':
      result = first + second;
      return {
        ...state,
        result: result,
        color: result < 0 ? 'red' : 'black',
      };

    case 'SUBTRACTION':
      result = first - second;
      return {
        ...state,
        result: result,
        color: result < 0 ? 'red' : 'black',
      };

    case 'MULTIPLICATION':
      result = first * second;
      return {
        ...state,
        result: result,
        color: result < 0 ? 'red' : 'black',
      };

    case 'DIVISION':
      result = first / second;
      return {
        ...state,
        result: result,
        color: result < 0 ? 'red' : 'black',
      };

    case 'POWER':
      result = 1;
      for (let i = 0; i < second; i++) {
        result *= first;
      }
      return {
        ...state,
        result: result,
        color: result < 0 ? 'red' : 'black',
      };

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
}

const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calculator">
      <h3>Calculator</h3>
      <label htmlFor="first-number">First Number:</label>
      <input
        id="first-number"
        type="number"
        value={state.firstNumber}
        onChange={(e) => dispatch({ type: 'UPDATE_FIRST', payload: e.target.value })}
      />

      <label htmlFor="second-number">Second Number:</label>
      <input
        id="second-number"
        type="number"
        value={state.secondNumber}
        onChange={(e) => dispatch({ type: 'UPDATE_SECOND', payload: e.target.value })}
      />

      <div>
        <button onClick={() => dispatch({ type: 'ADDITION' })}>+</button>
        <button onClick={() => dispatch({ type: 'SUBTRACTION' })}>-</button>
        <button onClick={() => dispatch({ type: 'MULTIPLICATION' })}>*</button>
        <button onClick={() => dispatch({ type: 'DIVISION' })}>/</button>
        <button onClick={() => dispatch({ type: 'POWER' })}>**</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
      </div>

      <h3 id="output" style={{ color: state.color }}>
        Result: {state.result !== null ? state.result : ''}
      </h3>
    </div>
  );
};

export default Calculator;