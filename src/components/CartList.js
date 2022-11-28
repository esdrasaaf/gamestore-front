import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Total from "./Total"
import NiceButton from "../constants/NiceButton"
import TrashButton from "./trashButton"

export default function CartList ({ purchases, setStatus }) {
    const navigate = useNavigate()

    return (
        <Container>
            <h1>Seu Carrinho</h1>
            <PurchaseList>
                {purchases.map((p, idx) => 
                    <PurchaseItem key={idx}>
                        <RightDiv>
                            <img onClick={() => navigate(`/home/${p.game._id}`)} src={p.game.image} alt={"Banner"}/>
                            {p.game.name}
                        </RightDiv>

                        <LeftDiv>
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.game.price)}</span>
                            <TrashButton id={p._id} setStatus={setStatus}/>
                        </LeftDiv>
                    </PurchaseItem>
                )}
            </PurchaseList>

            <ConfirmPurchase>
                <Total purchases={purchases}/>
                <NiceButton purchases={purchases} setStatus={setStatus} content={"Confirmar Compra"}/>
            </ConfirmPurchase>
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
const PurchaseList = styled.ul`
    background-color: rgba(0, 0, 0, 20%);
    height: 50vh;
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
const PurchaseItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 30%);

    img {
        cursor: pointer;
        border-radius: 5px;
        width: 60px;
        margin-right: 25px;
    }
`
const RightDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    svg {
        cursor: pointer;
    }
`
const ConfirmPurchase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`