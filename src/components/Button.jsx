import React from 'react';

function Button(props) {
    console.log(props)
    return (
        <button onClick={()=>{props.onChange(123)}}>
            <em>{props.text}</em>
        </button>
    );
}
export default Button;
