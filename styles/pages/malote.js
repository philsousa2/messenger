import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;


.Container{
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.txt{
    text-align: justify;
    margin-top: 50px;
}

.txt  li{
    margin-top: 10px;
}

.txt span{
    text-decoration: underline;
}

.btn{
    width: 200px;
    margin: 20px 0 40px 0;
    background-color: #00457A;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
}

.btn:hover{
    background-color: #1E90FF;
    transform: scale(1.01);
    transition: 0.2s;
}
.btn:active{
    background-color: #ADD8E6;
    transform: scale(0.9);
    transition: 0.2s;
}

h3 a {
    color: #00457A;
    text-decoration: underline;
}
li ol{
    margin-left: 70px;
}

`