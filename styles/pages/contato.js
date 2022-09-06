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
.formulario{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
}

.containerinfo{
    display: flex;
    justify-content: center;
    flex-direction: row; 
}
.input{
    width: 300px;
    margin: 5px 0 15px 0;
    height: 50px;
    border-radius: 5px;
    border: #00457A solid 1px;
    text-align: center;
    font-size: 15px;
}
.txtarea{
    border-radius: 5px;
    border: #00457A solid 1px;
    font-size: 15px;
    padding: 10px;
    margin: 5px 0 0 0;
}

.assunto{
    border-radius: 5px;
    border: #00457A solid 1px;
    width: 300px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    margin: 5px 0 15px 0;
   
}

.mapa{
    margin: 50px 0 30px 0;
   border: #00457A solid;
}
.maparesponsivo{
    margin: 50px 0 30px 0;
   border: #00457A solid;
   display: none;
}

.btn{
    width: 300px;
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

.endereco{
    width: 350px;
    height: 170px;
    box-shadow: -1px 1px 20px 4px rgba(0,0,0,0.32);
    border-radius: 20px;
    text-align: left;
    padding: 10px 20px 0px 20px;
    margin-left: 40px;
    margin-top: 20px;
}

.endereco p{
    margin-top: 8px;
}
.endereco span{
    font-weight: bold;
}
.endereco h2{
    color: #00457A;
}

.endereco a{
    color: #00457A;
}

.endereco svg{
    color: #00457A;
}
@media(max-width: 750px) {
    .containerinfo{
    flex-direction: column;
    }
    .endereco{
        margin-left: 0;
        width: 350px;
    }
    .input{
        width: 350px; 
    }
    .assunto{
        width: 350px;
    }
    .btn{
        width: 350px; 
        height: 50px;
    }

    .mapa{
        display: none;
    }
    .maparesponsivo{
        display: initial;
    }
}
`