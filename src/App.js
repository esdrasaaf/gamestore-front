import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from "./assets/styles/GlobalStyle";
import GamesCatalog from "./pages/Home/Catalog";
import SignIn from './pages/Login/Sign-in'
import SignUp from './pages/Login/Sign-up'


export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/home" element={<GamesCatalog/>}/>
            </Routes>
        </BrowserRouter>
    )
}