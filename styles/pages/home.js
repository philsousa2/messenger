import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;


.MenuForms{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 100px 0 100px 0; 
}
.BtnForm{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFF;
    border-radius: 15px;
    border: #00457A solid;
    color: #00457A;
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

.servicos{
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #FFF;
padding: 50px 0 50px 0;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,69,122,1) 50%, rgba(2,0,36,1) 100%);
text-align: center;
}
.servicos h3{
    margin-top: 20px
}
.BtnservContianer{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;

}
.Btnserv{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-inline: 50px;
}

.Btnserv:hover{
    color: #9b9b9b;
}

.parceiros{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0 50px 0;
    color:#2a2a2a;
}
.parceiroslinks{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
}
.img{
    margin-inline: 30px;
    margin-top: 30px;
}
@media(max-width: 800px) {
   
    .BtnservContianer{
        flex-wrap:wrap;
    }
}


@media(max-width: 1000px) {
    .MenuForms{
    display: flex;
    flex-wrap: wrap;   
}
.Btnserv{
    margin-top: 40px;
}
.BtnForm{
   margin-top: 20px;
   margin-inline: 20px;
}
}

`;
