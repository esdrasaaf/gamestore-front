import { useContext } from "react"
import { GameInfoContext } from "../contexts/gameInfo"
import GameCard from "./GameCard"
import styled from "styled-components"

export default function EmphasisGameList () {
    const { games } = useContext(GameInfoContext)

    return (
        <GameList>
            {games.map((g, idx) => {
                if (g.emphasis) {
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
        width: 15px;
        padding: 5px;
    }

    &::-webkit-scrollbar-track {
        background: none;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        border-radius: 10px;
        border: 1px solid #ffffff;
    }
`