import { Container, Logo, UserLoginInforContainer, StyledLink } from "./SignInStyle"
import { UserInfoContext } from "../../../contexts/userInfo";
import React from "react";
import BASE_URL from "../../../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignIn() {

    const { logInObj, setLogInObj, setUserInfo } = React.useContext(UserInfoContext);
    let navigate = useNavigate();

    function handleLogIn(e) {
        const { name, value } = e.target
        setLogInObj({ ...logInObj, [name]: value })
    }

    function logIn(e) {
        e.preventDefault();
        axios.post(`${BASE_URL}/sigin`, logInObj)
            .then((res) => {
                setUserInfo({
                    token: (res.data.token),
                    name: (res.data.name)
                })
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.name)

                navigate("/home")
            })
            .catch((err) => alert(err.response.data))
    }
    return (
        <Container>
            <Logo> Aqui vai a logo</Logo>
            <UserLoginInforContainer onSubmit={logIn}>
                <input placeholder="E-mail" type="email" name="email" value={logInObj.email} onChange={handleLogIn} required ></input>
                <input placeholder="Senha" type="password" name="password" value={logInObj.password} onChange={handleLogIn} required ></input>
                <button><span></span> <span></span><span></span><span></span> Entrar </button>
                <StyledLink><h1>Primeira vez? Cadastre-se!</h1></StyledLink>
            </UserLoginInforContainer>

        </Container>
    )
}


