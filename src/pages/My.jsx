import React, { Component } from 'react';
const ThemeContext = React.createContext('light');

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2> Myooooo </h2> <h2> Myooooo </h2>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}
function Toolbar() {
  return (
    <div>
      <div>Toolbar</div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    // static contextType = ThemeContext;
    render() {
      return <ThemeContext.Consumer>{color => <div>{color}</div>}</ThemeContext.Consumer>;
    }
  }

export default My;
