import { Container, Logo, SingUpInforContainer, StyledLink } from "./signUpStyle"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../constants/url";
import axios from "axios";
import logoGameStore from '../../../assets/images/GameStoreLogo.png'
import swal from "sweetalert";


export default function SignUp() {

    let navigate = useNavigate();

    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    function handleSignUp(e) {
        const { name, value } = e.target;
        setUserSignUp({ ...userSignUp, [name]: value })
    }

    function signUp(e) {
        e.preventDefault();
        axios.post(`${BASE_URL}/signup`, userSignUp)
            .then((res) => {
                alert("Cadastro feito com sucesso!!!");
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                swal({
                    title: err.response.data,
                    icon: "error"
                })
            })
    }


    return (
        <Container>
            <Logo> <img src={logoGameStore} alt="Logo"></img></Logo>
            <SingUpInforContainer onSubmit={signUp}>
                <input placeholder="Nome" type="text" name="name" value={userSignUp.name} onChange={handleSignUp} required></input>
                <input placeholder="Email" type="email" name="email" value={userSignUp.email} onChange={handleSignUp} required></input>
                <input placeholder="Senha" type="password" name="password" value={userSignUp.password} onChange={handleSignUp} required></input>
                <input placeholder="Confirme a senha" type="password" name="passwordConfirmation" value={userSignUp.passwordConfirmation} onChange={handleSignUp} required></input>
                <button type="submit"><span></span><span></span><span></span><span></span>Cadastrar</button>
                <StyledLink to={'/'}><h1>Já tem uma conta? Entre agora!</h1></StyledLink >
            </SingUpInforContainer>
        </Container>
    )
}