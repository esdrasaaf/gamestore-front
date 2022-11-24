import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import GameCard from "./Game"
import BASE_URL from "../constants/url"

export default function CatalogList () {
    const [games, setGames] = useState([])

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/games`)

        promisse.then((res) => {
            setGames(res.data)
        })

        promisse.catch((err) => {
            console.log(err.data)
        })
    }, [])

    return (
        <GameList>
            {games.map((g) => {
                if (!g.emphasis) {
                    return <GameCard key={g._id} image={g.image} name={g.name}/>
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
`