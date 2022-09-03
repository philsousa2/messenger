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

h3{
    margin-top: 30px;
}

h4{
    margin: 30px 0 0 0;
}

p{
    width: 70%;
    margin-top: 30px;
    text-align: center;
}

.txt{
    margin-inline: 30px;
    margin: 20px  0 20px 0;

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
    margin-top: 20px;
    height: 55px;
    width:90%;
    margin-inline: 20px;
}

.input{
    width: 84%;
    margin-top: 20px;
    margin-inline: 20px;
}

.input2{
    width: 40%;
    margin-top: 20px;
    margin-inline: 20px;
}

.input3{
    width: 20%;
    margin-top: 20px;
    margin-inline: 10px;
}
.input4{
    width: 10%;
    margin-top: 20px;
    margin-inline: 10px;
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

.input4{
    margin-top: 15px;
    width: 90%;
    margin-inline: 0;
}
br {
    display: none;
}
}

`