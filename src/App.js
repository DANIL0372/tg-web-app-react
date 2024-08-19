import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import header from "./components/header/header"
import {Route, Routes} from 'react-router-dom'
import Produdctlist from "./components/productlist/productlist";
import Form from "./components/form/form"

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <header />
            <Routes>
                <Route index element={<Produdctlist/>}/>
                <Route path={'form'} element={<Form />}/>
                {/*<Route path={'productlist'} element={<Produdctlist />}/>*/}
            </Routes>
        </div>
    );
}

export default App;
