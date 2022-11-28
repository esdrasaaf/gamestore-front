import styled from "styled-components"
import HistoricCard from "./HistoricCard"

export default function HistoricList ({ historic }) {
    const list = []

    historic.map((h) => { 
        return list.push(h.gameArray)
    })

    console.log(list)

    return (
        <Container>
            <h1>Seu Histórico</h1>
            <AllHistorics>
                {
                    list.map((l, idx) => {
                        return <HistoricCard key={idx} arr={l}/>
                    })
                }
            </AllHistorics>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
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
`
const AllHistorics = styled.div`
    background-color: rgba(0, 0, 0, 20%);
    height: 70vh;
    margin-top: 20px;
    font-size: 25px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    overflow-y: auto;

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