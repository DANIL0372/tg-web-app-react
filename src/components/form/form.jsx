import React, {useEffect} from 'react';
import './form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [coutry, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        th.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if(!street || !coutry) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [coutry, street ]);

    const onChangeCountry = () => {
        setCoutry(e.target.valuee)
    }
    const onChangeCity = () => {
        setCity(e.target.valuee)
    }
    const onChangeStreet = () => {
        setStreet(e.target.valuee)
    }
    const onChangeSubject = () => {
        setSubject(e.target.valuee)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={coutry}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Населёный пункт'}
                value={city}
                onChange={onChangeCity}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;