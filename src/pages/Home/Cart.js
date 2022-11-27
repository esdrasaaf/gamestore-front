import styled from "styled-components";
import Header from "../../constants/Header";
import CartList from "../../components/CartList"

export default function CartPage () {
    const cartItens = [] //Variável de teste, trocar pelo array de jogos adicionados no carrinho

    return (
        <Container>
            <Header/>

            {
                cartItens.length === 0 
                    ? 
                <EmptyCart>
                    <h1>Seu Carrinho</h1>
                    <span>
                        Seu carrinho está vazio! Você ainda não adicionou nada aqui!! 
                    </span>
                </EmptyCart>
                    :
                <CartList/>
            }
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
const EmptyCart = styled.div`
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