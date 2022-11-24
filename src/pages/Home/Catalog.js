import styled from "styled-components"
import Header from "../../constants/Header"
import EmphasisGameList from "../../components/EmphasisList"
import CatalogList from "../../components/CatalogList"

export default function GamesCatalog () {
    

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
    background-image: linear-gradient(140deg, #5e3594 0, #311e6b 25%, #04043f 50%, #00001a 75%, #000000 100%);    width: 100vw;
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