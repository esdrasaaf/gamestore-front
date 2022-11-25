import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameInfoProvider from './contexts/gameInfo';
import GlobalStyle from "./assets/styles/GlobalStyle";
import GamesCatalog from "./pages/Home/Catalog";
import SignIn from './pages/Login/Sign-in'
import SignUp from './pages/Login/Sign-up'
import SelectedGame from './pages/Home/SelectedGame'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <GameInfoProvider>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/home" element={<GamesCatalog/>}/>
                    <Route path="/home/:selectedGameId" element={<SelectedGame/>}/>
                </Routes>
            </GameInfoProvider>
        </BrowserRouter>
    )
}