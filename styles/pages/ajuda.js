import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;

.accordion{
    width: 70%;
}
@media(max-width: 1200px) {
    .accordion{
    width: 98%;
}

}
`