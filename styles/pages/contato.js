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
}

.containerinfo{
    display: flex;
    justify-content: center;
    flex-direction: row; 
    flex-wrap: wrap;
}
.input{
    width: 300px;
    margin-top: 20px;
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
    margin-top: 5px;
}
.endereco span{
    font-weight: bold;
}
.endereco h2{
    color: #00457A;
}
@media(max-width: 750px) {
    .endereco{
        margin-left: 0;
        width: 450px;
    }
    .input{
        width: 450px; 
    }
    .btn{
        width: 450px; 
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