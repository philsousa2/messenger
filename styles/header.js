import styled, { css } from "styled-components";

export const Container = styled.div`
background-color: #FFF;
width: 100%;
height: 130px;
display: flex;
justify-content: left;
flex-direction: row;
height: 130px;

.LogoContainer{
background-color: #FFF;
height: 130px;
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
font-size: 40px;
}
.Logo{
    position: absolute;
    height: 170px;
    width: 10%;
    background-color: #00457A;
    z-index: 1;
}
.LogoFinal{
    transform: skew(-40deg);
    height: 170px;
    width: 35%;
    background-color: #00457A;
    margin-left: -350px;
}
.img{
    margin-left: 150px;
    z-index: 2;
}
.Contatos{
width: 50%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: black;
font-size: 18px;
margin-left: 30px;
}
.Contatos a {
    margin-left: 30px;
}
@media(max-width: 1600px) {

.LogoFinal{
    transform: skew(-40deg);
    width: 40%;
    background-color: #00457A;
    margin-left: -400px;
}
.img{
    margin-left: 200px;
    z-index: 2;
}
}

@media(max-width: 1565px) {

.LogoFinal{
    transform: skew(-40deg);
    width: 37%;
    background-color: #00457A;
    margin-left: -400px;
}
.img{
    margin-left: 150px;
    z-index: 2;
}
}



@media(max-width: 1450px) {
    .LogoFinal{
    transform: skew(-40deg);
    width: 40%;
    background-color: #00457A;
    margin-left: -400px;
}

.img{
    margin-left: 50px;
    z-index: 2;
}
}

@media(max-width: 1350px) {
    .LogoFinal{
    transform: skew(-40deg);
    width: 40%;
    background-color: #00457A;
    margin-left: -400px;
}


.img{
    margin-left: 20px;
    z-index: 2;
}
}



@media(max-width: 1300px) {
    .LogoFinal{
    transform: skew(-40deg);
    width: 35%;
    background-color: #00457A;
    margin-left: -400px;
}
.img{
    margin-left: 60px;
    z-index: 2;
}
.Contatos{
    font-size: 15px;
}
}


@media(max-width: 1250px) {

    .LogoFinal{
    transform: skew(-40deg);
    width: 33%;
    background-color: #00457A;
    margin-left: -400px;
}

.img{
    margin-left: 60px;
    z-index: 2;
}
}

@media(max-width: 1200px) {
    .Logo{
    position: absolute;
    width: 10%;
    background-color: #00457A;
    z-index: 1;
}
.LogoFinal{
    transform: skew(-40deg);
    width: 350px;
    background-color: #00457A;
    margin-left: -350px;
}

.img{
    margin-left: 20px;
    z-index: 2;
}

}

@media(max-width: 1160px) {
    background-color: #00457A;
    justify-content: center;
.LogoContainer{
height: 140px;
background-color: #00457A;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
transition: linear;
}
.Logo{
   display: none;
}
.LogoFinal{
    display: none;
}
.img{
    margin-top: -70px;
    z-index: 2;
}

.Contatos{
    margin-top: -135px;
    width: 100%;
    color: #FFF;
}
}

@media(max-width: 900px) {
   display: none;
    }


`