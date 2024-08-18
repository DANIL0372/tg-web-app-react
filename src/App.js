import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import header from "./components/header/header"
import {Route, Routes} from 'react-router-dom'
import Produdctlist from "./components/productlist/produdctlist";
import Form from "./components/form/form"

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <header />
            <Routes>
                <Route index element={<Produdctlist/>}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
