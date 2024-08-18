import React from 'react';

const Button = (porps) => {
    return (
        <button {...porps} className={'button ' + props.className}/>
    );
};

export default Button;