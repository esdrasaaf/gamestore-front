import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import SelectedGameCard from "../../components/SelectedGameCard"
import axios from "axios"
import swal from "sweetalert"
import BASE_URL from "../../constants/url"
import { UserInfoContext } from "../../contexts/userInfo"

export default function GameInfo () {
    const { selectedGameId } = useParams()
    const [selectedGame, setSelectedGame] = useState([])
    const { config } = useContext(UserInfoContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/games/${selectedGameId}`, config)

        promisse.then((res) => {
            setSelectedGame(res.data)
        })

        promisse.catch((err) => {
            console.log(err.response.data)
            swal({
                title: err.response.data,
                text: "Logue novamente, por favor! :)",
                icon: "error"
            })
            navigate("/")
        })
    }, [selectedGameId, config])

    return (
        <Container>
            <SelectedGameCard
                game={selectedGame}
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
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`