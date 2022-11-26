import styled from "styled-components"
import Header from "../../constants/Header"
import EmphasisGameList from "../../components/EmphasisList"
import CatalogList from "../../components/CatalogList"
import { useContext, useEffect } from "react"
import { GameInfoContext } from "../../contexts/gameInfo"
import BASE_URL from "../../constants/url"
import axios from "axios"

export default function GamesCatalog () {
    const { setGames } = useContext(GameInfoContext)

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/games`)

        promisse.then((res) => {
            setGames(res.data)
        })

        promisse.catch((err) => {
            console.log(err.data)
        })
    }, [setGames])

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