import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    console.log(props)
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


