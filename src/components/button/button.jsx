import React from 'react';
import './button.css';

const button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default button;