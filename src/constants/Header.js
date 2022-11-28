import styled from "styled-components"
import userIcon from "../assets/images/userIcon.svg"
import marketCart from "../assets/images/marketCart.svg"
import { Link, useNavigate } from "react-router-dom"
import LogoGameStore from "../assets/images/GameStoreLogo.png"
import { UserInfoContext } from "../contexts/userInfo"
import { useContext, useEffect, useState } from "react"
import { MdOutlineLogout } from "react-icons/md"
import axios from "axios"
import BASE_URL from "./url"

export default function Header () {
    const { userInfo, setUserInfo, config, att } = useContext(UserInfoContext);
    const navigate = useNavigate()
    const [cartItens, setCartItens] = useState([])

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/cart`, config)

        promisse.then((res) => {
            setCartItens(res.data)
        })

        promisse.catch((err) => {
            console.log(err.response.data)
        })
    }, [config, att])

    function logout () {
        setUserInfo({})
        localStorage.clear()
        navigate("/")
    }

    return (
        <Container>
            <LogoContainer>
                <Link to={"/home"}>
                    <img src={LogoGameStore} alt="Logo"/>
                    <h1>Olá, {userInfo.name}</h1>
                </Link>
            </LogoContainer>

            <IconsContainer>
                <Link to={"/cart"}>
                    <img src={marketCart} alt="MarketCart Icon"/>
                    <h1>{cartItens.length}</h1>
                </Link>
                <Link to={"/historic"}><img src={userIcon} alt="User Icon"/></Link>
                <MdOutlineLogout onClick={logout}/>
            </IconsContainer>
        </Container>
    )
}

//Styled Components
const Container = styled.header`
    height: 79px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #000000;
`
const LogoContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;  
    padding: 0px 12px;
    font-family: 'Red Hat Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 26px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 1);

    a {
        gap: 10px;
        text-decoration: none; 
        color: #FFFAFA;
        display: flex;
        justify-content: center;
        align-items: center;    

    img{
        width:100px;
    }
    }
`
const IconsContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0px 20px;
    

    h1 {
        background-color: red;
        color: #FFFAFA;
        font-size: 18px;
        font-weight: bold;
        font-family: "Raleway", cursive;
        border-radius: 10px;
        position: absolute;
        bottom: 60%;
        left: 60%;
        padding: 0px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a { position: relative; }

    img { height: 35px; cursor: pointer; }

    svg { 
        cursor: pointer;
        color: #FFFAFA;
        font-size: 30px;
    }
`