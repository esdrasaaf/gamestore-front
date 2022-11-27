import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameInfoProvider from './contexts/gameInfo';
import GlobalStyle from "./assets/styles/GlobalStyle";
import GamesCatalog from "./pages/Home/Catalog";
import SignIn from './pages/Login/SignInPage/Sign-in'
import SignUp from './pages/Login/siginUpPage/Sign-up';
import SelectedGame from './pages/Home/SelectedGame'
import UserInfoProvider from './contexts/userInfo';
import CartPage from './pages/Home/Cart';
import HistoricPage from './pages/Profile/Historic';

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <UserInfoProvider>
            <GameInfoProvider>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/home" element={<GamesCatalog/>}/>
                    <Route path="/home/:selectedGameId" element={<SelectedGame/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/historic" element={<HistoricPage/>}/>
                </Routes>
            </GameInfoProvider>
            </UserInfoProvider>
        </BrowserRouter>
    )
}