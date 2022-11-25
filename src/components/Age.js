import styled from "styled-components"

export default function AgeCard ({value}) {
    let background = "gree"

    switch (value) {
        case 18: background = "black"; break;
        case 16: background = "red"; break;
        case 14: background = "orange"; break;
        case 12: background = "yellow"; break;
        case 10: background = "cyan"; break;
        case "Livre": background = "green"; value = "L"; break;
        default : break;
     }

    return (
        <Age background={background}>{value}</Age>
    )
}

//Styled Components
const Age = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: ${props => props.background};
    color: white;
    border-radius: 5px;
`