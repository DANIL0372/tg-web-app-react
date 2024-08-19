import React from 'react';
import button from "../button/button";
import './productitem.css';

const Productitem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </button>
        </div>
    );
};

export default Productitem;