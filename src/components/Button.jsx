import React from 'react';
import PropTypes from 'prop-types';
// const ThemeContext = React.createContext('light');
function Button(props) {
    console.log(props)
    // const contextType = React.createContext('light');
    // console.log(this.context)
    return (
        <button onClick={()=>{props.onChange(123)}}>
            <em>{props.text} {props.title}</em>
        </button>
    );
}

Button.propTypes={
    text:PropTypes.string.isRequired,
    // deleteItem:PropTypes.func,
    // text:PropTypes.number
}
Button.defaultProps = {
    title:'ddddd'
}
export default Button;


