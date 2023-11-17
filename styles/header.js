import styled, { css } from "styled-components";

export const Container = styled.div`
background-color: #00457A;
width: 100%;
height: 90px;
display: flex;
justify-content: left;
flex-direction: row;


.LogoContainer{
background-color: #00457A;
height: 90px;
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
font-size: 40px;
}
.Logo{
    position: absolute;
    height: 20%;
    width: 10%;
    background-color: #FFF;
    z-index: 1;
}
.LogoFinal{
    transform: skew(-40deg);
    height: 20%;
    width: 35%;
    background-color: #FFF;
    margin-left: -350px;
}
.img{
    margin-left: 200px;
    margin-top: 20px;
    z-index: 2;
    cursor: pointer;
}

.img2{
    margin-left: 200px;
    z-index: 2;
    display:none;
    cursor: pointer;
}
.Contatos{
width: 55%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: black;
font-size: 18px;
margin-left: 120px;
color: #FFF;
}
.Contatos a {
    margin-left: 30px;
}
@media(max-width: 1600px) {

.LogoFinal{
    transform: skew(-40deg);
    width: 40%;
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
    z-index: 1;
}
.LogoFinal{
    transform: skew(-40deg);
    width: 350px;
    margin-left: -350px;
}

.img{
    margin-left: 20px;
    z-index: 2;
}

}

@media(max-width: 1160px) {
    flex-direction: column;
    
.LogoContainer{
height: 140px;
background-color: #00457A;

}
.Logo{
   display: none;
}
.LogoFinal{
    display: none;
}
.img{
    z-index: 2;
    display: none;
}
.img2{
    z-index: 2;
    display: initial;
}

.Contatos{
    width: 100%;
    color: #FFF;
    margin-left: 30px
}
}

@media(max-width: 900px) {
   display: none;
    }


`