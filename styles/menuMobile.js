import styled, { css } from "styled-components";

export const Container = styled.div`
position: absolute;
backdrop-filter: blur(3px);
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 5;
display: none;
align-items: center;
justify-content: center;
background: rgba(17, 18, 17, 0.95);
background: linear-gradient(34deg, rgba(255,0,0,0.95) 0%, rgba(17,18,17,0.95) 95%);
pointer-events: none;
color: #FFF;

${({ menuVisible }) => menuVisible && css`
    display: flex;
    pointer-events: auto;
    animation: fadeIn 0.7s;
    transition: 0.7s;
   
`} 

> svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    animation: btnSvg 0.7s;
    transition: 0.7s;
}

> nav{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    font-size: 35px;
}

@keyframes fadeIn {
  0% {
    transform: opacity(0);
    transform: translateY(50px);
}
  100% {
    transform: opacity(1);
    transform: translateY(0);    
}
}

@keyframes btnSvg {
  0% {
    transform: rotate(65deg);
}
  100% {
    transform: rotate(0deg);      
}
}

@keyframes close {
  0% {
    transform: opacity(1);
    transform: translateY(0);
}
  100% {
    transform: opacity(0);
    transform: translateY(50px);    
}
}


`;