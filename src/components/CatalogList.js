import styled from "styled-components"
import GameCard from "./GameCard"
import { GameInfoContext } from "../contexts/gameInfo"
import { useContext } from "react"

export default function CatalogList () {
    const { games } = useContext(GameInfoContext)

    return (
        <GameList>
            {games.map((g, idx) => {
                if (!g.emphasis) {
                    return <GameCard key={idx} image={g.image} id={g._id}/>
                }
            })}
        </GameList>
    )
}

//Styled Components
const GameList = styled.ul`
    display: flex;
    overflow-x: auto;
    gap: 15px;

    &::-webkit-scrollbar {
        display: none;
    }
`