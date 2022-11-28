import styled from "styled-components";
import axios from "axios";
import BASE_URL from "../../constants/url";
import swal from "sweetalert";
import HistoricList from "../../components/HistoricList";
import Header from "../../constants/Header"
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../contexts/userInfo";
import { useNavigate } from "react-router-dom";

export default function HistoricPage () {
    const [historic, setHistoric] = useState([])
    const { config } = useContext(UserInfoContext)
    const navigate = useNavigate()

    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/historic`, config)

        promisse.then((res) => {
             setHistoric(res.data)
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
    }, [config, navigate])

    return (
        <Container>
            <Header/>

            {
                historic.length === 0 
                    ? 
                <EmptyHistoric>
                    <h1>Seu histórico</h1>
                    <span>
                        Você ainda não realizou nenhum pedido!! 
                    </span>
                </EmptyHistoric>
                    :
                <HistoricList historic={historic}/>
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