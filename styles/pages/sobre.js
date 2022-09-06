import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;

.sobre{
    text-align: justify;
    width: 70%;
    font-size: 15px;
}

h1{   
    color: #00457A;
}
.icon{   
    color: #00457A;
}

@media(max-width: 1200px) {
    .sobre{
    width: 90%;
}
}
`