import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
color: #9b9b9b;
margin-top: 30px;



.MenuForms{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
}
.BtnForm{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFF;
    border-radius: 15px;
    border: #9b9b9b solid;
    width: 220px;
    height: 150px;
    margin-inline: 20px;
    cursor: pointer;
}
.BtnForm:hover{
    background:#00457A;
    color: #FFF;
    transform: scale(1.1);
    transition: 0.5s;
    border: #FFF solid;
}
.BtnForm:active{
    background:#9b9b9b;
}


.BtnForm h2{
    margin-top: 20px;
}

@media(max-width: 1000px) {
    .MenuForms{
    display: flex;
    flex-wrap: wrap;
    
}
.BtnForm{
   margin-top: 20px;
   margin-inline: 20px;
}
}

`;
