useReduce 
    import React, { useState, useReducer } from 'react'
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.css'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count++ }
      break;
    case "decrement":
      return { ...state, count: state.count-- }
      break;
    case "tgColor":
      return { ...state, color: !state.color }
      break;
    case "newInputval":
      return { ...state, inputval: action.payload }
      break;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, inputval: "", color: false });
  return (
    <>
      <main className='App' style={{ color: state.color ? "#FFF" : "#FFF952", background: "#CCC" }}>
        <input type="text" value={state.inputval} onChange={(e) => dispatch({ type: "newInputval", payload: e.target.value })} />
        <div className="counter">
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          {state.count}
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
        <button onClick={() => dispatch({ type: "tgColor" })}>ToggleColor</button>
        <br />
        {state.inputval}
      </main>
    </>
  )
}

export default App
