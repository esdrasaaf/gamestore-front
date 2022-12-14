import styled from "styled-components"
import Header from "../../constants/Header"
import EmphasisGameList from "../../components/EmphasisList"
import CatalogList from "../../components/CatalogList"
import { useContext, useEffect } from "react"
import { GameInfoContext } from "../../contexts/gameInfo"
import { UserInfoContext } from "../../contexts/userInfo"
import BASE_URL from "../../constants/url"
import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export default function GamesCatalog () {
    const { setGames } = useContext(GameInfoContext)
    const { config } = useContext(UserInfoContext)
    const navigate = useNavigate()

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/games`, config)

        promisse.then((res) => {
            setGames(res.data)
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
    }, [setGames, config, navigate])

    return (
        <Container>
            <Header/>

            <MainContent>
                <EmphasisContent>
                    <h1>Destaques</h1>
                    <EmphasisGameList/>
                </EmphasisContent>

                <CatalogContent>
                    <h1>Catálogo</h1>
                    <CatalogList/>
                </CatalogContent>
            </MainContent>
        </Container>
    )
}

//Styled Components
const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const MainContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 15px;

    h1 {
        font-family: 'Red Hat Display';
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #ffffff;
        margin-bottom: 15px;
        margin-top: 25px;
    }
`
const EmphasisContent = styled.div`
`
const CatalogContent = styled.div`
`