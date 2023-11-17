import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: -5px;
  background: #00457A; 
  box-shadow: 0px 10px 13px -7px #00457A, 5px 5px 15px 5px rgba(0,0,0,0);
  .img{
    display: none;
    cursor: pointer;
  }

  > section {
    margin: -5px 52px 0 40px;
    display: flex;
    align-items: center;
    gap: 2rem;
    &:last-child {
      gap: 1rem;
    }
   
    > nav {
      margin-left: 68px;
      display: flex;
      gap: 1rem;
      z-index: 2;
      a {
        font-size: 20px;
        position: relative;
        text-decoration: none;
        color: #00457A; 
        margin-left: 23px;
        font-weight: 600;
        
        &:before {
          content: '';
          border-radius: 50px;
          bottom: -5px;
          position: absolute;
          width: 0%;
          height: 3px;
          background: #00457A;
          transition: .3s;
        }
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }    
    .mobile {
      display: none;
    }

    @media(max-width: 900px) {
      
      .mobile {
        display: initial;
        
      }
      > nav {
        display: none;
        
      }
    }
  }

  h1{
    color: #fff;
  }

  .corte{
width: 20%;
height: 50px;
background: #FFF;
position: absolute;
z-index: 1;
transform: skew(-40deg);
}
.corte2{
width: 50%;
height: 50px;
background: #FFF;
position: absolute ;
z-index: 1;
margin-left: 86px;
}

@media(max-width: 1160px) {
  justify-content: center;
  background: #FFF;

  > section {
    margin: 0 ;
  } 
 
  
  .corte{
display: none;
}
.corte2{
  display: none;
}
}

@media(max-width: 900px) {
  background: #00457A;
  margin: auto;
  width: 100%;

  .img{
     display: initial;
     margin-right: 45%;
     margin-top: 10px;
     
  }
   justify-content: center;
  
    }

`; 

