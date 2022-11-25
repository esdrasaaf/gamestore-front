import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SelectedGameCard from "../../components/SelectedGameCard"
import axios from "axios"
import BASE_URL from "../../constants/url"

export default function GameInfo () {
    const { selectedGameId } = useParams()
    const [selectedGame, setSelectedGame] = useState([])      
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/games/${selectedGameId}`)

        promisse.then((res) => {
            setSelectedGame(res.data)
        })

        promisse.catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Container>
            <SelectedGameCard 
                image={selectedGame.image} 
                name={selectedGame.name} 
                description={selectedGame.description} 
                category={selectedGame.category} 
                age={selectedGame.age} 
                price={selectedGame.price}
            />
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-image: linear-gradient(140deg, #5e3594 0, #311e6b 25%, #04043f 50%, #00001a 75%, #000000 100%);    width: 100vw;    
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`