import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import header from "./components/header/header"
import {Route, Routes} from 'react-router-dom'
import productlist from "./components/productlist/productlist";
import form from "./components/form/form"

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <header />
            <Routes>
                <Route index element={<productlist />}/>
                <Route path={'form'} element={<form />}/>
                {/*<Route path={'productlist'} element={<Produdctlist />}/>*/}
            </Routes>
        </div>
    );
}

export default App;
