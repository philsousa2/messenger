import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: right;

  .img{
    display: none;
  }

  > section {
    margin: 0 40px 0 40px;
    display: flex;
    align-items: center;
    gap: 2rem;
    &:last-child {
      gap: 1rem;
    }
    > img {
      width: 230px;
      @media(max-width: 500px) {
        width: 120px;
      }
    }
    > nav {
      margin-left: 70px;
      display: flex;
      gap: 1rem;
      a {
        font-size: 20px;
        position: relative;
        text-decoration: none;
        color: #fff;
        margin-left: 25px;
        
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
width: 200px;
height: 55px;
background: #2a2a2a;
position: absolute;
z-index: -1;
transform: skew(-40deg);
}
.corte2{
width: 800px;
height: 55px;
background: #2a2a2a;
position: fixed;
z-index: -1;
margin-left: 150px;
}

@media(max-width: 1160px) {
  justify-content: center;
  background: #2a2a2a;

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
  .img{
     display: initial;
     margin-right: 50%;
     
  }
   justify-content: center;
  
    }

`; 

