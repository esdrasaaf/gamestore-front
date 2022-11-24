import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import userIcon from "../assets/images/userIcon.svg"
import marketCart from "../assets/images/marketCart.svg"

export default function Header () {
    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo"/>
                <h1>GameStore</h1>
            </LogoContainer>

            <IconsContainer>
                <img src={marketCart} alt="MarketCart Icon"/>
                <img src={userIcon} alt="User Icon"/>
            </IconsContainer>
        </Container>
    )
}

//Styled Components
const Container = styled.header`
    height: 59px;
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
    gap: 5px;
    padding: 0px 12px;
    font-family: 'Red Hat Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #FFFAFA;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
`
const IconsContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0px 12px;
`