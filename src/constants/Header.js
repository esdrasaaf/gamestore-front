import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import userIcon from "../assets/images/userIcon.svg"
import marketCart from "../assets/images/marketCart.svg"
import { Link } from "react-router-dom"

export default function Header () {
    return (
        <Container>
            <LogoContainer>
                <Link to={"/home"}>
                    <img src={logo} alt="Logo"/>
                    GameStore
                </Link>
            </LogoContainer>

            <IconsContainer>
                <Link></Link>
                <Link to={"/cart"}><img src={marketCart} alt="MarketCart Icon"/></Link>
                <Link to={"/historic"}><img src={userIcon} alt="User Icon"/></Link>
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

    img { height: 35px; cursor: pointer; }
`