import styled from "styled-components";
import Header from "../../constants/Header";
import CartList from "../../components/CartList"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/url"
import UserInfoContext from "../../contexts/userInfo"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom";

export default function CartPage () {
    const [cartItens, setCartItens] = useState([])
    const { config } = useContext(UserInfoContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/cart`, config)

        promisse.then((res) => {
            setCartItens(res.data)
        })

        promisse.catch((err) => {
            console.log(err.response.data)
            swal({
                title: err.response.data,
                text: "Logue novamente, por favor! :)",
                icon: "error"
            })
            navigate("/")
        })
    }, [])

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