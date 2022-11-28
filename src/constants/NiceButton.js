import { useContext } from "react"
import styled from "styled-components"
import swal from "sweetalert"
import axios from "axios"
import BASE_URL from "./url"
import { UserInfoContext } from "../contexts/userInfo"


export default function NiceButton ({ content, game, purchases, setStatus }) {
    const { config } = useContext(UserInfoContext)
    

    function verifyContent () {
        if (content === "Adicionar ao Carrinho") {
            const promisse = axios.post(`${BASE_URL}/cart`, game, config)

            promisse.then(() => {
                swal({
                    title: "Item adicionado ao carrinho com sucesso!",
                    icon: "success"
                })
            })

            promisse.catch((err) => {
                console.log(err)
            })
        }

        if (content === "Confirmar Compra") {
            const promisse = axios.post(`${BASE_URL}/historic`, purchases, config)

            promisse.then((res) => {
                swal({
                    title: res.data,
                    icon: "success"
                })
                setStatus([])
            })

            promisse.catch((err) => {
                console.log(err)
            })
        }

        if (content === "Adicionar aos Favoritos") {
            swal({
                title: "Item adicionado aos favoritos com sucesso!",
                icon: "success"
            })            
        }
    }

    return (
        <Button onClick={verifyContent}>{content}</Button>
    )
}

// Styled Components //
const Button = styled.button `
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    &:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }
    &:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
`