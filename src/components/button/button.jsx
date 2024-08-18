import React from 'react';
import './button.css';

const Button = (porps) => {
    return (
        <button {...porps} className={'button ' + props.className}/>
    );
};

export default Button;