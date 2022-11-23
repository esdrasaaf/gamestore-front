import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Teste from "./components/Teste";

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Teste/>}/>
            </Routes>
        </BrowserRouter>
    )
}