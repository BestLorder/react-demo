import React, { Component } from 'react';
class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(color) => <div>{color}</div>}
      </ThemeContext.Consumer>
    );
  }
}
