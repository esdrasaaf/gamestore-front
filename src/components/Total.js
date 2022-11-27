import styled from "styled-components"

export default function Total ({ purchases }) {
    let total = 0

    purchases.map((p) => {
        return total += p.game.price
    })

    return (
        <Container>
            <span>Total a pagar: </span>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    background-color: rgba(0, 0, 0, 20%);
    margin-top: 20px;
    padding: 20px 30px;
    font-family: 'Red Hat Display', 'cursive';
    font-size: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
`