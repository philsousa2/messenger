import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
height: 250px;
background: #00457A;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
color: #FFF;
text-align: center;

h3{
    margin-top: 30px; 
}
h4{
    margin-top: 10px; 
}

.linha{
width:60%;
border: 1px solid #FFF;
margin-top: 10px;
}

.texto{
    width: 400px;
}
`