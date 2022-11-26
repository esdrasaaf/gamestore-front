import { Container, Logo, UserLoginInforContainer, StyledLink } from "./SignInStyle"


export default function SignIn() {


    function logIn(){
        
    }

    return (
        <Container>
            <Logo> Aqui vai a logo</Logo>
            <UserLoginInforContainer onSubmit={logIn}>
                <input placeholder="E-mail" type="email" name="email" required ></input>
                <input placeholder="Senha" type="password" name="password" required ></input>
                <button><span></span> <span></span><span></span><span></span> Entrar </button>
                <StyledLink><h1>Primeira vez? Cadastre-se!</h1></StyledLink>
            </UserLoginInforContainer>

        </Container>
    )
}


