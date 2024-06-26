import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
background: #FFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;

h1{
    color: #00457A;
}

span{
text-decoration: underline;

}

p{
    width: 70%;
    margin-top: 30px;
    text-align: center;
}

.formulario{
    width: 90%;
    box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.32);
    border-radius: 20px;
    padding: 40px 200px 40px 200px;
    background:  #F8F8FF;
    margin: 40px 0 80px 0;
    text-align: center;
    color: #00457A;
}

.btn{
    width: 90%;
    margin-top: 20px;
    background-color: #00457A;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
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

.input{
    width: 84%;
    margin-top: 20px;
    margin-inline: 20px;
    height: 50px;
    border-radius: 5px;
    border: #00457A solid 1px;
    text-align: center;
    font-size: 15px;
}

.input2{
    width: 40%;
    margin-top: 20px;
    margin-inline: 20px;
    height: 50px;
    border-radius: 5px;
    border: #00457A solid 1px;
    text-align: center;
    font-size: 15px;
}

.input3{
    width: 20%;
    margin-top: 20px;
    margin-inline: 20px;
    height: 50px;
    border-radius: 5px;
    border: #00457A solid 1px;
    text-align: center;
    font-size: 15px;
}



@media(max-width: 1300px) {
    .formulario{
    padding: 40px 100px 40px 100px;
}
}

@media(max-width: 1300px) {
    .formulario{
    padding: 40px 50px 40px 50px;
}
}

@media(max-width: 900px) {
    p{
    width: 90%;
    margin-top: 30px;
    text-align: center;
}
    .formulario{
    padding: 40px 10px 40px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
}
.btn{
    width:90%;
}

.input{  
    width: 90%;
    margin-top: 15px;
    margin-inline: 0;
}

.input2{
    width: 90%;
    margin-top: 15px;
    margin-inline: 0;
}

.input3{
    width: 90%;
    margin-top: 15px;
    margin-inline: 0;   
}

br {
    display: none;
}
}

`