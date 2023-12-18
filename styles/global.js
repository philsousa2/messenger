import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
 @font-face {
  
  font-family: 'Calibri';
  src: url("./fonts/calibri.ttf");
}
    


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Calibri, sans-serif;
   
  }
  body {
    background: #fff;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }
  img {
    width: 100%;
    max-width: 100%;
  }


////////
.banner {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation-fill-mode: forwards;
}

.slide.active {
  opacity: 1;
  position: absolute;
  animation-name: fotomovimento;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
}

@keyframes fotomovimento {
  0% {
    //background-position: bottom;
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    //background-position: top;
    opacity: 1;
  }
}

@keyframes fotomovimento2 {
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */

  }
  20% {
    transform: translateX(0); /* Desliza para a posição inicial */
  
  }
  90% {
    transform: translateX(0); /* Permanece na posição inicial */
  
  }
  100% {
    transform: translateX(-100%); /* Desliza para fora da tela à esquerda */
  }
}






.controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
}

.prev-button,
.next-button {
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 44px;
  cursor: pointer;
  width: 50px;
  height: 90px;
  display: flex;
  justify-content: center;
align-items: center;

border-radius: 100px;
}

.prev-button:hover{
  background: rgba(0, 0, 0, 0.9);
  transition: 1s;
}
.next-button:hover{
  background: rgba(0, 0, 0, 0.9);
  transition: 1s;
}
.next-button{
  margin-right: 10px;
}

.prev-button{
  margin-left: 10px;
}

.prev-button:focus,
.next-button:focus {
  outline: none;
}


.slide-content{
  display: flex;
  justify-content: center
}
.infoContainerBanner{
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.tituloBanner{
  width: 40%;
  color: #FFF;
  margin-bottom: 150px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 20px ;
}

.infoBanner{
  color: #FFF
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  margin-left: 60%;
  margin-top: -70px;
}
.Txtinfo{
  display: flex;
  justify-content: flex-start;
  align-items: left;
  margin-top: 7px;
  height: 40px;
}
.TxtinfoH2 {
  padding: 5px ;
  color: #FFF;
  background: rgba(0, 0, 0, 0.8);
}
.TxtinfoH2002 {
  padding: 5px ;
  color: #FFF;
  background: rgba(0, 0, 0, 0.8);
}

.TxtinfoH2003 {
  padding: 5px ;
  color: #FFF;
  background: rgba(0, 0, 0, 0.8);
}

.TxtinfoH2004 {
  padding: 5px ;
  color: #FFF;
  background: rgba(0, 0, 0, 0.8);
}


.TxtinfoH2.reset-animation {
  animation: none;
}
.TxtinfoH2.reset-animation {
  animation: textoMovimento 2s ease; 
}

.TxtinfoH2002.reset-animation{
  animation: none;
}
.TxtinfoH2002.reset-animation {
  animation: textoMovimento02 2s ease; 
}

.TxtinfoH2003.reset-animation {
  animation: none;
}
.TxtinfoH2003.reset-animation {
  animation: textoMovimento03 2s ease; 
}

.TxtinfoH2004.reset-animation {
  animation: none;
}
.TxtinfoH2004.reset-animation {
  animation: textoMovimento04 2s ease; 
}


@keyframes textoMovimento {
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  20% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }
  100% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }

}


@keyframes textoMovimento02 {
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  20% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  40% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }
  100% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }

}

@keyframes textoMovimento03 {
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  40% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  60% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }
  100% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }

}

@keyframes textoMovimento04 {
  0% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  60% {
    transform: translateX(100%); /* Começa fora da tela à direita */
    opacity: 0;
  }
  80% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }
  100% {
    transform: translateX(0); /* Desliza para a posição inicial */
    opacity: 1;
  }

}



.checkbox{
  background: #00457A;
  height: 100%;
  width: 40px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox02{
  background: #00457A;
  height: 100%;
  width: 40px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox03{
  background: #00457A;
  height: 100%;
  width: 40px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox04{
  background: #00457A;
  height: 100%;
  width: 40px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}


.checkbox.reset-animation {
  animation: none;
}
.checkbox.reset-animation {
  animation: checkmovimento 2s ease; 
}

.checkbox02.reset-animation {
  animation: none;
}
.checkbox02.reset-animation {
  animation: checkmovimento 2s ease; 
}

.checkbox03.reset-animation {
  animation: none;
}
.checkbox03.reset-animation {
  animation: checkmovimento 2s ease; 
}

.checkbox04.reset-animation {
  animation: none;
}
.checkbox04.reset-animation {
  animation: checkmovimento 2s ease; 
}

@keyframes checkmovimento {
  10% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }

}


@keyframes checkmovimento02 {
  30% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }

}


@keyframes checkmovimento03 {
  50% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }

}



@keyframes checkmovimento04 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  20% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }

}








@media(max-width: 1100px) {
  .infoBanner{
    font-size: 13px;
  }
  .tituloBanner{
    font-size: 20px;
  }
}

@media(max-width: 1000px) {
  .infoBanner{
    font-size: 12px;
    margin-left: 40%;
  }
  .tituloBanner{
    font-size: 18px;
    width: 60%;
  }
}

@media(max-width: 680px) {
  .infoBanner{
    font-size: 10px;
    margin-left: 0;
  }
  .tituloBanner{
    font-size: 18px;
    width: 80%;
  }
}

`



