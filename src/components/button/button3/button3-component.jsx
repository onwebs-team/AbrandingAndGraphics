import React from 'react';
import './Button3.scss'

function Button(props) {

    const behavior = () => props.work();

    return (
        <div className='button3'>
            <button onClick={behavior}>{props.text}</button>
        </div>
    );
}

export default Button;