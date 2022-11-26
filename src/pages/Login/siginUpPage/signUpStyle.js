import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items:center;
`

export const Logo = styled.div`
background-color:gray;
color: #FFFFFF;
margin-top:150px;
margin-bottom:40px;

`
export const SingUpInforContainer = styled.form`
    width:326px;
    display:flex;
    flex-direction:column;
    align-items:center;

    input {
            width:326px;
            height:38px;
            background: #FFFFFF;
            border-radius: 5px;
            border: 1px solid #D5D5D5;
            font-family: 'Raleway';
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            font-style: normal;
            padding-left:16px;
            margin-bottom:13px;
        }
        button {
            margin-bottom:36px;
            display:flex;
            position:relative;
            display:inline-block;
            padding:15px 15px;
            margin: 20px 0;
            color:#c5c5c5;
            font-size:15px;
            text-decoration:none;
            text-transform:uppercase;
            overflow:hidden;
            transition:0.5s;
            letter-spacing:4px;
            border: none;
            outline: none;
            background: #232b59;
    
            
            :hover{
                background-color:#e5e5e5;
                color:#232b59;
                box-shadow:0 0 5px #e5e5e5,
                           0 0 25px #e5e5e5,
                           0 0 50px #e5e5e5,
                           0 0 200px #e5e5e5;
            }
            span {
                position:absolute;
                display:block;
            }

            span:nth-child(1){
                top:0;
                left:-100%;
                width:100%;
                height:2px;
                background:linear-gradient(90deg,transparent,#e5e5e5);
                animation: animate1 1s linear infinite;
            }
            @keyframes animate1 {
                0%{
                        left:-100%;
                }
                50%,100%{
                        left:100%;
                }
            }
            span:nth-child(2){
                top:-100%;
                right:0;
                width:2px;
                height:100%;
                background:linear-gradient(180deg,transparent,#e5e5e5);
                animation: animate2 1s linear infinite;
                animation-delay:0.25s;
            }
            @keyframes animate2 {
                0%{
                        top:-100%;
                }
                50%,100%{
                        top:100%;
                }
            }
            span:nth-child(3){
                bottom:0;
                right:-100%;
                width:100%;
                height:2px;
                background:linear-gradient(270deg,transparent,#e5e5e5);
                animation: animate3 1s linear infinite;
                animation-delay:0.5s;
            }
            @keyframes animate3 {
                0%{
                        right:-100%;
                }
                50%,100%{
                        right:100%;
                }
            }
            span:nth-child(4){
                bottom:-100%;
                left:0;
                width:2px;
                height:100%;
                background:linear-gradient(360deg,transparent,#e5e5e5);
                animation: animate4 1s linear infinite;
                animation-delay:0.75s;
            }
            @keyframes animate4 {
                0%{
                        bottom:-100%;
                }
                50%,100%{
                        bottom:100%;
                }
            }
        }

        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
            font-family: 'Raleway';
           
        }

`
export const StyledLink = styled(Link)`
text-decoration:none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration:none;
}
`