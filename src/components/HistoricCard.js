import styled from "styled-components"

export default function HistoricCard ({ arr }) {
    return (
        <Historic>
            {
                arr.map((item, idx) => {
                return <HistoricItem key={idx}>
                            <img src={item.game.image} alt="Banner"/>
                            {item.game.name}
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.game.price)}</span>
                        </HistoricItem>
                })
            }
        </Historic>
    )
}

//Styled Components
const Historic = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 30%);
    gap: 25px;

    img {
        border-radius: 5px;
        width: 60px;
        margin-right: 25px;
    }
`
const HistoricItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`