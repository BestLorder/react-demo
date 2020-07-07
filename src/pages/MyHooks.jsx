// import React, { Component } from "react";

// class My extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h2> Myooooo </h2> <h2> Myooooo </h2>{" "}
//       </div>
//     );
//   }
// }

// export default My;
import React, { useState, useEffect,useContext,useReducer } from 'react';
// import MyButton from '@/components/Button';
const ThemeContext = React.createContext('light');
// import '@/assets/js/fastclick';
const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

function My() {
  const [count, setCount] = useState(10);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(`useEffect=>You clickedtimes`);

    return () => {
      console.log('1111');
    };
  }, []);

  useEffect(() => {
    console.log(`useEffect=>You ${count} clickedtimes`);

    return () => {
      console.log('2');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>

      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedButton() {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    // static contextType = ThemeContext;
    const color = useContext(ThemeContext);
    return <div>{color}</div>;
    // return <ThemeContext.Consumer>{color => <div>{color}</div>}</ThemeContext.Consumer>;
  }
export default My;
