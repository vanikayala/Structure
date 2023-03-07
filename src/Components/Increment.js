import React, { useReducer } from 'react';


const initialState = { count: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };

    case 'decrement':
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}
const Increment = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <center>
        Count: {state.count}
        <div>
          <button onClick={() => dispatch({ type: 'decrement' })} className="bt btn btn-warning btn-sm">Decrement- </button>
          <button onClick={() => dispatch({ type: 'increment' })} className="bts btn btn-warning btn-sm">Increment+ </button>
        </div>
      </center>

    </div>
  )
}

export default Increment