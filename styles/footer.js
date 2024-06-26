import styled, { css } from "styled-components";

export const Container = styled.div`
width: 100%;
height: 140px;
background: #00457A;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
color: #FFF;
text-align: center;

h3{
    margin-top: 0px; 
}
h4{
    margin-top: 10px; 
}

.linha{
width:100%;
border: 1px solid #FFF;
margin-top: 10px;
}

.linha2{
   height:60%;
   width: 1px;
    border: 1px solid #FFF;
    margin-top: 10px;
    margin-left: 100px;
    margin-right: 100px
    }

.texto{
    width: 600px;
}

@media(max-width: 800px) {
    height: 100%;
    .linha2{
       display: none;

         }

         .img{
            margin-top: 30px
         }
         .texto{
            margin-bottom: 30px
        }
  }
  


`


