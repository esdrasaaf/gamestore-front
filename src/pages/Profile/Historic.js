import styled from "styled-components";
import HistoricList from "../../components/HistoricList";
import Header from "../../constants/Header"

export default function HistoricPage () {
    const arrayTeste = [] //Variável de teste, trocar pelo array de jogos que foram comprados

    return (
        <Container>
            <Header/>

            {
                arrayTeste.length === 0 
                    ? 
                <EmptyHistoric>
                    <h1>Seu histórico</h1>
                    <span>
                        Você ainda não realizou nenhum pedido!! 
                    </span>
                </EmptyHistoric>
                    :
                <HistoricList/>
            }
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
const EmptyHistoric = styled.div`
    margin: 40px auto;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: "Red Hat Display", cursive;
    color: #ffffff;

    h1 {
        margin-left: 20px;
        font-size: 50px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
    }

    span {
        margin-top: 20px;
        background-color: rgba(0, 0, 0, 20%);
        font-size: 25px;
        padding: 20px;
        border-radius: 10px;
    }
` 