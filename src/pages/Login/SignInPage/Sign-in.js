import { Container, Logo, UserLoginInforContainer, StyledLink } from "./SignInStyle"
import { UserInfoContext } from "../../../contexts/userInfo";
import React from "react";
import BASE_URL from "../../../constants/url";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import logoGameStore from '../../../assets/images/GameStoreLogo.png'


export default function SignIn() {

    const { logInObj, setLogInObj, setUserInfo } = React.useContext(UserInfoContext);
    let navigate = useNavigate();

    function handleLogIn(e) {
        const { name, value } = e.target
        setLogInObj({ ...logInObj, [name]: value })
    }

    function logIn(e) {
        e.preventDefault();
        axios.post(`${BASE_URL}/signin`, logInObj)
            .then((res) => {
                setUserInfo({
                    token: (res.data.token),
                    name: (res.data.name)
                })
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.name)

                navigate("/home")
            })
            .catch((err) => swal({
                title: err.response.data,
                icon: "error"
            }))
    }
    return (
        <Container>
            <Logo> <img src={logoGameStore} alt="Logo"></img></Logo>
            <UserLoginInforContainer onSubmit={logIn}>
                <input placeholder="E-mail" type="email" name="email" value={logInObj.email} onChange={handleLogIn} required ></input>
                <input placeholder="Senha" type="password" name="password" value={logInObj.password} onChange={handleLogIn} required ></input>
                <button type="submit"><span></span> <span></span><span></span><span></span> Entrar </button>
                <StyledLink to={"/sign-up"}><h1>Primeira vez? Cadastre-se!</h1></StyledLink>
            </UserLoginInforContainer>

        </Container>
    )
}


