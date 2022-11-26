import styled from "styled-components";

export default function CartPage () {
    const cartItens = [1, 2, 3]

    return (
        <Container>
            {cartItens.length === 0 
                ? 
            <div>VOCE AINDA N ADICIONOU NADA NO CARRINHO</div> 
                : 
            <ul>
                {cartItens.map((e) => {
                    return <li key={e}>produtooo</li>
                })}
            </ul>
            }
        </Container>
    )
}

//Styled Components
const Container = styled.div`
`