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
.accordion{
    text-align: left;
    color: #00457A;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)
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