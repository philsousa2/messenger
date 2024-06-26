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

p{
    width: 100%;
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

.Info{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.32);
    border-radius: 20px;
    padding: 40px 200px 40px 200px;
    background:  #F8F8FF;
    margin: 40px 0 80px 0;
    text-align: center;
    color: #00457A;
}
.itensInfo{
    width: 100%;
    margin-top: -18px;
    border-bottom: 2px solid #00457A;
}

.Msgerro{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.32);
    border-radius: 20px;
    padding: 40px 100px 40px 100px;
    background:  #F8F8FF;
    margin: 40px 0 80px 0;
    text-align: center;
    color: #00457A;
}

.btn{
    width: 150px;
    margin-top: 20px;
    background-color: #00457A;
    height: 50px;
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
    width: 40%;
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

    .Info{
        padding: 15px;
    }

    .Msgerro{
        padding: 130px 0 130px 0;
    }
.itensInfo{
    width: 300px;
    margin-top: -18px;
    border-bottom: 2px solid #00457A;
}
 
h4{
    margin: 30px 0 0px 0;
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

}

`;