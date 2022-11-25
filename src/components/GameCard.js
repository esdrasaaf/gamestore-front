import { Link } from "react-router-dom"
import styled from "styled-components"

export default function GameCard ({ id, image}) {
    return (
        <GameContent>
            <Link to={`/home/${id}`}><img src={image} alt="Banner Game"/></Link>
        </GameContent>
    )
}

//Styled Componentse
const GameContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 230px;
        width: 160px;
        cursor: pointer;
    }
`