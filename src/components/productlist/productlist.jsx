import React, {useState} from 'react';
import './productlist.css';
import productitem from "../productitem/productitem"
import {useTelegram} from "../../hooks/useTelegram"

const product = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Nike', price: 8000, description: 'Самое пиздатое, что могли придумать в этом мире'},
    {id: '3', title: 'Adidas', price: 2000, description: 'Нормальный конкурент'},
    {id: '4', title: 'Puma', price: 2000, description: 'Ну пойдёт'},
    {id: '5', title: 'Reebok', price: 9000, description: 'Вообще не слышно в последнее время'},
    {id: '6', title: 'Levis', price: 3000, description: 'Одобряю'},
    {id: '7', title: 'Lacoste', price: 6000, description: 'Иди сюда папочка'},
    {id: '8', title: 'Versace', price: 12000, description: 'Для цыганов'},
]
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price
    }, 0)
}

const productlist = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems;

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {product.map(item => (
                <productitem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default productlist;