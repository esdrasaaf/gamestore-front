import styled from "styled-components";
import NiceButton from "../constants/NiceButton";
import AgeCard from "./Age";

export default function SelectedGameCard ({ image, name, description, age, price, category}) {

    return (
        <Container>
            <Title>
                <img src={image} alt="Banner"/>
                <span>{name}</span>
            </Title>

            <InfoContainer>
                <Sinopse>
                    <span>{description}</span>
                </Sinopse>

                <Info>
                    <PriceContent>
                        <AgeCard value={age}/>
                        <h1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</h1>
                    </PriceContent>

                    <CategoryList>
                        {typeof(category) === typeof('string')
                            ? 
                                <li>{category}</li>
                            : 
                                category?.map((c, idx) => 
                                    <li key={idx}>
                                        {c}
                                    </li>
                                ) 
                            }
                    </CategoryList>
                </Info>

                <ActionButtons>
                    <NiceButton content={"Adicionar ao Carrinho"}/>
                    <NiceButton content={"Adicionar aos Favoritos"}/>
                </ActionButtons>
            </InfoContainer>
        </Container>
    )
}

//Styled Components
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 20%);
    border-radius: 15px;
    width: 70%;
    height: 70%;
`
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 100%;
    width: 35%;
    gap: 50px;

    img {
        height: 400px;
        width: 300px;
    }

    span {
        font-family: "Red Hat Display", cursive;
        font-size: 30px;
        color: #ffffff;
    }
`
const InfoContainer = styled.div`
    width: 55%;
    font-size: 20px;
    font-family: 'Comfortaa', cursive;
`
const Sinopse = styled.div`
    margin-top: 61px;
    padding: 20px 20px 20px 20px;
    word-break: break-all;
    color: #ffffff;
    line-height: 1.5rem;
    border-radius: 15px;
    background-color: rgba(129, 133, 185, 20%);
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    word-break: break-all;
    gap: 30px;
    color: #ffffff;
`
const CategoryList = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 10px 5px;
`
const PriceContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    color: #ffffff;
`
const ActionButtons = styled.div`
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`