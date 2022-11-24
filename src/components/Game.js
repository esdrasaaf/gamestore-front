import styled from "styled-components"

export default function GameCard ({ name, image}) {
    return (
        <GameContent>
            <img src={image} alt="Banner Game"/>
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